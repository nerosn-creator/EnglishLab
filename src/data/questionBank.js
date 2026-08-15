import { IELTS_TOEFL_QUESTION_BANK } from './ieltsToeflBank';

export const RAW_QUESTION_BANK = [
  // --- GRADE 0 (Pre-K / Toddler) ---
  {
    id: "g0_01",
    gradeLevel: "g0",
    skill: "Phonics & Vocabulary",
    cefr: "Pre-A1",
    examType: "Pre-K Focus",
    title: "基礎字母自然發音 (Phonics Starter)",
    questionTemplate: "Look at the picture 🍎! What letter does '{word}' start with?",
    optionsTemplate: ["A", "B", "C", "D"],
    correctIndex: 0,
    explanation: "Apple 的首字母是 A (/æ/ /æ/ Apple)。",
    intent: "評測幼兒自然發音首字母連結能力。",
    distractorAnalysis: [
      "A. Correct: Apple 的首字母為 A。",
      "B. Incorrect: B 搭配 Ball。",
      "C. Incorrect: C 搭配 Cat。",
      "D. Incorrect: D 搭配 Dog。"
    ],
    academicEtymology: "apple (n. 蘋果) - Phonics letter A sound",
    mutationParams: {
      word: ["Apple"]
    }
  },

  // --- GRADE 1 (A1 Starter) ---
  {
    id: "g1_01",
    gradeLevel: "g1",
    skill: "Grammar & Subject-Verb Agreement",
    cefr: "A1",
    examType: "Grade 1 Focus",
    title: "BE 動詞主意一致性 (Subject-Verb Agreement)",
    questionTemplate: "Both the principal and {subject} {be_verb} currently attending the international conference.",
    optionsTemplate: ["are", "is", "am", "be"],
    correctIndex: 0,
    explanation: "由對等連接詞 'Both ... and ...' 連接的複數合股主詞，動詞必須複數 (are)。",
    intent: "考驗對等連接詞 Both...and 所引導之合股複數主詞對動詞的約束能力。",
    distractorAnalysis: [
      "A. Correct: Both A and B 視為複數，搭配複數 BE 動詞 are。",
      "B. Incorrect (is): 誤認為主詞僅為單數單一物件。",
      "C. Incorrect (am): 主詞非第一人稱 I。",
      "D. Incorrect (be): 未經過時態與人稱變位的原形動詞。"
    ],
    academicEtymology: "principal (n. 校長/主要負責人) ↔ headmaster / director",
    mutationParams: {
      subject: ["the research assistant", "the senior professor", "the lead engineer"],
      be_verb: ["are"]
    }
  },

  // --- GRADE 2 (A1 Beginner) ---
  {
    id: "g2_01",
    gradeLevel: "g2",
    skill: "Nouns & Irregular Plurals",
    cefr: "A1",
    examType: "Grade 2 Focus",
    title: "集體名詞與不可數量詞 (Uncountable Quantifiers)",
    questionTemplate: "The lab team requested three distinct {quantifier} of specialized {item_uncountable} for the experiment.",
    optionsTemplate: ["pieces / equipment", "equipments / piece", "pieces / equipments", "equipments / pieces"],
    correctIndex: 0,
    explanation: "equipment 屬於不可數集合名詞，絕不可加複數 -s；需藉由可數單位量詞 piece (pieces) 來進行計量。",
    intent: "測試英語不可數集合名詞 (Uncountable Aggregate Nouns) 的計量轉換語法。",
    distractorAnalysis: [
      "A. Correct: pieces 作為可數單位修飾不可數名詞 equipment。",
      "B. Incorrect: equipment 加 -s 為典型大考語法錯誤陷阱。",
      "C. Incorrect: 兩者皆加 -s 違反不可數原則。",
      "D. Incorrect: 語序與數目限定詞錯置。"
    ],
    academicEtymology: "equipment (n. 設備) ↔ apparatus / machinery / instruments",
    mutationParams: {
      quantifier: ["pieces", "units", "batches"],
      item_uncountable: ["equipment", "information", "advice"]
    }
  },

  // --- GRADE 3 (A1 Element) ---
  {
    id: "g3_01",
    gradeLevel: "g3",
    skill: "Stative Verbs & Continuous Tense",
    cefr: "A1+",
    examType: "Grade 3 Focus",
    title: "狀態動詞 (Stative Verbs) 之時態限制",
    questionTemplate: "Although the data appears complex, the principal investigator {verb_stative} the underlying cause.",
    optionsTemplate: ["understands", "is understanding", "has been understanding", "understand"],
    correctIndex: 0,
    explanation: "understand 屬於認知型狀態動詞 (Stative Verb)，表達心理理解狀態而非動態動作，故不可使用進行式 (-ing)。",
    intent: "評測學童區分動態動作動詞 (Dynamic Verbs) 與認知狀態動詞 (Stative Verbs) 的能力。",
    distractorAnalysis: [
      "A. Correct: 第三人稱單數主詞搭配現在簡單式 understands。",
      "B. Incorrect: 狀態動詞不可使用進行式 is understanding。",
      "C. Incorrect: 現在完成進行式不適用於純認知狀態。",
      "D. Incorrect: 主詞為單數，未加動詞 -s 形態錯誤。"
    ],
    academicEtymology: "understand (v. 理解) ↔ comprehend / grasp / perceive",
    mutationParams: {
      verb_stative: ["understands"]
    }
  },

  // --- GRADE 4 (A2 Elementary) ---
  {
    id: "g4_01",
    gradeLevel: "g4",
    skill: "Past Tense & Interrupted Actions",
    cefr: "A2",
    examType: "Grade 4 Focus",
    title: "過去進行式與過去簡單式交錯",
    questionTemplate: "The scientists {past_continuous} the experiment when the sudden power outage occurred.",
    optionsTemplate: ["were conducting", "conducted", "are conducting", "have conducted"],
    correctIndex: 0,
    explanation: "長動作正在發生時 (were conducting)，被突發動作 (occurred) 中斷，長動作使用過去進行式。",
    intent: "測試過去進行式與過去簡單式交錯文法結構。",
    distractorAnalysis: [
      "A. Correct: were conducting 正確表述中斷前持續進行的長動作。",
      "B. Incorrect: conducted 未能突顯被中斷的持續狀態。",
      "C. Incorrect: are conducting 為現在進行式，時態不一致。",
      "D. Incorrect: 現在完成式不搭配過去特定中斷動作。"
    ],
    academicEtymology: "conduct (v. 進行) ↔ carry out / execute",
    mutationParams: {
      past_continuous: ["were conducting"]
    }
  },

  // --- GRADE 5 (A2 High-Elem) ---
  {
    id: "g5_01",
    gradeLevel: "g5",
    skill: "Parallel Structure & Conjunctions",
    cefr: "A2+",
    examType: "Grade 5 Focus",
    title: "對等連接詞之平行對稱結構 (Parallelism)",
    questionTemplate: "The candidate excels in analyzing raw data, formulating hypotheses, and {verb_parallel}.",
    optionsTemplate: ["presenting findings", "to present findings", "presents findings", "presented findings"],
    correctIndex: 0,
    explanation: "由 and 連接的項目需保持平行 (analyzing..., formulating..., presenting...)，全數使用動名詞 V-ing。",
    intent: "測試對等平行對稱句構 (Parallel Structure)。",
    distractorAnalysis: [
      "A. Correct: presenting 保持 -ing 形態平行一致。",
      "B. Incorrect: 不定詞破壞平行劃一原則。",
      "C. Incorrect: 現在簡單式破壞平行結構。",
      "D. Incorrect: 過去式打破文法劃一性。"
    ],
    academicEtymology: "formulate (v. 構想/制定) ↔ devise / articulate",
    mutationParams: {
      verb_parallel: ["presenting findings"]
    }
  },

  // --- GRADE 6 (A2+ Bridge) ---
  {
    id: "g6_01",
    gradeLevel: "g6",
    skill: "Modals & Indirect Questions",
    cefr: "A2+",
    examType: "Grade 6 Focus",
    title: "間接問句之語序結構",
    questionTemplate: "Do you happen to know where the research committee {indirect_order} the annual symposium?",
    optionsTemplate: ["will hold", "will they hold", "did they held", "do they hold"],
    correctIndex: 0,
    explanation: "間接問句為『疑問詞 + 主詞 + 動詞』平述語序，不可以倒裝或保留助動詞 (will they hold 錯誤)。",
    intent: "考驗間接問句不倒裝之平述語序。",
    distractorAnalysis: [
      "A. Correct: will hold 為主詞 the research committee 後方之平述語序動詞。",
      "B. Incorrect: 保留了疑問句倒裝語序 (will they hold)。",
      "C. Incorrect: 助動詞 did 與動詞過去式 held 雙重過去式錯誤。",
      "D. Incorrect: 保留助動詞 do 之倒裝語序。"
    ],
    academicEtymology: "symposium (n. 研討會) ↔ conference / convention",
    mutationParams: {
      indirect_order: ["will hold"]
    }
  },

  // --- GRADE 7 (B1 Pre-Inter) ---
  {
    id: "g7_01",
    gradeLevel: "g7",
    skill: "Grammar & Present Perfect Tense",
    cefr: "B1",
    examType: "Grade 7 Focus",
    title: "現在完成式與時間副詞連用限制",
    questionTemplate: "Dr. Chen {perfect_verb} groundbreaking clinical research on cellular regeneration since {year}, publishing over {num} peer-reviewed papers.",
    optionsTemplate: ["has conducted", "conducted", "is conducting", "was conducted"],
    correctIndex: 0,
    explanation: "句中存在 'since + 過去特定時間點'，主要子句必須使用現在完成式 (has/have + p.p.) 表達動作持續至今。",
    intent: "檢驗考生對完成式時間起止點 (since vs. for) 與主要子句動詞配對之語法精準度。",
    distractorAnalysis: [
      "A. Correct: has conducted 正確配合 since 引導的時間起點。",
      "B. Incorrect: simple past (conducted) 用於已與現在切割的過去特定時間，不搭配 since。",
      "C. Incorrect: 現在進行式無法表述自過去跨越至現在的時間長度。",
      "D. Incorrect: 被動語態與主詞 Dr. Chen (執行者) 語意矛盾。"
    ],
    academicEtymology: "conduct (v. 執行) ↔ execute / administer / perform",
    mutationParams: {
      perfect_verb: ["has conducted"],
      year: ["2012", "2015", "2018"],
      num: ["40", "60", "80"]
    }
  },

  // --- GRADE 8 (B1 Intermediate) ---
  {
    id: "g8_01",
    gradeLevel: "g8",
    skill: "Non-defining Relative Clauses",
    cefr: "B1+",
    examType: "IELTS General / Grade 8",
    title: "非限定關係子句與關係代名詞限制",
    questionTemplate: "Professor Robert Oppenheimer, {rel_pronoun} spearheaded the Manhattan Project during World War II, remains a pivotal figure in modern nuclear physics.",
    optionsTemplate: ["who", "that", "whom", "which"],
    correctIndex: 0,
    explanation: "先行詞為專有名詞且前後有逗號（非限定關係子句），修飾主詞人名，故只能使用 who；逗號後方絕不可用 that。",
    intent: "考驗對於逗號非限定關係子句 (Non-defining Relative Clause) 中禁用 that 的高階文法禁忌。",
    distractorAnalysis: [
      "A. Correct: who 在非限定關係子句中擔任人稱主詞。",
      "B. Incorrect (that): 非限定關係子句 (逗號後) 嚴格禁用 that！",
      "C. Incorrect (whom): whom 只能在關係子句中擔任受詞，本句缺主詞。",
      "D. Incorrect (which): which 用於修飾事物而非人。"
    ],
    academicEtymology: "spearhead (v. 帶領/作為先鋒) ↔ pioneer / lead / initiate",
    mutationParams: {
      rel_pronoun: ["who"]
    }
  },

  // --- GRADE 9 (B1+ High-Inter) ---
  {
    id: "g9_01",
    gradeLevel: "g9",
    skill: "Adverse Conjunctions & Syntax",
    cefr: "B1+",
    examType: "TOEFL Junior / Grade 9",
    title: "讓步連接詞與介系詞劃分 (Although vs. Despite)",
    questionTemplate: "{conjunction} the persistent economic volatility, the multinational conglomerate decided to expand its research and development facilities.",
    optionsTemplate: ["Despite", "Although", "Even though", "In spite"],
    correctIndex: 0,
    explanation: "空格後方 'the persistent economic volatility' 為名詞片語而非帶有動詞的子句，故必須選擇介系詞 Despite (或 In spite of)。",
    intent: "檢驗屬屬連接詞 (Conjunctions) 與介系詞片語 (Prepositions) 在句構層面的詞性判讀能力。",
    distractorAnalysis: [
      "A. Correct: Despite 為介系詞，直接修飾名詞片語。",
      "B. Incorrect (Although): Although 為連接詞，後方必須接完整子句 (S+V)。",
      "C. Incorrect (Even though): 同為連接詞，需接子句。",
      "D. Incorrect (In spite): 缺少必要介系詞 of (必須為 In spite of)。"
    ],
    academicEtymology: "volatility (n. 波動性/不穩定) ↔ instability / fluctuation / turbulence",
    mutationParams: {
      conjunction: ["Despite"]
    }
  },

  // --- GRADE 10 (B2 Pre-Advanced) ---
  {
    id: "g10_01",
    gradeLevel: "g10",
    skill: "Subjunctive Conditionals & Had Inversion",
    cefr: "B2",
    examType: "Grade 10 Focus",
    title: "與過去事實相反假設倒裝 (Had I known...)",
    questionTemplate: "{subjunctive_inversion} the experimental flaws earlier, the engineering team would have prevented the catastrophic structural failure.",
    optionsTemplate: ["Had the lead engineer identified", "If the lead engineer identifies", "Should the lead engineer identified", "If the lead engineer would identify"],
    correctIndex: 0,
    explanation: "與過去事實相反的假設語氣 (If + had + p.p.)，當省略 If 時，had 移至主詞前形成倒裝句 (Had the lead engineer identified...)。",
    intent: "評測高一與 IELTS Academic 寫作高頻文法：假設語氣 Had 倒裝句。",
    distractorAnalysis: [
      "A. Correct: Had S p.p. 正確代表 If S had p.p. 省略 If 倒裝。",
      "B. Incorrect: identifies 為現在簡單式，時態不一致。",
      "C. Incorrect: Should 倒裝用於未來萬一假設 (Should S V)，非過去事實相反。",
      "D. Incorrect: If 子句中不可直接放 modal 'would identify'。"
    ],
    academicEtymology: "catastrophic (adj. 災難性的) ↔ disastrous / calamitous",
    mutationParams: {
      subjunctive_inversion: ["Had the lead engineer identified"]
    }
  },

  // --- GRADE 11 (B2 Advanced) ---
  {
    id: "g11_01",
    gradeLevel: "g11",
    skill: "TOEFL Academic Lecture & Inferences",
    cefr: "C1",
    examType: "TOEFL iBT / Grade 11",
    type: "listening",
    audioScript: "Good morning, class. Today in Astrophysics 402, we examine orbital mechanics and tidal dissipation. When a satellite orbits in close proximity to a massive celestial body, gravitational gradient forces exert differential stress across its planetary diameter. Over evolutionary timescales, this gravitational friction converts rotational kinetic energy into internal thermal energy, gradually decelerating the satellite's rotation until its orbital and rotational periods synchronize perfectly—a state known as tidal locking. A prominent consequence of this equilibrium is that the satellite perpetually presents the same hemisphere to its primary body.",
    questionTemplate: "What can be inferred from the professor's lecture regarding tidal locking?",
    optionsTemplate: [
      "It converts rotational kinetic energy into thermal energy, freezing one hemisphere perpetually toward the primary body",
      "It speeds up the satellite's rotation speed beyond its revolution velocity",
      "It eliminates all gravitational forces between the satellite and its primary body",
      "It only occurs in artificial man-made satellites placed in low Earth orbit"
    ],
    correctIndex: 0,
    explanation: "教授演講指明 'converts rotational kinetic energy into internal thermal energy... perpetually presents the same hemisphere to its primary body'。",
    intent: "托福聽力學術演講中概念因果與推論 (Inference Question) 的理解能力測試。",
    distractorAnalysis: [
      "A. Correct: 完美的演講轉譯與邏輯推理彙整。",
      "B. Incorrect: 演講指出是自轉減速 (decelerating) 而非加速 (speeds up)。",
      "C. Incorrect: 潮汐鎖定是引力作用結果而非消除引力。",
      "D. Incorrect: 此為天體力學自然現象而非僅限人工衛星。"
    ],
    academicEtymology: "dissipation (n. 耗散/散失) ↔ dispersion / waste | proximity (n. 近距離) ↔ vicinity / closeness"
  },

  // --- GRADE 12 (C1 Mastery) ---
  {
    id: "g12_01",
    gradeLevel: "g12",
    skill: "Advanced Inversion & Subjunctive Mood",
    cefr: "C1 Mastery",
    examType: "IELTS / TOEFL Advanced / Grade 12",
    title: "高級倒裝句型與雙重虛擬 (Advanced Inversion)",
    questionTemplate: "Seldom {inversion_part} such an unprecedented convergence of artificial intelligence and biotechnology, nor have ethicists faced such profound moral dilemmas.",
    optionsTemplate: ["have scholars witnessed", "scholars have witnessed", "did scholars witnessed", "had scholars witnessing"],
    correctIndex: 0,
    explanation: "否定副詞 'Seldom' 置於句首引發部分倒裝 (Partial Inversion)，助動詞 'have' 必須前置於主詞 'scholars' 之前，後接過去分詞 witnessed。",
    intent: "評測 C1 Mastery 高級學者語篇中否定倒裝 (Negative Inversion) 的語序變位控制力。",
    distractorAnalysis: [
      "A. Correct: Seldom + have (助動詞) + scholars (主詞) + witnessed (p.p.)。",
      "B. Incorrect: 常規語序未進行倒裝，違反句首否定副詞語法律。",
      "C. Incorrect: 助動詞 did 後方錯誤使用過去式 witnessed (雙重過去式錯誤)。",
      "D. Incorrect: 時態與分詞搭配錯置。"
    ],
    academicEtymology: "unprecedented (adj. 史無前例的) ↔ unparalleled / matchless | convergence (n. 匯聚) ↔ junction / merging",
    mutationParams: {
      inversion_part: ["have scholars witnessed"]
    }
  },

  // --- IELTS TASK 1 / TASK 2 & TOEFL WRITING PROMPTS ---
  {
    id: "ielts_write_01",
    gradeLevel: "g12",
    skill: "IELTS Academic Writing Task 2",
    cefr: "C1",
    examType: "IELTS Academic",
    type: "writing_prompt",
    title: "IELTS Academic Task 2: AI & Educational Pedagogy",
    questionTemplate: "Some educational theorists contend that autonomous AI tutoring systems will render human teachers obsolete in secondary education. To what extent do you agree or disagree with this statement?",
    sampleResponse: "While AI-driven algorithms exhibit unparalleled efficacy in adaptive knowledge dissemination and diagnostic feedback, human educators provide indispensable affective mentorship, ethical guidance, and dynamic socio-emotional facilitation that technology inherently lacks. Consequently, AI should be envisioned as a powerful pedagogical catalyst rather than a complete replacement for human teachers.",
    keyCriteria: [
      "Task Response: Fully developed thesis with nuanced counter-argument acknowledgment",
      "Coherence & Cohesion: Seamless discourse markers (Notwithstanding, Consequently)",
      "Lexical Resource: C2 Academic vocabulary (dissemination, catalyst, pedagogical)",
      "Grammatical Range: Complex passive structures and modal hedging"
    ],
    intent: "評估考生能否撰寫具備學術嚴謹度、反駁論證與高階詞彙的 8.0+ 範文架構。",
    distractorAnalysis: [],
    academicEtymology: "obsolete (adj. 被淘汰的/過時的) ↔ outmoded / superseded | pedagogy (n. 教育學/教學法) ↔ instruction / educational science"
  },

  // --- IELTS & TOEFL DEDICATED EXAM BANK (40+ questions) ---
  ...IELTS_TOEFL_QUESTION_BANK,
];
