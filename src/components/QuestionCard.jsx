import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, HelpCircle, BookOpen, Sparkles, Feather, AlertTriangle, Layers } from 'lucide-react';
import MutationBadge from './MutationBadge';
import AudioPlayer from './AudioPlayer';

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNextQuestion,
  onMutateQuestion
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [question.id, question.mutationSeed]);

  const handleOptionClick = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === question.correctIndex;
    onAnswer(question, selectedOption, isCorrect);
  };

  const isWritingOrSpeaking = question.type === 'writing_prompt' || question.type === 'speaking_prompt';

  return (
    <div className="question-card-wrapper">
      {/* Top Metadata Bar */}
      <div className="card-meta-bar">
        <div className="meta-left">
          <span className="badge-q-number">題號 {questionNumber} / {totalQuestions}</span>
          <span className="badge-grade">{question.gradeLevel ? question.gradeLevel.toUpperCase() : 'G-GENERAL'}</span>
          <span className="badge-cefr">{question.cefr || 'B2'}</span>
          <span className="badge-exam-type">{question.examType || '大考高階題'}</span>
        </div>
        <div className="meta-right">
          <span className="skill-label">{question.skill || '學術語篇評測'}</span>
        </div>
      </div>

      {/* Dynamic Mutation Badge */}
      <MutationBadge 
        question={question} 
        onMutateOnDemand={() => onMutateQuestion(question.id)} 
      />

      {/* Main Question Header */}
      <h3 className="question-title">
        {question.title || ` Question ${questionNumber}`}
      </h3>

      {/* Reading Passage if Reading type */}
      {question.renderedPassage && (
        <div className="passage-box">
          <div className="passage-header">
            <BookOpen size={16} /> 閱讀測驗學術長篇段落 (Academic Passage):
          </div>
          <p className="passage-body">{question.renderedPassage}</p>
        </div>
      )}

      {/* Audio Player if Listening type */}
      {question.type === 'listening' && question.renderedScript && (
        <AudioPlayer 
          scriptText={question.renderedScript} 
          examType={question.examType || 'TOEFL iBT'} 
        />
      )}

      {/* Main Question Text */}
      <div className="question-prompt">
        {question.renderedQuestion}
      </div>

      {/* Options List (Multiple Choice) */}
      {!isWritingOrSpeaking && question.options && (
        <div className="options-grid">
          {question.options.map((optionText, index) => {
            let optionStateClass = '';
            if (isSubmitted) {
              if (index === question.correctIndex) {
                optionStateClass = 'correct-choice';
              } else if (index === selectedOption) {
                optionStateClass = 'wrong-choice';
              } else {
                optionStateClass = 'disabled-choice';
              }
            } else if (selectedOption === index) {
              optionStateClass = 'selected-choice';
            }

            return (
              <button
                key={index}
                className={`option-card ${optionStateClass}`}
                onClick={() => handleOptionClick(index)}
                disabled={isSubmitted}
              >
                <div className="option-prefix">
                  {String.fromCharCode(65 + index)}
                </div>
                <div className="option-text">{optionText}</div>
                {isSubmitted && index === question.correctIndex && (
                  <CheckCircle2 size={20} className="icon-state text-success" />
                )}
                {isSubmitted && index === selectedOption && index !== question.correctIndex && (
                  <XCircle size={20} className="icon-state text-danger" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Writing / Speaking Prompt Display */}
      {isWritingOrSpeaking && (
        <div className="writing-prompt-card">
          <div className="prompt-section-title">
            <Feather size={18} /> 評分重點與高階範文指標 (Assessment Criteria):
          </div>
          <div className="criteria-tags">
            {question.keyCriteria && question.keyCriteria.map((c, i) => (
              <span key={i} className="criterion-tag">• {c}</span>
            ))}
          </div>

          <div className="model-answer-box">
            <h4>💡 雅思 8.5 / 托福 110+ 滿分示範答題 (Exemplar Response):</h4>
            <p>"{question.sampleResponse}"</p>
          </div>
        </div>
      )}

      {/* Deep Professional Analysis Card after submission */}
      {isSubmitted && (
        <div className={`explanation-card ${selectedOption === question.correctIndex ? 'success-bg' : 'warning-bg'}`}>
          <div className="explanation-title">
            <HelpCircle size={18} />
            <span>解題深度剖析與命題邏輯 (Linguistic & Syntax Analysis):</span>
          </div>

          <p className="explanation-body">{question.explanation || '本題考驗基礎詞彙與句型結構對應。'}</p>

          {/* Question Intent */}
          {question.intent && (
            <div className="analysis-sub-box">
              <div className="analysis-sub-title">🧠 考點動機與命題邏輯 (Question Intent):</div>
              <p>{question.intent}</p>
            </div>
          )}

          {/* Distractor Trap Analysis */}
          {question.distractorAnalysis && question.distractorAnalysis.length > 0 && (
            <div className="analysis-sub-box">
              <div className="analysis-sub-title"><AlertTriangle size={14} className="text-warning" /> 陷阱干擾項深度剖析 (Distractor Breakdown):</div>
              <ul className="distractor-list">
                {question.distractorAnalysis.map((dItem, dIdx) => (
                  <li key={dIdx}>• {dItem}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Academic Etymology & Synonyms */}
          {question.academicEtymology && (
            <div className="analysis-sub-box">
              <div className="analysis-sub-title"><Layers size={14} className="text-primary" /> 詞根詞綴與學術同義替換 (Etymology & Paraphrasing):</div>
              <code className="etymology-code">{question.academicEtymology}</code>
            </div>
          )}
        </div>
      )}

      {/* Action Footer */}
      <div className="card-action-footer">
        {!isSubmitted && !isWritingOrSpeaking && (
          <button
            className="btn-submit-answer"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            <span>確認答案</span>
          </button>
        )}

        {(isSubmitted || isWritingOrSpeaking) && (
          <button className="btn-next-question" onClick={onNextQuestion}>
            <span>{questionNumber < totalQuestions ? '下一題' : '查看完整能力評測報告'}</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
