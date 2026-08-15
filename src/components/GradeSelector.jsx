import React from 'react';
import { X, CheckCircle, Target, Layers } from 'lucide-react';
import { GRADE_BENCHMARKS } from '../data/gradeTopics';

export default function GradeSelector({ isOpen, onClose, selectedGradeId, onSelectGrade }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content grade-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-items-center gap-2">
            <Layers className="text-primary" size={22} />
            <h2>1-12 年級與 IELTS / TOEFL 評測重點與對照表</h2>
          </div>
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body grid-grades">
          {GRADE_BENCHMARKS.map((item) => {
            const isSelected = selectedGradeId === item.id;
            return (
              <div
                key={item.id}
                className={`grade-card ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  onSelectGrade(item.id);
                  onClose();
                }}
              >
                <div className="grade-card-header">
                  <span className="grade-title">{item.name}</span>
                  <span className="cefr-badge">{item.cefr}</span>
                </div>

                <div className="exam-equivalents">
                  <div className="equiv-tag ielts">
                    <span>IELTS:</span> <strong>{item.ieltsEquiv}</strong>
                  </div>
                  <div className="equiv-tag toefl">
                    <span>TOEFL:</span> <strong>{item.toeflEquiv}</strong>
                  </div>
                </div>

                <p className="grade-desc">{item.description}</p>

                <div className="topic-tags">
                  {item.focusTopics.map((topic, idx) => (
                    <span key={idx} className="topic-chip">
                      <Target size={10} /> {topic}
                    </span>
                  ))}
                </div>

                {isSelected && (
                  <div className="selected-indicator">
                    <CheckCircle size={14} /> 目前選取
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={() => onSelectGrade('all')}>
            重置為「全階段綜合篩選」
          </button>
          <button className="btn-primary" onClick={onClose}>
            完成並返回答題
          </button>
        </div>
      </div>
    </div>
  );
}
