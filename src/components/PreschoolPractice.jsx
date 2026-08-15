import React, { useState } from 'react';
import { Volume2, Sparkles, Trophy, RefreshCw, Star } from 'lucide-react';

const PRESCHOOL_FLASHCARDS = [
  {
    id: "abc_01",
    category: "alphabet",
    letter: "Aa",
    word: "Apple",
    phonetics: "/ˈæp.əl/",
    translation: "蘋果",
    color: "#ef4444",
    emoji: "🍎",
    questionPrompt: "哪個是 Apple 蘋果呢？點點看！",
    options: [
      { text: "Apple", emoji: "🍎", translation: "蘋果", isCorrect: true },
      { text: "Banana", emoji: "🍌", translation: "香蕉", isCorrect: false },
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: false }
    ]
  },
  {
    id: "abc_02",
    category: "alphabet",
    letter: "Bb",
    word: "Banana",
    phonetics: "/bəˈnæn.ə/",
    translation: "香蕉",
    color: "#eab308",
    emoji: "🍌",
    questionPrompt: "哪個是 Banana 香蕉呢？點點看！",
    options: [
      { text: "Dog", emoji: "🐶", translation: "狗狗", isCorrect: false },
      { text: "Banana", emoji: "🍌", translation: "香蕉", isCorrect: true },
      { text: "Elephant", emoji: "🐘", translation: "大象", isCorrect: false }
    ]
  },
  {
    id: "abc_03",
    category: "alphabet",
    letter: "Cc",
    word: "Cat",
    phonetics: "/kæt/",
    translation: "貓咪",
    color: "#f97316",
    emoji: "🐱",
    questionPrompt: "哪個是 Cat 貓咪呢？點點看！",
    options: [
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: true },
      { text: "Fish", emoji: "🐟", translation: "小魚", isCorrect: false },
      { text: "Apple", emoji: "🍎", translation: "蘋果", isCorrect: false }
    ]
  },
  {
    id: "colors_01",
    category: "colors",
    letter: "Red",
    word: "Red",
    phonetics: "/red/",
    translation: "紅色",
    color: "#dc2626",
    emoji: "🔴",
    questionPrompt: "哪個是 Red 紅色呢？",
    options: [
      { text: "Blue", emoji: "🔵", translation: "藍色", isCorrect: false },
      { text: "Red", emoji: "🔴", translation: "紅色", isCorrect: true },
      { text: "Green", emoji: "🟢", translation: "綠色", isCorrect: false }
    ]
  },
  {
    id: "animals_01",
    category: "animals",
    letter: "Dog",
    word: "Dog",
    phonetics: "/dɑːɡ/",
    translation: "狗狗",
    color: "#a16207",
    emoji: "🐶",
    questionPrompt: "汪汪！哪個是 Dog 狗狗呢？",
    options: [
      { text: "Dog", emoji: "🐶", translation: "狗狗", isCorrect: true },
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: false },
      { text: "Bird", emoji: "🐦", translation: "小鳥", isCorrect: false }
    ]
  }
];

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
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleOptionClick = (option, index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (option.isCorrect) {
      setScore(prev => prev + 10);
      setFeedback("correct");
      handleSpeak(`Great job! ${currentCard.word}`);
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
          className={`ps-pill ${activeCategory === 'alphabet' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('alphabet'); setCurrentIndex(0); }}
        >
          🔤 ABC
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
            onClick={() => handleSpeak(`${currentCard.word}. ${currentCard.translation}`)}
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
