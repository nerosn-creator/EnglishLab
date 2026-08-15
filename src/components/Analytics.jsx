import React from 'react';
import { Award, Zap, CheckCircle2, RotateCcw, Sparkles, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Analytics({ results, onRetakeQuiz, onRechallengeMutated }) {
  React.useEffect(() => {
    // Fire festive confetti animation when report renders
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  if (!results) return null;

  const {
    totalQuestions,
    correctCount,
    accuracyPercentage,
    estimatedGrade,
    cefrLevel,
    ieltsBand,
    toeflScore,
    radarBreakdown,
    weakestSkill,
    advice
  } = results;

  return (
    <div className="analytics-container">
      {/* Report Banner */}
      <div className="analytics-banner">
        <div className="banner-badge">
          <Sparkles size={20} /> 測驗完成與綜合能力診斷報告
        </div>
        <h2 className="banner-title">您的英語實力評測分析與分數估計</h2>
        <p className="banner-subtitle">結合 1-12 年級重點課綱與 雅思 (IELTS) / 托福 (TOEFL) 國際考古題評測演算法</p>
      </div>

      {/* Main Score Highlights Grid */}
      <div className="scores-highlights-grid">
        {/* CEFR & Grade Level */}
        <div className="score-card accent-card">
          <div className="card-top-tag">年級對照與歐洲共同架構</div>
          <div className="big-stat-val text-gradient">{estimatedGrade.name}</div>
          <div className="sub-stat">CEFR 級別: <strong>{cefrLevel}</strong></div>
          <p className="stat-desc">{estimatedGrade.description}</p>
        </div>

        {/* IELTS Band Estimate */}
        <div className="score-card ielts-card">
          <div className="card-top-tag">IELTS 雅思預估分數 (Overall Band)</div>
          <div className="big-stat-val text-ielts">{ieltsBand} <span className="small-unit">/ 9.0</span></div>
          <div className="scale-bar-container">
            <div className="scale-fill ielts-fill" style={{ width: `${(ieltsBand / 9.0) * 100}%` }}></div>
          </div>
          <p className="stat-desc">對應難度範圍：{estimatedGrade.ieltsEquiv}</p>
        </div>

        {/* TOEFL iBT Estimate */}
        <div className="score-card toefl-card">
          <div className="card-top-tag">TOEFL iBT 托福預估總分</div>
          <div className="big-stat-val text-toefl">{toeflScore} <span className="small-unit">/ 120</span></div>
          <div className="scale-bar-container">
            <div className="scale-fill toefl-fill" style={{ width: `${(toeflScore / 120) * 100}%` }}></div>
          </div>
          <p className="stat-desc">對應難度範圍：{estimatedGrade.toeflEquiv}</p>
        </div>

        {/* Accuracy & Speed */}
        <div className="score-card summary-card">
          <div className="card-top-tag">答題表現統計</div>
          <div className="big-stat-val">{accuracyPercentage}%</div>
          <div className="sub-stat">答對 {correctCount} 題 / 共 {totalQuestions} 題</div>
          <div className="accuracy-pill-row">
            <span className="pill-item text-success"><CheckCircle2 size={14} /> 正確率 {accuracyPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Skill Breakdown Radar / Bars */}
      <div className="analytics-section">
        <h3 className="section-title">
          <TrendingUp size={20} className="text-primary" /> 多維度能力分項掌握度 (Skill Breakdown)
        </h3>
        
        <div className="skills-bar-grid">
          {radarBreakdown.map((item, idx) => (
            <div key={idx} className="skill-progress-item">
              <div className="skill-info-row">
                <span className="skill-name">{item.skill}</span>
                <span className="skill-percentage">{item.score}% ({item.correct}/{item.total} 題)</span>
              </div>
              <div className="progress-track">
                <div 
                  className={`progress-fill ${item.score >= 75 ? 'high' : item.score >= 50 ? 'medium' : 'low'}`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weakness Diagnostic & Study Advice */}
      <div className="advice-box">
        <div className="advice-header">
          <AlertTriangle className="text-warning" size={22} />
          <div>
            <h4>弱點分析與提升建議 (Weakness Diagnostic)</h4>
            <p>弱點領域：<strong className="text-warning-dark">{weakestSkill}</strong></p>
          </div>
        </div>
        <p className="advice-text">{advice}</p>
      </div>

      {/* Re-challenge & Actions */}
      <div className="analytics-actions-row">
        <button className="btn-rechallenge-mutated" onClick={onRechallengeMutated}>
          <Zap size={18} />
          <span>觸發自主變化引擎：開啟變異題特訓</span>
        </button>

        <button className="btn-retake" onClick={onRetakeQuiz}>
          <RotateCcw size={18} />
          <span>重新開始全套評測</span>
        </button>
      </div>
    </div>
  );
}
