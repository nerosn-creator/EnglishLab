import React, { useState } from 'react';
import { Volume2, Sparkles, RefreshCw, Star, CheckCircle, ArrowRight, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

const PRESCHOOL_LESSONS = [
  {
    category: "Alphabet Phonics (字母與發音)",
    color: "#ec4899",
    items: [
      { letter: "Aa", word: "Apple", sound: "A is for Apple! /æ/ /æ/ Apple", emoji: "🍎", choices: ["🍎 Apple", "🍌 Banana", "🐱 Cat"] },
      { letter: "Bb", word: "Ball", sound: "B is for Ball! /b/ /b/ Ball", emoji: "⚽", choices: ["⚽ Ball", "🐶 Dog", "🍎 Apple"] },
      { letter: "Cc", word: "Cat", sound: "C is for Cat! Meow! /k/ /k/ Cat", emoji: "🐱", choices: ["🐱 Cat", "🚗 Car", "🐘 Elephant"] },
      { letter: "Dd", word: "Dog", sound: "D is for Dog! Woof woof! /d/ /d/ Dog", emoji: "🐶", choices: ["🐶 Dog", "🦆 Duck", "🐱 Cat"] }
    ]
  },
  {
    category: "Colors & Shapes (顏色與形狀)",
    color: "#3b82f6",
    items: [
      { letter: "🔴", word: "Red", sound: "Red! Like a juicy red strawberry!", emoji: "🍓", choices: ["🔴 Red", "🟡 Yellow", "🔵 Blue"] },
      { letter: "🔵", word: "Blue", sound: "Blue! Like the big blue sky!", emoji: "🌊", choices: ["🔵 Blue", "🟢 Green", "🔴 Red"] },
      { letter: "🟡", word: "Yellow", sound: "Yellow! Like the bright shiny sun!", emoji: "☀️", choices: ["🟡 Yellow", "🔴 Red", "🟣 Purple"] },
      { letter: "⭐", word: "Star", sound: "Star! Twinkle twinkle little star!", emoji: "⭐", choices: ["⭐ Star", "🔴 Red", "🔵 Blue"] }
    ]
  },
  {
    category: "Animals & Sounds (可愛動物)",
    color: "#10b981",
    items: [
      { letter: "🐮", word: "Cow", sound: "Moo! Cow says Moo!", emoji: "🐮", choices: ["🐮 Cow", "🐥 Duck", "🐷 Pig"] },
      { letter: "🐥", word: "Duck", sound: "Quack Quack! Duck says Quack!", emoji: "🐥", choices: ["🐥 Duck", "🐶 Dog", "🐮 Cow"] },
      { letter: "🦁", word: "Lion", sound: "Roar! Lion is the king of the jungle!", emoji: "🦁", choices: ["🦁 Lion", "🐱 Cat", "🐰 Rabbit"] }
    ]
  }
];

export default function PreschoolPractice() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const currentCategory = PRESCHOOL_LESSONS[selectedCategoryIdx];
  const currentItem = currentCategory.items[currentItemIdx];

  const handleSpeakWord = (textToSpeak) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Slower rate for toddlers
    utterance.pitch = 1.2; // Cheerful friendly pitch
    window.speechSynthesis.speak(utterance);
  };

  const handleChoiceClick = (choice) => {
    if (selectedChoice !== null) return;
    setSelectedChoice(choice);
    const correct = choice.includes(currentItem.word);
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
      handleSpeakWord(`Great job! ${currentItem.word}!`);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } else {
      handleSpeakWord(`Try again! This is ${currentItem.word}`);
    }
  };

  const handleNextItem = () => {
    setSelectedChoice(null);
    setIsCorrect(null);
    if (currentItemIdx + 1 < currentCategory.items.length) {
      setCurrentItemIdx(prev => prev + 1);
    } else {
      // Loop or go to next category
      const nextCat = (selectedCategoryIdx + 1) % PRESCHOOL_LESSONS.length;
      setSelectedCategoryIdx(nextCat);
      setCurrentItemIdx(0);
    }
  };

  return (
    <div className="preschool-wrapper">
      {/* Category Tabs */}
      <div className="preschool-tabs">
        {PRESCHOOL_LESSONS.map((cat, idx) => (
          <button
            key={idx}
            className={`preschool-tab-btn ${selectedCategoryIdx === idx ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategoryIdx(idx);
              setCurrentItemIdx(0);
              setSelectedChoice(null);
              setIsCorrect(null);
            }}
            style={{ '--theme-color': cat.color }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Main Toddler Interactive Card */}
      <div className="toddler-card">
        <div className="toddler-card-header">
          <span className="star-badge"><Star size={16} /> 幼幼樂園學英文</span>
          <span className="score-star-tag">⭐ 得分: {score}</span>
        </div>

        {/* Big Visual Flashcard */}
        <div className="flashcard-display">
          <div className="big-emoji-display">{currentItem.emoji}</div>
          <h2 className="flashcard-word">{currentItem.letter} - {currentItem.word}</h2>
          
          <button 
            className="btn-toddler-audio"
            onClick={() => handleSpeakWord(currentItem.sound)}
          >
            <Volume2 size={24} />
            <span>點擊聽發音: "{currentItem.word}"</span>
          </button>
        </div>

        {/* Interactive Game Prompt */}
        <div className="toddler-game-box">
          <h3 className="game-prompt">哪個是 <strong>{currentItem.word}</strong> 呢？點點看！</h3>
          
          <div className="toddler-choices-grid">
            {currentItem.choices.map((choiceStr, cIdx) => {
              let choiceState = '';
              if (selectedChoice !== null) {
                if (choiceStr.includes(currentItem.word)) choiceState = 'toddler-correct';
                else if (selectedChoice === choiceStr) choiceState = 'toddler-wrong';
              }

              return (
                <button
                  key={cIdx}
                  className={`toddler-choice-btn ${choiceState}`}
                  onClick={() => handleChoiceClick(choiceStr)}
                >
                  <span className="choice-emoji-text">{choiceStr}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback & Next Button */}
        {selectedChoice !== null && (
          <div className="toddler-next-bar">
            <div className={`feedback-bubble ${isCorrect ? 'is-good' : 'is-try'}`}>
              {isCorrect ? '🎉 好棒！答對了！' : '💪 加油！跟著念一遍：' + currentItem.word}
            </div>

            <button className="btn-toddler-next" onClick={handleNextItem}>
              <span>下一題</span>
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
