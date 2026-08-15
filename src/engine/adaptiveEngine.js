/**
 * Computerized Adaptive Testing (CAT) Engine
 * Dynamically adjusts test difficulty based on real-time user performance.
 */

import { GRADE_BENCHMARKS } from "../data/gradeTopics";

export class AdaptiveEngine {
  constructor(initialGradeIndex = 3) { // Default Grade 4
    this.currentGradeIndex = initialGradeIndex;
    this.history = []; // { questionId, gradeLevel, isCorrect, timeSpentSec }
    this.consecutiveCorrect = 0;
    this.consecutiveIncorrect = 0;
  }

  recordAnswer(question, isCorrect, timeSpentSec = 10) {
    this.history.push({
      questionId: question.id,
      gradeLevel: question.gradeLevel,
      isCorrect,
      timeSpentSec
    });

    if (isCorrect) {
      this.consecutiveCorrect++;
      this.consecutiveIncorrect = 0;
      // If 2 consecutive correct answers, elevate level
      if (this.consecutiveCorrect >= 2 && this.currentGradeIndex < GRADE_BENCHMARKS.length - 1) {
        this.currentGradeIndex++;
        this.consecutiveCorrect = 0;
      }
    } else {
      this.consecutiveIncorrect++;
      this.consecutiveCorrect = 0;
      // If incorrect, step down level
      if (this.currentGradeIndex > 0) {
        this.currentGradeIndex--;
        this.consecutiveIncorrect = 0;
      }
    }

    return this.getCurrentStatus();
  }

  getCurrentStatus() {
    const currentBenchmark = GRADE_BENCHMARKS[this.currentGradeIndex];
    const totalQuestions = this.history.length;
    const correctCount = this.history.filter(h => h.isCorrect).length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    return {
      currentGradeIndex: this.currentGradeIndex,
      currentGrade: currentBenchmark,
      totalQuestions,
      correctCount,
      accuracy
    };
  }
}
