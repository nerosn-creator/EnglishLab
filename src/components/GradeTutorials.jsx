import React, { useState } from 'react';
import { Volume2, BookOpen, Sparkles, Lightbulb, CheckCircle2, HelpCircle, ArrowRight, Award, Zap, ChevronRight } from 'lucide-react';
import { GRADE_LESSONS_DATA } from '../data/gradeLessons';

export default function GradeTutorials() {
  const [selectedGradeId, setSelectedGradeId] = useState('g1');
  const [activeTab, setActiveTab] = useState('grammar'); // 'grammar', 'vocab', 'tips', 'quiz'
  const [userQuizAnswers, setUserQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const currentLesson = GRADE_LESSONS_DATA[selectedGradeId] || GRADE_LESSONS_DATA['g1'];

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleQuizSelect = (qIdx, optionIdx) => {
    setUserQuizAnswers(prev => ({ ...prev, [qIdx]: optionIdx }));
  };

  const gradeKeys = Object.keys(GRADE_LESSONS_DATA);

  return (
    <div className="tutorials-master-container">
      {/* 1-12 Grade Horizontal Carousel Bar */}
      <div className="tutorials-grade-carousel">
        {gradeKeys.map((gKey) => {
          const lesson = GRADE_LESSONS_DATA[gKey];
          const isSelected = selectedGradeId === gKey;
          return (
            <button
              key={gKey}
              className={`gt-grade-pill ${isSelected ? 'active' : ''}`}
              onClick={() => {
                setSelectedGradeId(gKey);
                setUserQuizAnswers({});
                setShowQuizResults(false);
              }}
            >
              <span className="gt-pill-title">{lesson.gradeTitle.split('(')[0]}</span>
              <span className="gt-pill-cefr">{lesson.cefr}</span>
            </button>
          );
        })}
      </div>

      {/* Hero Lesson Header Banner Card */}
      <div className="gt-hero-card">
        <div className="gt-hero-meta">
          <span className="gt-badge-cefr"><Sparkles size={14} /> CEFR: {currentLesson.cefr}</span>
          <span className="gt-badge-exam"><Award size={14} /> 檢定對照: {currentLesson.examEquiv}</span>
        </div>

        <h1 className="gt-hero-title">{currentLesson.gradeTitle} 英文核心教程</h1>
        <p className="gt-hero-desc">{currentLesson.overview}</p>
      </div>

      {/* Structured 4-Tab Navigation Header */}
      <div className="gt-tabs-bar">
        <button 
          className={`gt-tab-item ${activeTab === 'grammar' ? 'active' : ''}`}
          onClick={() => setActiveTab('grammar')}
        >
          <BookOpen size={18} />
          <span>核心文法與句型 ({currentLesson.grammarRules.length})</span>
        </button>

        <button 
          className={`gt-tab-item ${activeTab === 'vocab' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocab')}
        >
          <Sparkles size={18} />
          <span>高頻必考單字庫 ({currentLesson.vocabList.length})</span>
        </button>

        <button 
          className={`gt-tab-item ${activeTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          <Lightbulb size={18} />
          <span>備考與答題技巧 ({currentLesson.examTips.length})</span>
        </button>

        <button 
          className={`gt-tab-item ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <HelpCircle size={18} />
          <span>單元小試身手 ({currentLesson.unitQuiz.length})</span>
        </button>
      </div>

      {/* TAB 1: CORE GRAMMAR & FORMULAS */}
      {activeTab === 'grammar' && (
        <div className="gt-tab-content-card">
          <h2 className="gt-section-header">
            <BookOpen size={22} className="text-primary" /> 核心文法概念與句型公式 (Grammar Rules & Formulas)
          </h2>

          <div className="gt-grammar-list">
            {currentLesson.grammarRules.map((rule, idx) => (
              <div key={idx} className="gt-grammar-rule-card">
                <h3 className="gt-rule-title">核心文法 {idx + 1}: {rule.title}</h3>
                
                {/* Visual Formula Box Card */}
                <div className="gt-formula-box">
                  <div className="gt-formula-label">📌 核心句型公式 (Formula):</div>
                  <div className="gt-formula-code">{rule.formula}</div>
                </div>

                <p className="gt-rule-explanation">{rule.explanation}</p>

                {/* Example Sentences with Audio */}
                <div className="gt-examples-container">
                  <div className="gt-examples-header">💡 實用例句示範 (Click sound icon to listen):</div>
                  {rule.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="gt-example-card">
                      <button className="gt-btn-speak-icon" onClick={() => handleSpeak(ex.en)}>
                        <Volume2 size={18} />
                      </button>
                      <div className="gt-example-text">
                        <div className="gt-ex-en">{ex.en}</div>
                        <div className="gt-ex-zh">{ex.zh} <span className="gt-ex-note">({ex.note})</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: ESSENTIAL VOCABULARY GRID */}
      {activeTab === 'vocab' && (
        <div className="gt-tab-content-card">
          <h2 className="gt-section-header">
            <Sparkles size={22} className="text-secondary" /> {currentLesson.gradeTitle} 必考核心單字庫 (Essential Vocabulary)
          </h2>

          <div className="gt-vocab-grid">
            {currentLesson.vocabList.map((vItem, vIdx) => (
              <div key={vIdx} className="gt-vocab-card">
                <div className="gt-vocab-card-top">
                  <div>
                    <span className="gt-vocab-word">{vItem.word}</span>
                    <span className="gt-vocab-pos">{vItem.pos}</span>
                  </div>

                  <button className="gt-btn-speak-icon" onClick={() => handleSpeak(vItem.word)}>
                    <Volume2 size={18} />
                  </button>
                </div>

                <div className="gt-vocab-phonetic">{vItem.phonetic}</div>
                <div className="gt-vocab-trans">{vItem.trans}</div>
                <div className="gt-vocab-def">{vItem.def}</div>

                <div className="gt-vocab-ex-box">
                  <div className="gt-vocab-ex-en">"{vItem.exEn}"</div>
                  <div className="gt-vocab-ex-zh">{vItem.exZh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: EXAM MASTERY TIPS */}
      {activeTab === 'tips' && (
        <div className="gt-tab-content-card">
          <h2 className="gt-section-header">
            <Lightbulb size={22} className="text-warning" /> 大考與學測解題技巧 (Exam Mastery & Distractor Traps)
          </h2>

          <div className="gt-tips-list">
            {currentLesson.examTips.map((tip, tIdx) => (
              <div key={tIdx} className="gt-tip-card">
                <div className="gt-tip-icon">
                  <Zap size={22} className="text-warning" />
                </div>
                <div className="gt-tip-body">
                  <h3 className="gt-tip-title">解題技巧 {tIdx + 1}: {tip.topic}</h3>
                  <p className="gt-tip-desc">{tip.tip}</p>
                  <div className="gt-tip-trap">
                    <strong>⚠️ 常見陷阱與扣分剖析:</strong> {tip.trap}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: UNIT PRACTICE QUIZ */}
      {activeTab === 'quiz' && (
        <div className="gt-tab-content-card">
          <h2 className="gt-section-header">
            <HelpCircle size={22} className="text-accent" /> 本單元隨堂小試身手 (Unit Practice Quiz)
          </h2>

          <div className="gt-quiz-list">
            {currentLesson.unitQuiz.map((qItem, qIdx) => {
              const selectedOpt = userQuizAnswers[qIdx];
              return (
                <div key={qIdx} className="gt-quiz-card">
                  <div className="gt-quiz-q-num">試題 {qIdx + 1}</div>
                  <h3 className="gt-quiz-prompt">{qItem.prompt}</h3>

                  <div className="gt-quiz-options">
                    {qItem.options.map((opt, oIdx) => {
                      const isChosen = selectedOpt === oIdx;
                      const isCorrect = oIdx === qItem.answerIndex;
                      let optClass = "gt-quiz-opt";

                      if (showQuizResults) {
                        if (isCorrect) optClass += " correct";
                        else if (isChosen) optClass += " wrong";
                      } else if (isChosen) {
                        optClass += " selected";
                      }

                      return (
                        <button
                          key={oIdx}
                          className={optClass}
                          onClick={() => handleQuizSelect(qIdx, oIdx)}
                        >
                          <span>{opt}</span>
                          {showQuizResults && isCorrect && <span className="gt-check-text">✓ 正確答案</span>}
                        </button>
                      );
                    })}
                  </div>

                  {showQuizResults && (
                    <div className="gt-quiz-explanation">
                      <strong>💡 詳細解析:</strong> {qItem.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="gt-quiz-action-bar">
              <button 
                className="gt-btn-check-quiz"
                onClick={() => setShowQuizResults(true)}
              >
                <CheckCircle2 size={18} /> 核對單元小試解答與聽力音訊
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
