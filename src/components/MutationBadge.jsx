import React, { useState } from 'react';
import { Sparkles, RefreshCw, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function MutationBadge({ question, onMutateOnDemand }) {
  const [showLogs, setShowLogs] = useState(false);

  if (!question) return null;

  return (
    <div className="mutation-container">
      <div className="mutation-badge-row">
        <div className="mutation-tag">
          <Sparkles size={14} className="icon-spin-slow" />
          <span>自主變化引擎已啟用</span>
          <code className="mutation-hash">{question.mutationHash || 'MUT-BASE'}</code>
        </div>

        <div className="flex-items-center gap-2">
          {question.mutationLogs && question.mutationLogs.length > 0 && (
            <button 
              className="btn-text-info"
              onClick={() => setShowLogs(!showLogs)}
            >
              <Info size={14} />
              <span>變體細節 ({question.mutationLogs.length})</span>
              {showLogs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}

          <button 
            className="btn-mutate-action"
            onClick={onMutateOnDemand}
            title="發動自主變化引擎生成同考點新變體"
          >
            <RefreshCw size={14} />
            <span>自主生成新變體</span>
          </button>
        </div>
      </div>

      {showLogs && question.mutationLogs && (
        <div className="mutation-logs-panel">
          <div className="logs-title">⚙️ 本題動態變異紀錄 (Dynamic Substitution Trace):</div>
          <ul className="logs-list">
            {question.mutationLogs.map((log, index) => (
              <li key={index} className="log-item">
                <span className="log-bullet">•</span> {log}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
