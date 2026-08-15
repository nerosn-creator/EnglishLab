import React, { useState, useRef } from 'react';
import { Camera, Upload, Volume2, Sparkles, CheckCircle2, BookMarked, RefreshCcw, Layers, Globe, Copy, Check, FileText, HelpCircle, AlertTriangle, ArrowRight, Zap, Target } from 'lucide-react';

// Sample homework assignment dictionary for photo scanning & solving
const SAMPLE_HOMEWORK_SOLUTIONS = [
  {
    id: "hw_01",
    questionNum: "題目 1",
    originalQuestion: "Both the senior scientist and the research assistant ______ currently attending the symposium in London.",
    options: ["(A) are", "(B) is", "(C) am", "(D) be"],
    aiAnswer: "(A) are",
    correctIndex: 0,
    translation: "資深科學家與研究助理目前都正在倫敦參加研討會。",
    grammarConcept: "對等連接詞 Both...and... 所引導之雙主詞必須視為複數，搭配複數 BE 動詞 (are)。",
    trapAnalysis: [
      "選項 (B) is 錯誤：誤將主詞僅視為單一單數。",
      "選項 (C) am 錯誤：am 僅用於第一人稱 I。",
      "選項 (D) be 錯誤：未經過人稱與時態變位之原形動詞。"
    ],
    keyVocab: "symposium (n. 學術研討會) / research assistant (n. 研究助理)",
    examTip: "大考常見陷阱！Both A and B 必定搭配複數動詞。"
  },
  {
    id: "hw_02",
    questionNum: "題目 2",
    originalQuestion: "The research committee requested three distinct ______ of specialized ______ for the new chemical laboratory.",
    options: ["(A) pieces / equipment", "(B) equipments / piece", "(C) pieces / equipments", "(D) equipments / pieces"],
    aiAnswer: "(A) pieces / equipment",
    correctIndex: 0,
    translation: "研究委員會為新化學實驗室申請了三件不同的專業設備。",
    grammarConcept: "equipment (設備) 屬於不可數集合名詞，不可加複數 -s；需用可數量詞 piece (pieces) 進行單位計量。",
    trapAnalysis: [
      "選項 (B/C/D) 錯誤：equipment 加 -s 為典型國高中與多益/雅思大考常見文法扣分陷阱。"
    ],
    keyVocab: "equipment (n. 設備 - 不可數名詞) / specialized (adj. 專業的)",
    examTip: "不可數名詞包含 advice, information, equipment, furniture, homework，絕不可加 -s！"
  },
  {
    id: "hw_03",
    questionNum: "題目 3",
    originalQuestion: "______ the severe economic volatility, the multinational biotech company expanded its research budget.",
    options: ["(A) Despite", "(B) Although", "(C) Even though", "(D) In spite"],
    aiAnswer: "(A) Despite",
    correctIndex: 0,
    translation: "儘管面臨劇烈的經濟波動，這家跨國生技公司仍擴大了研發預算。",
    grammarConcept: "空格後方 'the severe economic volatility' 為名詞片語，必須選擇介系詞 Despite (或 In spite of)。",
    trapAnalysis: [
      "選項 (B/C) 錯誤：Although 與 Even though 為屬屬連接詞，後方必須接完整子句 (S + V)。",
      "選項 (D) 錯誤：In spite 後方缺少必要介系詞 of。"
    ],
    keyVocab: "volatility (n. 波動性/不穩定) / conglomerate (n. 跨國企業)",
    examTip: "Although + 子句 (S+V) vs. Despite + 名詞 (N)，這是會考與學測必考得分對比。"
  }
];

// Single word scanning database
const SAMPLE_OCR_DICT = {
  "photosynthesis": {
    word: "photosynthesis",
    phonetic: "/ˌfoʊ.toʊˈsɪn.θə.sɪs/",
    pos: "n.",
    translation: "光合作用",
    cefr: "B2 Upper-Inter",
    ieltsToefl: "TOEFL iBT / IELTS Science",
    definition: "綠色植物吸收太陽光能，將二氧化碳與水轉化為葡萄糖與氧氣的生物學過程。",
    synonyms: ["synthesis", "photochemical conversion"],
    example: "Photosynthesis is indispensable for maintaining atmospheric oxygen levels."
  },
  "mitigate": {
    word: "mitigate",
    phonetic: "/ˈmɪt.ə.ɡeɪt/",
    pos: "v.",
    translation: "緩和 / 減輕",
    cefr: "C1 Advanced",
    ieltsToefl: "IELTS Band 7.5+ / TOEFL",
    definition: "使嚴重程度、痛楚或災害減輕，降低不利影響。",
    synonyms: ["alleviate", "abate", "lessen", "reduce"],
    example: "Trees help mitigate urban heat and air pollution effectively."
  }
};

export default function CameraWordScanner() {
  const [scannerMode, setScannerMode] = useState('homework'); // 'homework' or 'word'
  const [imagePreview, setImagePreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  
  // Homework Solver state
  const [solvedHomeworkList, setSolvedHomeworkList] = useState([]);
  const [activeHwIdx, setActiveHwIdx] = useState(0);

  // Single word state
  const [scannedWords, setScannedWords] = useState([]);
  const [selectedWordObj, setSelectedWordObj] = useState(null);

  const [accent, setAccent] = useState('en-US');
  const [savedHomeworkNotes, setSavedHomeworkNotes] = useState([]);
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        processPhotoScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const processPhotoScan = () => {
    setIsScanning(true);

    // Simulate AI Homework Solving & OCR Vision Engine
    setTimeout(() => {
      setIsScanning(false);
      if (scannerMode === 'homework') {
        setSolvedHomeworkList(SAMPLE_HOMEWORK_SOLUTIONS);
        setActiveHwIdx(0);
      } else {
        const dictKeys = Object.keys(SAMPLE_OCR_DICT);
        const detected = dictKeys.map(k => SAMPLE_OCR_DICT[k]);
        setScannedWords(detected);
        setSelectedWordObj(detected[0]);
      }
    }, 1400);
  };

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSaveHomeworkNote = (hwItem) => {
    if (savedHomeworkNotes.some(h => h.id === hwItem.id)) return;
    setSavedHomeworkNotes(prev => [...prev, hwItem]);
  };

  const currentHwItem = solvedHomeworkList[activeHwIdx];

  return (
    <div className="scanner-container">
      {/* Mode Navigation Bar (拍功課 vs 拍單字) */}
      <div className="scanner-mode-switch-bar">
        <button 
          className={`mode-switch-btn ${scannerMode === 'homework' ? 'active' : ''}`}
          onClick={() => {
            setScannerMode('homework');
            setImagePreview(null);
            setSolvedHomeworkList([]);
          }}
        >
          <FileText size={18} />
          <span>📝 拍照解題神助手 (拍功課 / 試卷自主作答)</span>
        </button>

        <button 
          className={`mode-switch-btn ${scannerMode === 'word' ? 'active' : ''}`}
          onClick={() => {
            setScannerMode('word');
            setImagePreview(null);
            setScannedWords([]);
          }}
        >
          <Camera size={18} />
          <span>📷 拍單字查翻譯 (單字音標與帶讀)</span>
        </button>
      </div>

      {/* Banner */}
      <div className="scanner-banner">
        <div className="banner-badge">
          <Sparkles size={18} /> {scannerMode === 'homework' ? 'AI 功課拍照解題與翻譯導師' : 'AI 圖片單字辨識系統'}
        </div>
        <h2 className="scanner-title">
          {scannerMode === 'homework' ? '拍攝學生作業與試卷：AI 自主作答、翻譯與詳細考點解析' : '拍攝英文圖片：快速辨識單字、音標發音與中文翻譯'}
        </h2>
        <p className="scanner-subtitle">
          {scannerMode === 'homework' 
            ? '支援拍照識別整頁作業與考題，AI 自動選出正確答案，並提供精準中文翻譯、文法公式與錯因陷阱分析'
            : '拍攝英文課本或圖片，AI 自動識別照片中的關鍵單字並提供美音/英音帶讀'}
        </p>
      </div>

      {/* Upload & Photo Capture Box */}
      <div className="scanner-action-grid">
        <div 
          className="scan-upload-box" 
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            accept="image/*" 
            capture="environment"
            style={{ display: 'none' }}
          />

          <div className="upload-icon-circle">
            <Camera size={32} />
          </div>
          <h3>{scannerMode === 'homework' ? '拍攝功課 / 英文試卷照片' : '拍攝英文單字照片'}</h3>
          <p>點擊開啟相機拍攝功課或從手機相簿上傳試卷圖片</p>

          <button className="btn-upload-trigger">
            <Upload size={16} /> 啟動相機拍照 / 上傳圖片
          </button>
        </div>

        {/* Live Photo Preview Box */}
        {imagePreview && (
          <div className="preview-display-card">
            <div className="preview-header">
              <span>📷 掃描功課照片預覽 (Uploaded Homework)</span>
              <button 
                className="btn-reset-scan"
                onClick={() => {
                  setImagePreview(null);
                  setSolvedHomeworkList([]);
                  setScannedWords([]);
                }}
              >
                <RefreshCcw size={14} /> 重新拍攝
              </button>
            </div>
            
            <div className="img-wrapper">
              <img src={imagePreview} alt="Homework Scanned" className="scanned-img" />
              {isScanning && (
                <div className="scan-laser-line"></div>
              )}
            </div>

            {isScanning && (
              <div className="scanning-status-text">
                <Zap size={16} className="icon-spin-slow" /> AI 視覺分析中：辨識題目、自主算答與分析考點...
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===================== MODE 1: HOMEWORK SOLVER RESULT ===================== */}
      {scannerMode === 'homework' && solvedHomeworkList.length > 0 && !isScanning && (
        <div className="homework-solver-results-section">
          {/* Question Index Tabs */}
          <div className="hw-question-tabs">
            {solvedHomeworkList.map((hw, idx) => (
              <button
                key={hw.id}
                className={`hw-tab-btn ${activeHwIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveHwIdx(idx)}
              >
                <Target size={14} />
                <span>{hw.questionNum}</span>
              </button>
            ))}
          </div>

          {/* Active Homework Detailed Solution Card */}
          {currentHwItem && (
            <div className="hw-solution-card">
              {/* Question Header & AI Answer Badge */}
              <div className="hw-card-header">
                <span className="hw-num-badge">{currentHwItem.questionNum}</span>
                <div className="ai-answer-badge">
                  <CheckCircle2 size={18} className="text-success" />
                  <span>AI 自主作答建議答案：<strong>{currentHwItem.aiAnswer}</strong></span>
                </div>
              </div>

              {/* Original Question Text */}
              <div className="hw-original-question-box">
                <div className="box-label">📝 掃描之原始試題 (Original Question):</div>
                <p className="question-text">{currentHwItem.originalQuestion}</p>
                
                {/* Options List */}
                <div className="hw-options-grid">
                  {currentHwItem.options.map((opt, oIdx) => {
                    const isCorrectChoice = oIdx === currentHwItem.correctIndex;
                    return (
                      <div 
                        key={oIdx} 
                        className={`hw-option-item ${isCorrectChoice ? 'is-ai-choice' : ''}`}
                      >
                        <span>{opt}</span>
                        {isCorrectChoice && <span className="ai-check-tag">✓ 正確答案</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Full Chinese Translation */}
              <div className="hw-translation-box">
                <div className="trans-header">
                  <span>🌐 題目全文繁體中文翻譯:</span>
                  <button className="btn-audio-inline" onClick={() => handleSpeak(currentHwItem.originalQuestion)}>
                    <Volume2 size={16} /> 朗讀原題
                  </button>
                </div>
                <p className="trans-content">"{currentHwItem.translation}"</p>
              </div>

              {/* Detailed Grammar Concept & Explanation */}
              <div className="hw-explanation-box">
                <div className="exp-section-title">
                  <HelpCircle size={18} className="text-primary" />
                  <span>🧠 核心考點觀念與文法規則 (Grammar Concept):</span>
                </div>
                <p className="exp-body">{currentHwItem.grammarConcept}</p>
              </div>

              {/* Distractor Trap Analysis */}
              <div className="hw-traps-box">
                <div className="trap-section-title">
                  <AlertTriangle size={18} className="text-warning" />
                  <span>❌ 錯因干擾項剖析 (Distractor Breakdown):</span>
                </div>
                <ul className="trap-list">
                  {currentHwItem.trapAnalysis.map((trap, tIdx) => (
                    <li key={tIdx}>• {trap}</li>
                  ))}
                </ul>
              </div>

              {/* Key Vocab & Exam Tip */}
              <div className="hw-extra-row">
                <div className="extra-chip">
                  <BookMarked size={14} />
                  <span>關鍵單字：<strong>{currentHwItem.keyVocab}</strong></span>
                </div>
                <div className="extra-chip tip">
                  <Sparkles size={14} />
                  <span>備考提醒：{currentHwItem.examTip}</span>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="hw-card-footer">
                <button 
                  className="btn-save-hw-note"
                  onClick={() => handleSaveHomeworkNote(currentHwItem)}
                >
                  <BookMarked size={16} />
                  <span>
                    {savedHomeworkNotes.some(h => h.id === currentHwItem.id) 
                      ? '已加入錯題與筆記庫' 
                      : '存入我的錯題與筆記庫'}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================== MODE 2: SINGLE WORD SCANNER ===================== */}
      {scannerMode === 'word' && scannedWords.length > 0 && !isScanning && (
        <div className="scanned-results-section">
          <h3 className="section-title">
            <Sparkles size={18} className="text-primary" /> 照片辨識出之英文高頻單字 (點擊查看發音與詳細翻譯):
          </h3>

          <div className="words-chips-row">
            {scannedWords.map((item, idx) => {
              const isSelected = selectedWordObj && selectedWordObj.word === item.word;
              return (
                <button
                  key={idx}
                  className={`word-chip-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedWordObj(item)}
                >
                  <span className="chip-word">{item.word}</span>
                  <span className="chip-trans">{item.translation}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Word Details for Mode 2 */}
      {scannerMode === 'word' && selectedWordObj && !isScanning && (
        <div className="scanned-word-detail-card">
          <div className="word-card-top">
            <div>
              <div className="flex-items-center gap-2">
                <h1 className="word-main-title">{selectedWordObj.word}</h1>
                <span className="word-pos-tag">{selectedWordObj.pos}</span>
                <span className="word-cefr-tag">{selectedWordObj.cefr}</span>
              </div>
              <p className="word-phonetic-text">{selectedWordObj.phonetic}</p>
            </div>

            <div className="word-audio-actions">
              <select 
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="select-accent-box"
              >
                <option value="en-US">🇺🇸 美音 (US)</option>
                <option value="en-GB">🇬🇧 英音 (UK)</option>
              </select>

              <button 
                className="btn-word-speak"
                onClick={() => handleSpeak(selectedWordObj.word)}
              >
                <Volume2 size={24} />
                <span>發音</span>
              </button>
            </div>
          </div>

          <div className="translation-highlight-box">
            <div className="trans-label">繁體中文翻譯：</div>
            <h2 className="trans-text">{selectedWordObj.translation}</h2>
            <p className="def-text">{selectedWordObj.definition}</p>
          </div>

          <div className="word-example-section">
            <div className="example-section-header">
              <span>💡 精選權威例句:</span>
              <button className="btn-example-speak" onClick={() => handleSpeak(selectedWordObj.example)}>
                <Volume2 size={16} /> 帶讀例句
              </button>
            </div>
            <p className="example-text">"{selectedWordObj.example}"</p>
          </div>
        </div>
      )}

      {/* Saved Homework Notes List */}
      {savedHomeworkNotes.length > 0 && (
        <div className="saved-notebook-card">
          <h3 className="notebook-title">
            <BookMarked size={18} className="text-accent" /> 我的拍照解題錯題與筆記庫 ({savedHomeworkNotes.length})
          </h3>

          <div className="notebook-grid">
            {savedHomeworkNotes.map((saved, idx) => (
              <div key={idx} className="notebook-item">
                <div className="flex-items-center justify-between">
                  <span className="notebook-word">{saved.questionNum}</span>
                  <span className="ai-tag text-success">✓ {saved.aiAnswer}</span>
                </div>
                <p className="notebook-trans" style={{ marginTop: '0.25rem' }}>{saved.translation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
