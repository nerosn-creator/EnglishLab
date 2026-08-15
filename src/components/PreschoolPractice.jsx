import React, { useState } from 'react';
import { Volume2, Sparkles, Trophy, RefreshCw, Star, Heart, Award } from 'lucide-react';

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
    iconSvg: `<svg viewBox="0 0 100 100" class="ps-card-svg"><circle cx="50" cy="55" r="35" fill="#ef4444"/><path d="M50 20 Q55 35 45 35 Z" fill="#15803d"/><path d="M50 20 Q48 10 52 5" stroke="#78350f" stroke-width="4" fill="none"/></svg>`,
    questionPrompt: "哪個是 Apple (蘋果) 呢？點點看！",
    options: [
      { text: "Apple 蘋果", emoji: "🍎", isCorrect: true },
      { text: "Banana 香蕉", emoji: "🍌", isCorrect: false },
      { text: "Cat 貓咪", emoji: "🐱", isCorrect: false }
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
    iconSvg: `<svg viewBox="0 0 100 100" class="ps-card-svg"><path d="M20 70 Q60 90 85 25 Q70 50 20 70 Z" fill="#eab308"/><path d="M85 25 Q88 20 90 15" stroke="#78350f" stroke-width="4" fill="none"/></svg>`,
    questionPrompt: "哪個是 Banana (香蕉) 呢？點點看！",
    options: [
      { text: "Dog 狗狗", emoji: "🐶", isCorrect: false },
      { text: "Banana 香蕉", emoji: "🍌", isCorrect: true },
      { text: "Elephant 大象", emoji: "🐘", isCorrect: false }
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
    iconSvg: `<svg viewBox="0 0 100 100" class="ps-card-svg"><circle cx="50" cy="55" r="30" fill="#f97316"/><polygon points="25,35 35,15 45,32" fill="#f97316"/><polygon points="75,35 65,15 55,32" fill="#f97316"/><circle cx="40" cy="50" r="4" fill="#fff"/><circle cx="60" cy="50" r="4" fill="#fff"/><circle cx="40" cy="50" r="2" fill="#000"/><circle cx="60" cy="50" r="2" fill="#000"/></svg>`,
    questionPrompt: "聽發音，哪個是 Cat (貓咪) 呢？",
    options: [
      { text: "Cat 貓咪", emoji: "🐱", isCorrect: true },
      { text: "Fish 小魚", emoji: "🐟", isCorrect: false },
      { text: "Apple 蘋果", emoji: "🍎", isCorrect: false }
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
    iconSvg: `<svg viewBox="0 0 100 100" class="ps-card-svg"><circle cx="50" cy="50" r="40" fill="#dc2626"/></svg>`,
    questionPrompt: "哪個是 Red (紅色) 呢？",
    options: [
      { text: "Blue 藍色", emoji: "🔵", isCorrect: false },
      { text: "Red 紅色", emoji: "🔴", isCorrect: true },
      { text: "Green 綠色", emoji: "🟢", isCorrect: false }
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
    iconSvg: `<svg viewBox="0 0 100 100" class="ps-card-svg"><circle cx="50" cy="50" r="32" fill="#d97706"/><ellipse cx="25" cy="40" rx="10" ry="20" fill="#92400e"/><ellipse cx="75" cy="40" rx="10" ry="20" fill="#92400e"/><circle cx="42" cy="45" r="4" fill="#000"/><circle cx="58" cy="45" r="4" fill="#000"/></svg>`,
    questionPrompt: "汪汪汪！哪個是 Dog (狗狗) 呢？",
    options: [
      { text: "Dog 狗狗", emoji: "🐶", isCorrect: true },
      { text: "Cat 貓咪", emoji: "🐱", isCorrect: false },
      { text: "Bird 小鳥", emoji: "🐦", isCorrect: false }
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
    utterance.rate = 0.8;
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
    <div className="ps-main-wrapper">
      {/* Category Tabs Header */}
      <div className="ps-category-bar">
        <button 
          className={`ps-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('all'); setCurrentIndex(0); }}
        >
          <Sparkles size={16} /> 全部幼幼單字 (All)
        </button>

        <button 
          className={`ps-tab-btn ${activeCategory === 'alphabet' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('alphabet'); setCurrentIndex(0); }}
        >
          🔤 ABC 自然發音
        </button>

        <button 
          className={`ps-tab-btn ${activeCategory === 'colors' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('colors'); setCurrentIndex(0); }}
        >
          🎨 顏色與形狀
        </button>

        <button 
          className={`ps-tab-btn ${activeCategory === 'animals' ? 'active' : ''}`}
          onClick={() => { setActiveCategory('animals'); setCurrentIndex(0); }}
        >
          🐶 可愛動物夥伴
        </button>
      </div>

      {/* Hero Visual Flashcard Container */}
      <div className="ps-flashcard-container">
        {/* Score & Badge Top Row */}
        <div className="ps-card-header-row">
          <div className="ps-badge-level">
            <Star size={16} className="text-warning" /> 幼幼啟蒙 Level (Pre-A1)
          </div>

          <div className="ps-badge-score">
            <Trophy size={16} className="text-warning" /> 幼兒獎勵積分: <strong>{score} 分</strong>
          </div>
        </div>

        {/* Visual Flashcard Image Box */}
        <div className="ps-image-card-box" style={{ borderColor: currentCard.color }}>
          <div className="ps-emoji-display">{currentCard.emoji}</div>
          
          <div className="ps-word-title-box">
            <h1 className="ps-letter-title" style={{ color: currentCard.color }}>
              {currentCard.letter} – {currentCard.word}
            </h1>
            <p className="ps-phonetic-sub">{currentCard.phonetics} • {currentCard.translation}</p>
          </div>

          {/* Voice Audio Speaker Button */}
          <button 
            className="ps-big-speak-btn"
            onClick={() => handleSpeak(`${currentCard.word}. ${currentCard.translation}`)}
          >
            <Volume2 size={24} /> 點擊大聲聽發音: "{currentCard.word}"
          </button>
        </div>

        {/* Interactive Quiz Question Prompt */}
        <div className="ps-question-box">
          <h2 className="ps-prompt-text">{currentCard.questionPrompt}</h2>

          {/* Large Visual Option Cards */}
          <div className="ps-options-container">
            {currentCard.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let optionClass = "ps-option-card";
              if (isSelected) {
                optionClass += option.isCorrect ? " correct" : " wrong";
              }

              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleOptionClick(option, idx)}
                >
                  <span className="ps-option-emoji">{option.emoji}</span>
                  <span className="ps-option-label">{option.text}</span>
                  {isSelected && option.isCorrect && <span className="ps-check-mark">✓答對了！</span>}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Button */}
          {feedback && (
            <div className="ps-feedback-footer">
              <div className={`ps-feedback-msg ${feedback}`}>
                {feedback === 'correct' ? '🎉 太棒了！答對囉！+10分' : '💪 加油！再試一次喔！'}
              </div>

              <button className="ps-btn-next" onClick={handleNextCard}>
                下一題 <RefreshCw size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
