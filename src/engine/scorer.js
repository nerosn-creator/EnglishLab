/**
 * EnglishLab Comprehensive Assessment & Scoring Engine
 * Converts raw quiz results into CEFR levels, IELTS Band scores, TOEFL iBT scores, and Grade alignment.
 */

import { GRADE_BENCHMARKS } from "../data/gradeTopics";

export function calculateComprehensiveResults(userAnswers = []) {
  if (!userAnswers || userAnswers.length === 0) {
    return null;
  }

  const total = userAnswers.length;
  const correct = userAnswers.filter(a => a.isCorrect).length;
  const accuracyRatio = correct / total;

  // Weight average difficulty grade index
  let totalGradeWeight = 0;
  const skillStats = {
    "Grammar & Syntax": { total: 0, correct: 0 },
    "Vocabulary": { total: 0, correct: 0 },
    "Reading Comprehension": { total: 0, correct: 0 },
    "Listening Comprehension": { total: 0, correct: 0 }
  };

  userAnswers.forEach(ans => {
    const gradeIdx = getGradeIndex(ans.question.gradeLevel);
    totalGradeWeight += (gradeIdx + 1);

    // Categorize skill
    const skillCategory = categorizeSkill(ans.question.skill || ans.question.title);
    if (!skillStats[skillCategory]) {
      skillStats[skillCategory] = { total: 0, correct: 0 };
    }
    skillStats[skillCategory].total++;
    if (ans.isCorrect) {
      skillStats[skillCategory].correct++;
    }
  });

  const avgGradeWeightedLevel = totalGradeWeight / total; // e.g. 6.5
  
  // Calculate Effective Weighted Grade Index (0 to 11)
  // Higher accuracy on harder questions yields higher grade output
  let estimatedGradeIdx = Math.min(
    11,
    Math.max(0, Math.round((avgGradeWeightedLevel - 1) + (accuracyRatio - 0.5) * 3))
  );

  const matchedGrade = GRADE_BENCHMARKS[estimatedGradeIdx];

  // Convert to IELTS Band (1.0 - 9.0)
  let ieltsBand = 2.0;
  if (estimatedGradeIdx <= 2) ieltsBand = (2.0 + accuracyRatio * 1.5).toFixed(1); // 2.0 - 3.5
  else if (estimatedGradeIdx <= 5) ieltsBand = (3.5 + accuracyRatio * 1.5).toFixed(1); // 3.5 - 5.0
  else if (estimatedGradeIdx <= 8) ieltsBand = (5.0 + accuracyRatio * 1.5).toFixed(1); // 5.0 - 6.5
  else ieltsBand = (6.5 + accuracyRatio * 2.5).toFixed(1); // 6.5 - 9.0

  // Convert to TOEFL iBT Score (0 - 120)
  let toeflScore = Math.round(accuracyRatio * 120 * ( (estimatedGradeIdx + 1) / 12 ));
  toeflScore = Math.min(120, Math.max(10, toeflScore));

  // Determine Radar breakdown
  const radarBreakdown = Object.keys(skillStats).map(skillName => {
    const item = skillStats[skillName];
    const skillAcc = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 70;
    return {
      skill: skillName,
      score: skillAcc,
      total: item.total,
      correct: item.correct
    };
  });

  // Actionable advice based on lowest scoring skill
  const sortedSkills = [...radarBreakdown].sort((a, b) => a.score - b.score);
  const weakestSkill = sortedSkills[0] || { skill: "Grammar", score: 50 };

  const advice = generateAdvice(weakestSkill.skill, matchedGrade.name);

  return {
    totalQuestions: total,
    correctCount: correct,
    accuracyPercentage: Math.round(accuracyRatio * 100),
    estimatedGrade: matchedGrade,
    cefrLevel: matchedGrade.cefr,
    ieltsBand: parseFloat(ieltsBand),
    toeflScore,
    radarBreakdown,
    weakestSkill: weakestSkill.skill,
    advice
  };
}

function getGradeIndex(gradeLevelId) {
  const map = {
    g1: 0, g2: 1, g3: 2, g4: 3, g5: 4, g6: 5,
    g7: 6, g8: 7, g9: 8, g10: 9, g11: 10, g12: 11
  };
  return map[gradeLevelId] !== undefined ? map[gradeLevelId] : 5;
}

function categorizeSkill(skillStr = "") {
  const str = skillStr.toLowerCase();
  if (str.includes("read") || str.includes("passage")) return "Reading Comprehension";
  if (str.includes("listen") || str.includes("dialogue")) return "Listening Comprehension";
  if (str.includes("vocab") || str.includes("synonym") || str.includes("word")) return "Vocabulary";
  return "Grammar & Syntax";
}

function generateAdvice(weakSkill, gradeName) {
  const adviceMap = {
    "Grammar & Syntax": `針對目前 ${gradeName} 的指標，建議加強完成式、被動語態與關係代名詞子句的結構拆解，並多練習變異句型的文法動態比較。`,
    "Vocabulary": `單字量目前是主要的提升瓶頸。建議多進行雅思/托福同義詞矩陣 (Paraphrasing) 擴充，特別是學術文章常考的動詞與形容詞。`,
    "Reading Comprehension": `閱讀長篇文章時，建議採用 Skimming (略讀) 抓主旨與 Scanning (掃讀) 尋找特定細節關鍵字的雙軌技巧。`,
    "Listening Comprehension": `聽力部分建議善用本系統的「英音 (IELTS) / 美音 (TOEFL)」切換功能，習慣不同的口音與連讀 (Linking Sounds) 現象。`
  };
  return adviceMap[weakSkill] || `持續練習不同難度的考古題與自主變化題型，可大幅提升測驗穩定度。`;
}
