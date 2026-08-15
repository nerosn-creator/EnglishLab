import React, { useState, useRef } from 'react';
import { Camera, Upload, Volume2, Sparkles, CheckCircle2, BookMarked, RefreshCcw, Layers, Globe, Copy, Check } from 'lucide-react';

// Built-in academic translation & OCR database dictionary for photo scanning
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
  "phenomenon": {
    word: "phenomenon",
    phonetic: "/fəˈnɑː.mə.nɑːn/",
    pos: "n.",
    translation: "現象 / 奇蹟",
    cefr: "B2",
    ieltsToefl: "IELTS Band 6.5+ / TOEFL",
    definition: "可被觀察到的事件、事實或罕見之自然物理現象。",
    synonyms: ["occurrence", "event", "spectacle"],
    example: "Urban heat islands represent a common microclimatic phenomenon."
  },
  "mitigate": {
    word: "mitigate",
    phonetic: "/ˈmɪt me.ɡeɪt/",
    pos: "v.",
    translation: "緩和 / 減輕",
    cefr: "C1 Advanced",
    ieltsToefl: "IELTS Band 7.5+ / TOEFL",
    definition: "使嚴重程度、痛楚或災害減輕，降低不利影響。",
    synonyms: ["alleviate", "abate", "lessen", "reduce"],
    example: "Trees help mitigate urban heat and air pollution effectively."
  },
  "diligent": {
    word: "diligent",
    phonetic: "/ˈdɪl.ə.dʒənt/",
    pos: "adj.",
    translation: "勤奮的 / 孜孜不倦的",
    cefr: "B1",
    ieltsToefl: "Grade 7-9 / IELTS 5.5",
    definition: "認真專注、付出一貫努力的行為表現。",
    synonyms: ["industrious", "assiduous", "hardworking"],
    example: "Diligent students usually achieve high academic honors."
  },
  "indispensable": {
    word: "indispensable",
    phonetic: "/ˌɪn.dɪˈspen.sə.bəl/",
    pos: "adj.",
    translation: "不可或缺的 / 絕對必要的",
    cefr: "C1",
    ieltsToefl: "IELTS 7.0+ / TOEFL iBT",
    definition: "極為重要、不可缺少的人事物。",
    synonyms: ["essential", "vital", "crucial"],
    example: "Clean water is indispensable to human survival."
  }
};

export default function CameraWordScanner() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedWords, setScannedWords] = useState([]);
  const [selectedWordObj, setSelectedWordObj] = useState(null);
  const [accent, setAccent] = useState('en-US');
  const [savedVocabulary, setSavedVocabulary] = useState([]);
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        processPhotoScan(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const processPhotoScan = (fileName) => {
    setIsScanning(true);
    setSelectedWordObj(null);

    // Simulate AI Vision OCR Scanning
    setTimeout(() => {
      setIsScanning(false);
      const dictKeys = Object.keys(SAMPLE_OCR_DICT);
      const detected = dictKeys.map(k => SAMPLE_OCR_DICT[k]);
      setScannedWords(detected);
      setSelectedWordObj(detected[0]);
    }, 1200);
  };

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSaveWord = (wordObj) => {
    if (savedVocabulary.some(w => w.word === wordObj.word)) return;
    setSavedVocabulary(prev => [...prev, wordObj]);
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="scanner-container">
      {/* Banner */}
      <div className="scanner-banner">
        <div className="banner-badge">
          <Camera size={18} /> AI 拍照辨識 × 發音帶讀與翻譯
        </div>
        <h2 className="scanner-title">英文照片辨識與智慧單字卡</h2>
        <p className="scanner-subtitle">拍照或上傳圖片，AI 自動掃描辨識照片中的英文單字，提供發音、中文翻譯與例句</p>
      </div>

      {/* Upload & Photo Action Cards */}
      <div className="scanner-action-grid">
        {/* Camera Capture Card */}
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
          <h3>拍照或上傳英文圖片</h3>
          <p>支援點擊開啟手機相機拍照，或從相簿選擇課本/英文試卷圖片</p>

          <button className="btn-upload-trigger">
            <Upload size={16} /> 選擇照片 / 啟動相機
          </button>
        </div>

        {/* Live Photo Preview Box */}
        {imagePreview && (
          <div className="preview-display-card">
            <div className="preview-header">
              <span>📷 掃描相片預覽 (Scanned Image)</span>
              <button 
                className="btn-reset-scan"
                onClick={() => {
                  setImagePreview(null);
                  setScannedWords([]);
                  setSelectedWordObj(null);
                }}
              >
                <RefreshCcw size={14} /> 重新拍照
              </button>
            </div>
            
            <div className="img-wrapper">
              <img src={imagePreview} alt="Scanned Document" className="scanned-img" />
              {isScanning && (
                <div className="scan-laser-line"></div>
              )}
            </div>

            {isScanning && (
              <div className="scanning-status-text">
                <Sparkles size={16} className="icon-spin-slow" /> AI 光學辨識與文字分析中...
              </div>
            )}
          </div>
        )}
      </div>

      {/* Scanned Words Chips */}
      {scannedWords.length > 0 && !isScanning && (
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

      {/* Main Selected Word Card with TTS Audio & Translation */}
      {selectedWordObj && !isScanning && (
        <div className="scanned-word-detail-card">
          {/* Card Top Row */}
          <div className="word-card-top">
            <div>
              <div className="flex-items-center gap-2">
                <h1 className="word-main-title">{selectedWordObj.word}</h1>
                <span className="word-pos-tag">{selectedWordObj.pos}</span>
                <span className="word-cefr-tag">{selectedWordObj.cefr}</span>
              </div>
              <p className="word-phonetic-text">{selectedWordObj.phonetic}</p>
            </div>

            {/* Accent Switcher & Audio Button */}
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

          {/* Chinese Translation */}
          <div className="translation-highlight-box">
            <div className="trans-label">繁體中文翻譯：</div>
            <h2 className="trans-text">{selectedWordObj.translation}</h2>
            <p className="def-text">{selectedWordObj.definition}</p>
          </div>

          {/* Academic Synonyms & Exam Rating */}
          <div className="word-extra-info-grid">
            <div className="info-sub-card">
              <div className="sub-card-label"><Layers size={14} /> 考題定位與難度：</div>
              <div className="sub-card-val text-primary">{selectedWordObj.ieltsToefl}</div>
            </div>

            <div className="info-sub-card">
              <div className="sub-card-label"><Globe size={14} /> 高階同義詞 (Synonyms)：</div>
              <div className="synonyms-tags">
                {selectedWordObj.synonyms.map((syn, sIdx) => (
                  <span key={sIdx} className="syn-tag">{syn}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Example Sentence with Audio */}
          <div className="word-example-section">
            <div className="example-section-header">
              <span>💡 精選權威例句 (Example Sentence):</span>
              <button 
                className="btn-example-speak"
                onClick={() => handleSpeak(selectedWordObj.example)}
              >
                <Volume2 size={16} /> 帶讀例句
              </button>
            </div>
            <p className="example-text">"{selectedWordObj.example}"</p>
          </div>

          {/* Card Footer Actions */}
          <div className="word-card-footer">
            <button 
              className="btn-save-vocab"
              onClick={() => handleSaveWord(selectedWordObj)}
            >
              <BookMarked size={16} />
              <span>
                {savedVocabulary.some(w => w.word === selectedWordObj.word) 
                  ? '已存入生字本' 
                  : '存入我的單字本'}
              </span>
            </button>

            <button 
              className="btn-copy-vocab"
              onClick={() => handleCopyText(`${selectedWordObj.word} (${selectedWordObj.pos}) - ${selectedWordObj.translation}\n例句: ${selectedWordObj.example}`)}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? '已複製內容' : '複製單字與翻譯'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Saved Vocabulary Notebook Section */}
      {savedVocabulary.length > 0 && (
        <div className="saved-notebook-card">
          <h3 className="notebook-title">
            <BookMarked size={18} className="text-accent" /> 我的照片掃描生字本 ({savedVocabulary.length})
          </h3>

          <div className="notebook-grid">
            {savedVocabulary.map((saved, idx) => (
              <div key={idx} className="notebook-item">
                <div className="flex-items-center justify-between">
                  <span className="notebook-word">{saved.word}</span>
                  <button className="btn-audio-mini" onClick={() => handleSpeak(saved.word)}>
                    <Volume2 size={14} />
                  </button>
                </div>
                <span className="notebook-trans">{saved.translation} ({saved.pos})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
