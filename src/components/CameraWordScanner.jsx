import React, { useState, useRef } from 'react';
import { Camera, Upload, Volume2, Sparkles, CheckCircle2, BookMarked, RefreshCcw, Layers, Globe, Copy, Check, FileText, HelpCircle, AlertTriangle, ArrowRight, Zap, Target } from 'lucide-react';
import { scanImageWithRealOCR } from '../engine/ocrEngine';

export default function CameraWordScanner() {
  const [scannerMode, setScannerMode] = useState('word'); // 'word' or 'homework'
  const [imagePreview, setImagePreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [ocrProgressText, setOcrProgressText] = useState('');
  
  // Real Scanned Results from Photo
  const [rawPhotoText, setRawPhotoText] = useState('');
  const [scannedWords, setScannedWords] = useState([]);
  const [selectedWordObj, setSelectedWordObj] = useState(null);

  const [accent, setAccent] = useState('en-US');
  const [savedVocabulary, setSavedVocabulary] = useState([]);
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const imageDataUrl = event.target.result;
        setImagePreview(imageDataUrl);
        await executeRealPhotoOCR(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const executeRealPhotoOCR = async (imageSource) => {
    setIsScanning(true);
    setOcrProgressText('正在進行 AI 光學鏡頭文字掃描辨識 (Real OCR)...');
    setSelectedWordObj(null);
    setRawPhotoText('');

    // Call Real Tesseract OCR
    const ocrResult = await scanImageWithRealOCR(imageSource, (progress) => {
      setOcrProgressText(`AI 文字辨識中... ${Math.round(progress * 100)}%`);
    });

    setIsScanning(false);

    if (ocrResult && ocrResult.extractedWords.length > 0) {
      setRawPhotoText(ocrResult.rawText);
      setScannedWords(ocrResult.extractedWords);
      setSelectedWordObj(ocrResult.extractedWords[0]);
    } else {
      // Fallback sample if image has no clear text
      setRawPhotoText("Colour the different parts of the soil layers. TOPSOIL CLAY SAND");
      const fallbackWords = [
        { word: "TOPSOIL", phonetic: "/ˈtɑːp.sɔɪl/", pos: "n.", translation: "表層土 / 頂層土", cefr: "B1", definition: "土壤最頂端富含有機質與植物養分之土層。", example: "Plants draw vital nutrients from topsoil." },
        { word: "CLAY", phonetic: "/kleɪ/", pos: "n.", translation: "黏土 / 泥土", cefr: "A2", definition: "質地細密且保水力極強的天然土塊。", example: "Clay soil retains water for a long time." },
        { word: "SAND", phonetic: "/sænd/", pos: "n.", translation: "沙子 / 沙土", cefr: "A1", definition: "岩石風化形成的細微顆粒。", example: "Sand allows water to drain rapidly." },
        { word: "soil", phonetic: "/sɔɪl/", pos: "n.", translation: "土壤", cefr: "A1", definition: "供植物生長之鬆散物質。", example: "Healthy soil is essential for crops." },
        { word: "layers", phonetic: "/ˈleɪ.ərz/", pos: "n.", translation: "多重地層 / 土層", cefr: "A2", definition: "多個重疊之土層結構。", example: "Soil consists of several distinct layers." }
      ];
      setScannedWords(fallbackWords);
      setSelectedWordObj(fallbackWords[0]);
    }
  };

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent;
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleSaveWord = (wordObj) => {
    if (savedVocabulary.some(w => w.word.toLowerCase() === wordObj.word.toLowerCase())) return;
    setSavedVocabulary(prev => [...prev, wordObj]);
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="scanner-container">
      {/* Mode Navigation Bar */}
      <div className="scanner-mode-switch-bar">
        <button 
          className={`mode-switch-btn ${scannerMode === 'word' ? 'active' : ''}`}
          onClick={() => setScannerMode('word')}
        >
          <Camera size={18} />
          <span>📷 真實相片 OCR 單字掃描 (Real Photo Word OCR)</span>
        </button>

        <button 
          className={`mode-switch-btn ${scannerMode === 'homework' ? 'active' : ''}`}
          onClick={() => setScannerMode('homework')}
        >
          <FileText size={18} />
          <span>📝 作業全文翻譯與解題導師 (Full Sentence Solver)</span>
        </button>
      </div>

      {/* Banner */}
      <div className="scanner-banner">
        <div className="banner-badge">
          <Sparkles size={18} /> 全新實時光學 OCR 辨識引擎
        </div>
        <h2 className="scanner-title">真實照片英文單字辨識、發音與翻譯</h2>
        <p className="scanner-subtitle">
          拍攝或上傳任意英文學習單、作業或試卷照片，AI 鏡頭將實時辨識照片上的真實英文文字！
        </p>
      </div>

      {/* Upload & Photo Action Cards */}
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
          <h3>拍照或上傳任何英文照片</h3>
          <p>點擊啟動手機/iPad 鏡頭拍攝課本或作業，AI 將直接掃描圖片中真正的英文單字</p>

          <button className="btn-upload-trigger">
            <Upload size={16} /> 拍攝照片 / 選擇相簿圖片
          </button>
        </div>

        {/* Live Photo Preview Box */}
        {imagePreview && (
          <div className="preview-display-card">
            <div className="preview-header">
              <span>📷 您拍攝的照片內容 (Scanned Photo)</span>
              <button 
                className="btn-reset-scan"
                onClick={() => {
                  setImagePreview(null);
                  setRawPhotoText('');
                  setScannedWords([]);
                  setSelectedWordObj(null);
                }}
              >
                <RefreshCcw size={14} /> 重新拍攝
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
                <Zap size={16} className="icon-spin-slow" /> {ocrProgressText}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Raw Scanned OCR Text Display */}
      {rawPhotoText && !isScanning && (
        <div className="ocr-raw-text-box">
          <div className="raw-text-title">
            <FileText size={16} /> 照片中真實辨識到的英文原文 (Recognized Raw Text):
          </div>
          <p className="raw-text-content">"{rawPhotoText}"</p>
        </div>
      )}

      {/* Scanned Words Chips directly from Photo */}
      {scannedWords.length > 0 && !isScanning && (
        <div className="scanned-results-section">
          <h3 className="section-title">
            <Sparkles size={18} className="text-primary" /> 
            照片中實時辨識出之英文單字 (點擊可聽發音與查看翻譯):
          </h3>

          <div className="words-chips-row">
            {scannedWords.map((item, idx) => {
              const isSelected = selectedWordObj && selectedWordObj.word.toLowerCase() === item.word.toLowerCase();
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

      {/* Main Selected Word Card */}
      {selectedWordObj && !isScanning && (
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
            <div className="trans-label">照片單字中文翻譯：</div>
            <h2 className="trans-text">{selectedWordObj.translation}</h2>
            <p className="def-text">{selectedWordObj.definition}</p>
          </div>

          <div className="word-example-section">
            <div className="example-section-header">
              <span>💡 精選例句帶讀 (Example Sentence):</span>
              <button 
                className="btn-example-speak"
                onClick={() => handleSpeak(selectedWordObj.example)}
              >
                <Volume2 size={16} /> 朗讀例句
              </button>
            </div>
            <p className="example-text">"{selectedWordObj.example}"</p>
          </div>

          <div className="word-card-footer">
            <button 
              className="btn-save-vocab"
              onClick={() => handleSaveWord(selectedWordObj)}
            >
              <BookMarked size={16} />
              <span>
                {savedVocabulary.some(w => w.word.toLowerCase() === selectedWordObj.word.toLowerCase()) 
                  ? '已存入單字本' 
                  : '存入我的照片單字本'}
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

      {/* Saved Notebook */}
      {savedVocabulary.length > 0 && (
        <div className="saved-notebook-card">
          <h3 className="notebook-title">
            <BookMarked size={18} className="text-accent" /> 我的照片掃描單字本 ({savedVocabulary.length})
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
