import React, { useState } from 'react';
import { Volume2, BookOpen, Sparkles, Lightbulb, HelpCircle, Award, Zap } from 'lucide-react';
import { GRADE_LESSONS_DATA } from '../data/gradeLessons';

export default function GradeTutorials() {
  const [selectedGradeId, setSelectedGradeId] = useState('g1');
  const [activeTab, setActiveTab] = useState('grammar');

  const currentLesson = GRADE_LESSONS_DATA[selectedGradeId] || GRADE_LESSONS_DATA['g1'];
  const gradeKeys = Object.keys(GRADE_LESSONS_DATA);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.88;
    window.speechSynthesis.speak(u);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* ── GRADE PILL CAROUSEL ── */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
        scrollbarWidth: 'none',
      }}>
        {gradeKeys.map((gKey) => {
          const lesson = GRADE_LESSONS_DATA[gKey];
          if (!lesson) return null;
          const active = selectedGradeId === gKey;
          return (
            <button
              key={gKey}
              onClick={() => { setSelectedGradeId(gKey); setActiveTab('grammar'); }}
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.55rem 1rem',
                borderRadius: '12px',
                border: active ? '1.5px solid #818cf8' : '1.5px solid rgba(255,255,255,0.1)',
                background: active ? 'linear-gradient(135deg, #6366f1, #4338ca)' : '#131b2e',
                color: active ? '#fff' : '#94a3b8',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: active ? '0 4px 14px rgba(99,102,241,0.35)' : 'none',
                transition: 'all 0.18s ease',
              }}
            >
              <span>{lesson.gradeTitle.split('(')[0].trim()}</span>
              <span style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '0.1rem 0.4rem',
                borderRadius: '5px',
                fontSize: '0.72rem',
              }}>{lesson.cefr}</span>
            </button>
          );
        })}
      </div>

      {/* ── HERO CARD ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(14,165,233,0.1) 100%)',
        border: '1px solid rgba(99,102,241,0.35)',
        borderRadius: '24px',
        padding: '1.75rem 1.5rem',
        boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
      }}>
        <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            background: '#6366f1',
            color: '#fff',
            padding: '0.25rem 0.875rem',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}>
            <Award size={13} /> CEFR: {currentLesson.cefr}
          </span>
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
          {currentLesson.gradeTitle} 英文核心課程教程
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.65 }}>
          {currentLesson.summary}
        </p>
      </div>

      {/* ── TAB BAR ── */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.25rem',
        scrollbarWidth: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingBottom: '0.875rem',
      }}>
        {[
          { id: 'grammar', label: `核心文法與句型 (${(currentLesson.grammarLessons || []).length})`, icon: <BookOpen size={16} /> },
          { id: 'vocab',   label: `高頻必考單字庫 (${(currentLesson.vocabList || []).length})`,     icon: <Sparkles size={16} /> },
          { id: 'tips',    label: '備考與答題技巧 (1)',                                              icon: <Lightbulb size={16} /> },
          { id: 'quiz',    label: '單元小試身手',                                                    icon: <HelpCircle size={16} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.65rem 1.125rem',
              borderRadius: '12px',
              border: activeTab === tab.id ? '1.5px solid #818cf8' : '1.5px solid rgba(255,255,255,0.1)',
              background: activeTab === tab.id ? '#6366f1' : '#131b2e',
              color: activeTab === tab.id ? '#fff' : '#94a3b8',
              fontWeight: 800,
              fontSize: '0.875rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: activeTab === tab.id ? '0 4px 14px rgba(99,102,241,0.35)' : 'none',
              transition: 'all 0.18s ease',
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ──────────────────────────────────────
          TAB 1: GRAMMAR
      ────────────────────────────────────── */}
      {activeTab === 'grammar' && (
        <div style={{
          background: '#131b2e',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '22px',
          padding: '1.75rem 1.5rem',
          boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <BookOpen size={22} color="#818cf8" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>
              核心文法概念與句型公式 (Grammar Rules & Formulas)
            </h3>
          </div>

          {/* Grammar Rule Cards */}
          {(currentLesson.grammarLessons || []).map((rule, idx) => (
            <div key={idx} style={{
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '18px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {/* Rule Title */}
              <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff', lineHeight: 1.4 }}>
                {rule.title}
              </h4>

              {/* Formula Box */}
              <div style={{
                background: 'rgba(99,102,241,0.12)',
                borderLeft: '4px solid #6366f1',
                borderRadius: '10px',
                padding: '1rem 1.25rem',
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#818cf8', marginBottom: '0.375rem' }}>
                  📌 核心句型公式 (Formula):
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '1rem', fontWeight: 800, color: '#fff', lineHeight: 1.55 }}>
                  {rule.formula}
                </div>
              </div>

              {/* Explanation */}
              <p style={{ fontSize: '0.97rem', color: '#e2e8f0', lineHeight: 1.68 }}>
                {rule.explanation}
              </p>

              {/* Examples */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0ea5e9' }}>
                  💡 實用例句示範 (Click speaker to listen):
                </div>
                {(rule.examples || []).map((ex, eIdx) => (
                  <div key={eIdx} style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '0.875rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.875rem',
                  }}>
                    <button
                      onClick={() => speak(ex.en)}
                      style={{
                        flexShrink: 0,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(14,165,233,0.15)',
                        border: '1px solid rgba(14,165,233,0.3)',
                        color: '#0ea5e9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.18s',
                      }}
                    >
                      <Volume2 size={16} />
                    </button>
                    <div>
                      <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        {ex.en}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                        {ex.zh}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ──────────────────────────────────────
          TAB 2: VOCAB
      ────────────────────────────────────── */}
      {activeTab === 'vocab' && (
        <div style={{
          background: '#131b2e',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '22px',
          padding: '1.75rem 1.5rem',
          boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <Sparkles size={22} color="#0ea5e9" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>
              {currentLesson.gradeTitle.split('(')[0].trim()} 高頻必考核心單字庫
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: '1rem',
          }}>
            {(currentLesson.vocabList || []).map((v, i) => (
              <div key={i} style={{
                background: '#1e293b',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '16px',
                padding: '1.125rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff' }}>{v.word}</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', marginLeft: '0.375rem' }}>{v.pos}</span>
                  </div>
                  <button
                    onClick={() => speak(v.word)}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(14,165,233,0.15)',
                      border: '1px solid rgba(14,165,233,0.3)',
                      color: '#0ea5e9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    <Volume2 size={15} />
                  </button>
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>{v.meaning}</div>

                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '8px',
                  padding: '0.625rem 0.75rem',
                }}>
                  <div style={{ fontSize: '0.82rem', color: '#e2e8f0', fontStyle: 'italic' }}>
                    "{v.example}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────
          TAB 3: TIPS
      ────────────────────────────────────── */}
      {activeTab === 'tips' && (
        <div style={{
          background: '#131b2e',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '22px',
          padding: '1.75rem 1.5rem',
          boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <Lightbulb size={22} color="#f59e0b" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>
              大考與學測解題技巧 (Exam Mastery & Distractor Traps)
            </h3>
          </div>

          <div style={{
            display: 'flex',
            gap: '1.125rem',
            alignItems: 'flex-start',
            background: 'rgba(245,158,11,0.07)',
            border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: '16px',
            padding: '1.375rem',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(245,158,11,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Zap size={22} color="#f59e0b" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>
                命題核心陷阱剖析
              </h4>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '10px',
                padding: '0.875rem 1rem',
                fontSize: '0.92rem',
                color: '#fcd34d',
                lineHeight: 1.65,
              }}>
                <strong>⚠️ 常見陷阱與扣分剖析:</strong><br />
                {currentLesson.examTip}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────
          TAB 4: QUIZ (placeholder)
      ────────────────────────────────────── */}
      {activeTab === 'quiz' && (
        <div style={{
          background: '#131b2e',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '22px',
          padding: '1.75rem 1.5rem',
          boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <HelpCircle size={22} color="#10b981" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>
              本單元隨堂小試身手 (Unit Practice Quiz)
            </h3>
          </div>

          <div style={{
            background: '#1e293b',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '1.5rem',
          }}>
            <h4 style={{ color: '#fff', fontWeight: 800, marginBottom: '0.75rem' }}>
              單元專屬試題建置中 (Coming Soon)...
            </h4>
            <div style={{
              background: 'rgba(16,185,129,0.1)',
              borderLeft: '4px solid #10b981',
              borderRadius: '8px',
              padding: '0.875rem 1rem',
              fontSize: '0.9rem',
              color: '#fff',
            }}>
              <strong>💡 提示:</strong> 您可以切換至「1-12 年級重點評測」或「全階段綜合測驗」頁籤，透過 CAT 自適應智慧測驗體驗動態題庫挑戰！
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
