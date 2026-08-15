import React, { useState } from 'react';
import { Volume2, Sparkles, Trophy, RefreshCw } from 'lucide-react';
import { PRESCHOOL_FLASHCARDS } from '../data/preschoolData';

export default function PreschoolPractice() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const filteredCards = activeCategory === "all" 
    ? PRESCHOOL_FLASHCARDS 
    : PRESCHOOL_FLASHCARDS.filter(c => c.category === activeCategory);

  const currentCard = filteredCards[currentIndex] || PRESCHOOL_FLASHCARDS[0];

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    // IMPORTANT FIX: Only pass the English word to the en-US voice engine!
    // Passing Chinese characters to en-US voice causes garbled sounds.
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85; // Slightly slower for kids
    window.speechSynthesis.speak(utterance);
  };

  const handleOptionClick = (option, index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (option.isCorrect) {
      setScore(prev => prev + 10);
      setFeedback("correct");
      // Speak ONLY English!
      handleSpeak(`Great! ${currentCard.word}`);
    } else {
      setFeedback("wrong");
      handleSpeak("Try again!");
    }
  };

  const handleNextCard = () => {
    setSelectedOption(null);
    setFeedback(null);
    if (currentIndex + 1 < filteredCards.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="ps-single-page-layout">
      {/* Category Tabs Top Row */}
      <div className="ps-nav-pills">
        <button 
          className={`ps-pill ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('all'); setCurrentIndex(0); }}
        >
          <Sparkles size={14} /> 全部
        </button>

        <button 
          className={`ps-pill ${activeCategory === 'fruits' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('fruits'); setCurrentIndex(0); }}
        >
          🍎 水果
        </button>

        <button 
          className={`ps-pill ${activeCategory === 'colors' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('colors'); setCurrentIndex(0); }}
        >
          🎨 顏色
        </button>

        <button 
          className={`ps-pill ${activeCategory === 'animals' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('animals'); setCurrentIndex(0); }}
        >
          🐶 動物
        </button>

        <div className="ps-score-tag">
          <Trophy size={14} className="text-warning" /> 得分: <strong>{score}</strong>
        </div>
      </div>

      {/* Single Screen Compact Card */}
      <div className="ps-compact-card">
        {/* Flashcard Header + Audio Button */}
        <div className="ps-compact-header">
          <div className="ps-word-info">
            <span className="ps-letter-badge" style={{ color: currentCard.color }}>
              {currentCard.letter}
            </span>
            <span className="ps-word-text">{currentCard.word}</span>
            <span className="ps-trans-text">({currentCard.translation})</span>
          </div>

          <button 
            className="ps-btn-speak-compact"
            // ONLY speak the English word!
            onClick={() => handleSpeak(currentCard.word)}
          >
            <Volume2 size={18} /> 發音
          </button>
        </div>

        {/* Compact Visual Center Box */}
        <div className="ps-visual-box" style={{ borderColor: currentCard.color }}>
          <div className="ps-visual-emoji">{currentCard.emoji}</div>
        </div>

        {/* Prompt Question */}
        <div className="ps-prompt-bar">{currentCard.questionPrompt}</div>

        {/* Side-by-Side 3-Column Option Grid */}
        <div className="ps-options-row">
          {currentCard.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            let optClass = "ps-opt-card";
            if (isSelected) {
              optClass += option.isCorrect ? " correct" : " wrong";
            }

            return (
              <button
                key={idx}
                className={optClass}
                onClick={() => handleOptionClick(option, idx)}
              >
                <span className="ps-opt-emoji">{option.emoji}</span>
                <span className="ps-opt-title">{option.text}</span>
                <span className="ps-opt-sub">{option.translation}</span>
              </button>
            );
          })}
        </div>

        {/* Next Action Footer */}
        {feedback && (
          <div className="ps-footer-action">
            <span className={`ps-result-tag ${feedback}`}>
              {feedback === 'correct' ? '🎉 答對囉！+10分' : '💪 再試一次！'}
            </span>
            <button className="ps-btn-next-compact" onClick={handleNextCard}>
              下一題 <RefreshCw size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
