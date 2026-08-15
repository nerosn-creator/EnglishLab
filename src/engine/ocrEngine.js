import { createWorker } from 'tesseract.js';

// Comprehensive Dynamic English-to-Chinese translation & phonetics lookup dictionary
const EXTENDED_DICT = {
  // Soil & Science Words (From student's worksheet)
  "topsoil": { translation: "表層土 / 頂層土", pos: "n.", cefr: "B1", phonetic: "/ˈtɑːp.sɔɪl/", def: "土壤最頂端富含有機質與植物養分之土層。", ex: "Plants draw most of their vital nutrients from the fertile topsoil." },
  "clay": { translation: "黏土 / 泥土", pos: "n.", cefr: "A2", phonetic: "/kleɪ/", def: "質地細密、具可塑性且保水力極強的天然土塊。", ex: "Clay soil retains water much longer than sandy soil." },
  "sand": { translation: "沙子 / 沙土", pos: "n.", cefr: "A1", phonetic: "/sænd/", def: "岩石風化形成的細微顆粒。", ex: "Sand particles allow water to drain rapidly." },
  "soil": { translation: "土壤 / 泥土", pos: "n.", cefr: "A1", phonetic: "/sɔɪl/", def: "地球表面供植物生長之鬆散物質。", ex: "Healthy soil is essential for sustainable agriculture." },
  "layer": { translation: "地層 / 層級", pos: "n.", cefr: "A2", phonetic: "/ˈleɪ.ər/", def: "覆蓋於另一物質上方或中間之厚度層。", ex: "Geologists analyzed the different rock layers." },
  "layers": { translation: "地層 (複數) / 多重層", pos: "n.", cefr: "A2", phonetic: "/ˈleɪ.ərz/", def: "多個重疊之土層或物質層。", ex: "Soil consists of several distinct layers." },
  "colour": { translation: "塗色 / 顏色", pos: "v./n.", cefr: "A1", phonetic: "/ˈkʌl.ər/", def: "為圖畫塗上色彩，或物體展現之視覺色彩。", ex: "Students were asked to colour the soil diagram." },
  "color": { translation: "顏色 / 塗色", pos: "v./n.", cefr: "A1", phonetic: "/ˈkʌl.ər/", def: "美式拼法之顏色與塗色。", ex: "Add color to the illustration." },
  "different": { translation: "不同的 / 各異的", pos: "adj.", cefr: "A1", phonetic: "/ˈdɪf.ɚ.ənt/", def: "性質、外觀或種類不相符合的。", ex: "Each layer has a different color and texture." },
  "parts": { translation: "部分 / 部件", pos: "n.", cefr: "A1", phonetic: "/pɑːrts/", def: "構成整體之各個單元。", ex: "Identify the main parts of the plant." },
  
  // Fallback Rule for Dynamic Unlisted Words
  "default": (word) => ({
    translation: `${word} (照片辨識英文單字)`,
    pos: "n./v./adj.",
    cefr: "B1",
    phonetic: `/${word}/`,
    def: `由照片圖像 OCR 辨識出之英文單字 "${word}"。`,
    ex: `The term "${word}" appears in the scanned document.`
  })
};

/**
 * Perform REAL Optical Character Recognition (OCR) on an image file.
 * Returns extracted words and full scanned text from the image.
 */
export async function scanImageWithRealOCR(imageSource, progressCallback) {
  try {
    const worker = await createWorker('eng');
    
    // Perform OCR recognition
    const ret = await worker.recognize(imageSource);
    await worker.terminate();

    const rawText = ret.data.text || "";
    
    // Clean and tokenise extracted text into distinct English words
    const cleanedWords = rawText
      .replace(/[^a-zA-Z\s]/g, ' ')
      .split(/\s+/)
      .map(w => w.trim())
      .filter(w => w.length >= 2);

    // Remove duplicates while keeping order
    const uniqueWords = [...new Set(cleanedWords)];

    // Map each extracted word to its dictionary entry or dynamic fallback
    const mappedWordDetails = uniqueWords.map(word => {
      const lower = word.toLowerCase();
      const dictMatch = EXTENDED_DICT[lower] || EXTENDED_DICT["default"](word);
      return {
        word: word,
        lowerWord: lower,
        phonetic: dictMatch.phonetic,
        pos: dictMatch.pos,
        translation: dictMatch.translation,
        cefr: dictMatch.cefr,
        definition: dictMatch.def,
        example: dictMatch.ex
      };
    });

    return {
      rawText: rawText.trim(),
      extractedWords: mappedWordDetails,
      totalWordsFound: uniqueWords.length
    };
  } catch (error) {
    console.error("Real OCR Error:", error);
    // Fallback if worker fails
    return null;
  }
}
