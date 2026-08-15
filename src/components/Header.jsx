import React from 'react';
import { Sparkles, BookOpen, BarChart3, RotateCcw, Volume2, Award, Zap } from 'lucide-react';
import { TEST_MODES } from '../data/gradeTopics';

export default function Header({ 
  currentMode, 
  onSelectMode, 
  onOpenGradeInspector, 
  onResetQuiz,
  completedCount,
  totalCount,
  currentGradeName
}) {
  return (
    <header className="app-header">
      <div className="header-container">
        {/* Brand Title */}
        <div className="brand-logo" onClick={onResetQuiz} style={{ cursor: 'pointer' }}>
          <div className="logo-icon-box">
            <Sparkles className="logo-icon" size={24} />
          </div>
          <div>
            <h1 className="brand-name">EnglishLab <span>測驗中心</span></h1>
            <p className="brand-subtitle">1-12 年級重點評測 × IELTS / TOEFL 考古題自主變化引擎</p>
          </div>
        </div>

        {/* Action Controls & Navigation */}
        <div className="header-actions">
          <button 
            className="btn-grade-inspector"
            onClick={onOpenGradeInspector}
            title="檢視 1-12 年級與 IELTS/TOEFL 評測架構"
          >
            <BookOpen size={16} />
            <span>1-12 年級指標對照</span>
            {currentGradeName && <span className="active-grade-badge">{currentGradeName}</span>}
          </button>

          <div className="progress-badge">
            <Award size={16} className="text-accent" />
            <span>進度: {completedCount} / {totalCount} 題</span>
          </div>

          <button className="btn-icon-action" onClick={onResetQuiz} title="重新開始測驗">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Test Mode Selector Bar */}
      <nav className="mode-nav-bar">
        {TEST_MODES.map((mode) => (
          <button
            key={mode.id}
            className={`mode-tab ${currentMode === mode.id ? 'active' : ''}`}
            onClick={() => onSelectMode(mode.id)}
          >
            {mode.id === 'adaptive' && <Zap size={14} className="icon-pulse" />}
            {mode.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
