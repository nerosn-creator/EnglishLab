import React, { useState } from 'react';
import { BookOpen, Volume2, Sparkles, CheckCircle2, Award, Lightbulb, Play, ArrowRight } from 'lucide-react';
import { GRADE_LESSONS_DATA } from '../data/gradeLessons';
import { RAW_QUESTION_BANK } from '../data/questionBank';
import { mutateQuestion } from '../engine/questionMutator';
import QuestionCard from './QuestionCard';

export default function GradeTutorials() {
  const [selectedGradeKey, setSelectedGradeKey] = useState('g1');
  const [activeTab, setActiveTab] = useState('grammar'); // 'grammar', 'vocab', 'tips', 'quiz'
  
  // Practice quiz state
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);

  const lessonData = GRADE_LESSONS_DATA[selectedGradeKey] || GRADE_LESSONS_DATA['g1'];

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  // Get matching practice questions for selected grade
  const gradeQuestions = RAW_QUESTION_BANK.filter(q => q.gradeLevel === selectedGradeKey);
  const currentRawQuestion = gradeQuestions[quizQuestionIndex] || RAW_QUESTION_BANK[0];
  const currentMutatedQuestion = mutateQuestion(currentRawQuestion, Math.floor(Math.random() * 9999));

  return (
    <div className="tutorials-wrapper">
      {/* Grade Selector Strip */}
      <div className="tutorials-grade-bar">
        {Object.keys(GRADE_LESSONS_DATA).map((gradeKey) => {
          const item = GRADE_LESSONS_DATA[gradeKey];
          const isSelected = selectedGradeKey === gradeKey;
          return (
            <button
              key={gradeKey}
              className={`grade-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => {
                setSelectedGradeKey(gradeKey);
                setQuizQuestionIndex(0);
              }}
            >
              <span className="btn-grade-name">{item.gradeTitle.split(' ')[0]}</span>
              <span className="btn-cefr-tag">{item.cefr}</span>
            </button>
          );
        })}
      </div>

      {/* Grade Overview Header Banner */}
      <div className="tutorials-banner">
        <div className="banner-top-meta">
          <span className="cefr-pill"><Award size={14} /> CEFR: {lessonData.cefr}</span>
          <span className="grade-pill">{lessonData.gradeTitle} 互動教程</span>
        </div>
        <h2 className="banner-grade-title">{lessonData.gradeTitle} 英文核心課程教程</h2>
        <p className="banner-grade-summary">{lessonData.summary}</p>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="tutorials-nav-tabs">
        <button 
          className={`sub-nav-btn ${activeTab === 'grammar' ? 'active' : ''}`}
          onClick={() => setActiveTab('grammar')}
        >
          <BookOpen size={16} /> 核心文法與句型
        </button>

        <button 
          className={`sub-nav-btn ${activeTab === 'vocab' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocab')}
        >
          <Sparkles size={16} /> 高頻必考單字庫 ({lessonData.vocabList.length})
        </button>

        <button 
          className={`sub-nav-btn ${activeTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          <Lightbulb size={16} /> 備考與答題技巧
        </button>

        <button 
          className={`sub-nav-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <CheckCircle2 size={16} /> 單元小試身手
        </button>
      </div>

      {/* Tab 1: Grammar & Sentence Patterns */}
      {activeTab === 'grammar' && (
        <div className="tutorials-content-section">
          {lessonData.grammarLessons.map((gLesson, idx) => (
            <div key={idx} className="grammar-card">
              <h3 className="grammar-card-title">{gLesson.title}</h3>
              
              <div className="formula-box">
                <span className="formula-label">📌 核心句型公式 (Formula):</span>
                <code className="formula-code">{gLesson.formula}</code>
              </div>

              <p className="explanation-text">{gLesson.explanation}</p>

              <div className="examples-list">
                <div className="examples-header">💡 實用例句示範 (Click sound icon to listen):</div>
                {gLesson.examples.map((ex, eIdx) => (
                  <div key={eIdx} className="example-item">
                    <button className="btn-audio-small" onClick={() => handleSpeak(ex.en)}>
                      <Volume2 size={16} />
                    </button>
                    <div>
                      <div className="ex-en">{ex.en}</div>
                      <div className="ex-zh">{ex.zh}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Vocabulary Flashcards */}
      {activeTab === 'vocab' && (
        <div className="vocab-grid">
          {lessonData.vocabList.map((item, idx) => (
            <div key={idx} className="vocab-card">
              <div className="vocab-card-header">
                <div>
                  <span className="vocab-word">{item.word}</span>
                  <span className="vocab-pos">{item.pos}</span>
                </div>
                <button className="btn-audio-round" onClick={() => handleSpeak(item.word)}>
                  <Volume2 size={18} />
                </button>
              </div>

              <div className="vocab-meaning">中文意涵：<strong>{item.meaning}</strong></div>
              
              <div className="vocab-example-box">
                <div className="example-label">例句:</div>
                <p className="example-content">"{item.example}"</p>
                <button className="btn-text-speak" onClick={() => handleSpeak(item.example)}>
                  <Play size={12} /> 朗讀例句
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Exam Tips */}
      {activeTab === 'tips' && (
        <div className="tips-card">
          <div className="tips-icon-box">
            <Lightbulb size={28} className="text-warning" />
          </div>
          <div>
            <h3 className="tips-title">{lessonData.gradeTitle} 備考與解題關鍵技巧</h3>
            <p className="tips-body">{lessonData.examTip}</p>
          </div>
        </div>
      )}

      {/* Tab 4: Unit Practice Quiz */}
      {activeTab === 'quiz' && (
        <div className="tutorials-quiz-workspace">
          <QuestionCard
            question={currentMutatedQuestion}
            questionNumber={quizQuestionIndex + 1}
            totalQuestions={gradeQuestions.length > 0 ? gradeQuestions.length : 1}
            onAnswer={() => setQuizAnswered(true)}
            onNextQuestion={() => {
              setQuizAnswered(false);
              if (quizQuestionIndex + 1 < gradeQuestions.length) {
                setQuizQuestionIndex(prev => prev + 1);
              } else {
                setQuizQuestionIndex(0);
              }
            }}
            onMutateQuestion={() => {}}
          />
        </div>
      )}
    </div>
  );
}
