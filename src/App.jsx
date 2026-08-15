import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import GradeSelector from './components/GradeSelector';
import QuestionCard from './components/QuestionCard';
import Analytics from './components/Analytics';
import PreschoolPractice from './components/PreschoolPractice';
import GradeTutorials from './components/GradeTutorials';
import CameraWordScanner from './components/CameraWordScanner';
import { RAW_QUESTION_BANK } from './data/questionBank';
import { GRADE_BENCHMARKS } from './data/gradeTopics';
import { mutateQuestion } from './engine/questionMutator';
import { AdaptiveEngine } from './engine/adaptiveEngine';
import { calculateComprehensiveResults } from './engine/scorer';

export default function App() {
  const [testMode, setTestMode] = useState('all'); // all, camera_scanner, tutorials, preschool, grades, ielts, toefl, adaptive
  const [selectedGradeId, setSelectedGradeId] = useState('all');
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  
  // Active questions array (mutated version)
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  // CAT Adaptive Engine instance
  const [adaptiveInstance, setAdaptiveInstance] = useState(null);

  // Initialize questions based on mode & grade filters
  useEffect(() => {
    if (testMode === 'preschool' || testMode === 'tutorials' || testMode === 'camera_scanner') return;
    initQuizSession(testMode, selectedGradeId);
  }, [testMode, selectedGradeId]);

  const initQuizSession = (mode, gradeId) => {
    let filtered = [...RAW_QUESTION_BANK];

    if (gradeId !== 'all') {
      const matchGrade = filtered.filter(q => q.gradeLevel === gradeId);
      if (matchGrade.length > 0) {
        filtered = matchGrade;
      }
    } else if (mode === 'ielts') {
      filtered = filtered.filter(q => q.examType && q.examType.includes('IELTS'));
    } else if (mode === 'toefl') {
      filtered = filtered.filter(q => q.examType && q.examType.includes('TOEFL'));
    }

    if (filtered.length === 0) {
      filtered = [...RAW_QUESTION_BANK];
    }

    const mutatedList = filtered.map((qItem, idx) => {
      const randomSeed = Math.floor(Math.random() * 9000) + 1000 + idx;
      return mutateQuestion(qItem, randomSeed);
    });

    setActiveQuestions(mutatedList);
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsFinished(false);

    if (mode === 'adaptive') {
      setAdaptiveInstance(new AdaptiveEngine(3)); // Start Grade 4
    } else {
      setAdaptiveInstance(null);
    }
  };

  const handleSelectGradeFromModal = (gradeId) => {
    setSelectedGradeId(gradeId);
    if (gradeId !== 'all') {
      if (testMode === 'preschool' || testMode === 'tutorials' || testMode === 'camera_scanner') {
        setTestMode('grades');
      } else {
        initQuizSession(testMode === 'all' ? 'grades' : testMode, gradeId);
      }
    } else {
      initQuizSession(testMode, 'all');
    }
  };

  const handleAnswerSubmit = (question, selectedOptionIndex, isCorrect) => {
    const newAnswerRecord = { question, selectedOptionIndex, isCorrect };
    setUserAnswers(prev => [...prev, newAnswerRecord]);

    if (testMode === 'adaptive' && adaptiveInstance) {
      adaptiveInstance.recordAnswer(question, isCorrect);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleMutateQuestionOnDemand = (questionId) => {
    setActiveQuestions(prevList => {
      return prevList.map(q => {
        if (q.id === questionId) {
          const freshSeed = Math.floor(Math.random() * 9999) + 100;
          return mutateQuestion(q, freshSeed);
        }
        return q;
      });
    });
  };

  const handleRechallengeMutated = () => {
    const wrongRecords = userAnswers.filter(a => !a.isCorrect);
    let reList = [];

    if (wrongRecords.length > 0) {
      reList = wrongRecords.map(rec => {
        const freshSeed = Math.floor(Math.random() * 8888) + 200;
        return mutateQuestion(rec.question, freshSeed);
      });
    } else {
      reList = RAW_QUESTION_BANK.map(q => mutateQuestion(q, Math.floor(Math.random() * 9999)));
    }

    setActiveQuestions(reList);
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsFinished(false);
  };

  const handleResetQuiz = () => {
    initQuizSession(testMode, selectedGradeId);
  };

  const comprehensiveResults = useMemo(() => {
    if (!isFinished || userAnswers.length === 0) return null;
    return calculateComprehensiveResults(userAnswers);
  }, [isFinished, userAnswers]);

  const currentQuestion = activeQuestions[currentIndex];
  const currentGradeName = selectedGradeId !== 'all' 
    ? (GRADE_BENCHMARKS.find(g => g.id === selectedGradeId)?.name || '')
    : '';

  return (
    <div className="app-main-layout">
      {/* Navigation & Control Header */}
      <Header 
        currentMode={testMode}
        onSelectMode={(mode) => setTestMode(mode)}
        onOpenGradeInspector={() => setIsGradeModalOpen(true)}
        onResetQuiz={handleResetQuiz}
        completedCount={userAnswers.length}
        totalCount={activeQuestions.length}
        currentGradeName={currentGradeName}
      />

      {/* Main Content Body */}
      <main className="main-content-body">
        {/* Camera Photo Scanner Mode */}
        {testMode === 'camera_scanner' && (
          <CameraWordScanner />
        )}

        {/* 1-12 Grade Interactive Tutorials */}
        {testMode === 'tutorials' && (
          <GradeTutorials />
        )}

        {/* Toddler / Preschool Practice Mode */}
        {testMode === 'preschool' && (
          <PreschoolPractice />
        )}

        {/* Regular Quiz Mode */}
        {testMode !== 'preschool' && testMode !== 'tutorials' && testMode !== 'camera_scanner' && !isFinished && currentQuestion && (
          <div className="quiz-workspace">
            <QuestionCard 
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={activeQuestions.length}
              onAnswer={handleAnswerSubmit}
              onNextQuestion={handleNextQuestion}
              onMutateQuestion={handleMutateQuestionOnDemand}
            />
          </div>
        )}

        {/* Analytics Report View */}
        {testMode !== 'preschool' && testMode !== 'tutorials' && testMode !== 'camera_scanner' && isFinished && (
          <Analytics 
            results={comprehensiveResults}
            onRetakeQuiz={handleResetQuiz}
            onRechallengeMutated={handleRechallengeMutated}
          />
        )}
      </main>

      {/* 1-12 Grade Inspector Modal */}
      <GradeSelector 
        isOpen={isGradeModalOpen}
        onClose={() => setIsGradeModalOpen(false)}
        selectedGradeId={selectedGradeId}
        onSelectGrade={handleSelectGradeFromModal}
      />
    </div>
  );
}
