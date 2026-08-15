/**
 * Dynamic Question Mutation Engine (題目自主變化引擎)
 * Handles variable substitution, synonym swapping, option shuffling, and distractor regeneration.
 */

// Synonym dictionary for passage & question paraphrasing
const SYNONYM_DICTIONARY = {
  "important": ["crucial", "vital", "essential", "key"],
  "increase": ["elevate", "surge", "expand", "boost"],
  "difficult": ["challenging", "demanding", "complex", "arduous"],
  "problem": ["issue", "challenge", "obstacle", "dilemma"],
  "famous": ["renowned", "celebrated", "prominent", "well-known"],
  "show": ["demonstrate", "indicate", "illustrate", "reveal"],
  "fast": ["rapid", "swift", "expeditious", "quick"],
  "help": ["assist", "aid", "facilitate", "support"]
};

/**
 * Mutate a given base question object into a unique variant.
 * @param {Object} baseQuestion - The archetype question from RAW_QUESTION_BANK
 * @param {number|string} seed - Optional seed for deterministic mutation
 * @returns {Object} Mutated question object ready for rendering
 */
export function mutateQuestion(baseQuestion, seed = Math.floor(Math.random() * 10000)) {
  // If no mutation parameters exist, perform basic option shuffling & synonym highlighting
  const params = baseQuestion.mutationParams || {};
  let renderedText = baseQuestion.questionTemplate || baseQuestion.title || "";
  let renderedScript = baseQuestion.audioScript || null;
  let renderedPassage = baseQuestion.passage || null;
  let rawOptions = baseQuestion.optionsTemplate ? [...baseQuestion.optionsTemplate] : [];
  
  const mutationLogs = [];
  const selectedValues = {};

  // 1. Process Variable Substitutions ({var_name})
  Object.keys(params).forEach((paramKey) => {
    const choices = params[paramKey];
    if (Array.isArray(choices) && choices.length > 0) {
      // Pick a random index based on seed/randomness
      const idx = (seed + paramKey.length * 3) % choices.length;
      const picked = choices[idx];
      selectedValues[paramKey] = picked;
      mutationLogs.push(`替換變數 {${paramKey}} ➔ "${picked}"`);
    } else if (typeof choices === "string") {
      selectedValues[paramKey] = choices;
    }
  });

  // Replace placeholders in question template
  renderedText = replacePlaceholders(renderedText, selectedValues);
  
  // Replace placeholders in audio script if present
  if (renderedScript) {
    renderedScript = replacePlaceholders(renderedScript, selectedValues);
  }

  // Replace placeholders in options template
  rawOptions = rawOptions.map(opt => replacePlaceholders(opt, selectedValues));

  // 2. Perform Synonym Mutation on Passages if eligible
  if (renderedPassage) {
    const passageMutationResult = mutatePassageSynonyms(renderedPassage, seed);
    renderedPassage = passageMutationResult.passage;
    if (passageMutationResult.mutatedWords.length > 0) {
      mutationLogs.push(`文章同義詞置換: ${passageMutationResult.mutatedWords.join(", ")}`);
    }
  }

  // 3. Option Shuffling & Correct Index Tracking
  let correctOptionText = rawOptions[baseQuestion.correctIndex] || rawOptions[0];
  let shuffledOptions = [...rawOptions];
  
  // Deterministic shuffle using seed
  for (let i = shuffledOptions.length - 1; i > 0; i--) {
    const j = (seed + i * 7) % (i + 1);
    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
  }

  // Find new correct index after shuffle
  let newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
  if (newCorrectIndex === -1) {
    newCorrectIndex = 0; // Fallback
  }

  const mutationHash = `MUT-${(seed % 8999) + 1000}-${baseQuestion.id.toUpperCase()}`;

  return {
    ...baseQuestion,
    isMutated: true,
    mutationHash,
    mutationSeed: seed,
    mutationLogs,
    renderedQuestion: renderedText,
    renderedScript,
    renderedPassage,
    options: shuffledOptions,
    correctIndex: newCorrectIndex,
    originalCorrectText: correctOptionText
  };
}

function replacePlaceholders(templateStr, valuesObj) {
  if (!templateStr) return "";
  let result = templateStr;
  Object.keys(valuesObj).forEach(key => {
    const regex = new RegExp(`\\{${key}\\}`, "g");
    result = result.replace(regex, valuesObj[key]);
  });
  return result;
}

function mutatePassageSynonyms(passageText, seed) {
  let passage = passageText;
  const mutatedWords = [];
  const keys = Object.keys(SYNONYM_DICTIONARY);

  keys.forEach((word, idx) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    if (regex.test(passage)) {
      const synonyms = SYNONYM_DICTIONARY[word];
      const synIdx = (seed + idx) % synonyms.length;
      const chosenSynonym = synonyms[synIdx];
      passage = passage.replace(regex, chosenSynonym);
      mutatedWords.push(`"${word}" ➔ "${chosenSynonym}"`);
    }
  });

  return { passage, mutatedWords };
}
