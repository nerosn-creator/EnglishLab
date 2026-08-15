import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Globe, FastForward, Eye, EyeOff } from 'lucide-react';

export default function AudioPlayer({ scriptText, examType = 'IELTS Academic' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [accent, setAccent] = useState(examType.includes('IELTS') ? 'en-GB' : 'en-US');
  const [rate, setRate] = useState(1.0);
  const [showScript, setShowScript] = useState(false);

  useEffect(() => {
    // Cancel any ongoing speech when script text or component unmounts
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [scriptText]);

  const handleTogglePlay = () => {
    if (!window.speechSynthesis) {
      alert('您的瀏覽器不支援 Web Speech 語音合成 API。');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(scriptText);
      utterance.lang = accent;
      utterance.rate = rate;

      // Try to find a matching voice
      const voices = window.speechSynthesis.getVoices();
      const targetVoice = voices.find(v => v.lang.startsWith(accent));
      if (targetVoice) {
        utterance.voice = targetVoice;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <div className="audio-player-card">
      <div className="audio-controls-row">
        <button 
          className={`btn-play-audio ${isPlaying ? 'playing' : ''}`}
          onClick={handleTogglePlay}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span>{isPlaying ? '朗讀中 (點擊暫停)' : '播放聽力考題音檔'}</span>
        </button>

        <div className="audio-settings">
          {/* Accent Switch */}
          <div className="setting-chip">
            <Globe size={14} />
            <select 
              value={accent} 
              onChange={(e) => setAccent(e.target.value)}
              className="select-accent"
            >
              <option value="en-GB">🇬🇧 英國腔 (IELTS Focus)</option>
              <option value="en-US">🇺🇸 美國腔 (TOEFL Focus)</option>
              <option value="en-AU">🇦🇺 澳洲腔 (IELTS Alt)</option>
            </select>
          </div>

          {/* Speed Switch */}
          <div className="setting-chip">
            <FastForward size={14} />
            <select 
              value={rate} 
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="select-rate"
            >
              <option value="0.8">0.8x 慢速</option>
              <option value="1.0">1.0x 標準</option>
              <option value="1.25">1.25x 快速</option>
            </select>
          </div>

          {/* Toggle Script Display */}
          <button 
            className="btn-toggle-script"
            onClick={() => setShowScript(!showScript)}
          >
            {showScript ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{showScript ? '隱藏逐字稿' : '顯示聽力逐字稿'}</span>
          </button>
        </div>
      </div>

      {showScript && (
        <div className="script-box">
          <div className="script-label">
            <Volume2 size={14} /> 聽力對話 / 演講原稿 Script:
          </div>
          <p className="script-text">"{scriptText}"</p>
        </div>
      )}
    </div>
  );
}
