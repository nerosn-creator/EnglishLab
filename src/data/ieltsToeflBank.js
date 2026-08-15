// ============================================================
//  IELTS & TOEFL EXAM QUESTION BANK  (60+ Questions)
//  Covers: Reading, Vocabulary, Grammar, Listening Analysis
//  Exam Types: IELTS Academic, IELTS General, TOEFL iBT
// ============================================================

export const IELTS_TOEFL_QUESTION_BANK = [

  // ─────────────────────────────────────────────────────────
  //  IELTS ACADEMIC READING — Sentence Completion & MCQ
  // ─────────────────────────────────────────────────────────
  {
    id: "ielts_r_01",
    gradeLevel: "g10",
    skill: "IELTS Reading — Vocabulary in Context",
    cefr: "B2",
    examType: "IELTS Academic",
    title: "IELTS Academic Reading: Vocabulary in Context",
    questionTemplate: "The researchers concluded that the dramatic decline in amphibian populations was primarily _____ to the proliferation of the Chytrid fungus, which disrupts the skin's vital role in osmoregulation.",
    optionsTemplate: ["attributed", "contributed", "distributed", "substituted"],
    correctIndex: 0,
    explanation: "'Attributed to' 是固定搭配，意指「歸因於」。Contributed to 意為「促成」但主語應主動。Distributed 意為「分配」，substituted 意為「替換」，均不符合語境。",
    intent: "測試 IELTS 閱讀中常見動詞固定搭配 (Collocations) 的精確辨別。",
    distractorAnalysis: [
      "A. Correct: 'attributed to' = 歸因於，是學術閱讀核心搭配。",
      "B. Incorrect: 'contributed to' 表主動促成，主語不合。",
      "C. Incorrect: 'distributed' 屬分配語意，與脈絡不符。",
      "D. Incorrect: 'substituted' 為替換語意，不適用此句。"
    ],
    academicEtymology: "attribute (v. 歸因) ↔ ascribe / credit to | osmoregulation (n. 滲透調節)"
  },

  {
    id: "ielts_r_02",
    gradeLevel: "g10",
    skill: "IELTS Reading — True / False / Not Given Logic",
    cefr: "B2",
    examType: "IELTS Academic",
    title: "IELTS Academic: True / False / Not Given",
    questionTemplate: "Passage excerpt: 'The Hubble Space Telescope, launched in 1990, has revolutionized our understanding of distant galaxies, though its initial mirror flaw required a subsequent corrective servicing mission.' — Statement to evaluate: 'The Hubble Telescope operated flawlessly from the moment of its launch.'",
    optionsTemplate: ["False — the passage states there was an initial mirror flaw", "True — it has revolutionized astronomy", "Not Given — the passage does not describe its launch quality", "True — a servicing mission confirms it was fully functional"],
    correctIndex: 0,
    explanation: "題目陳述「Hubble 自發射以來運作完美無缺」，但文章明確指出存在初始鏡面缺陷 (initial mirror flaw) 且需後續修復任務，故為 FALSE。",
    intent: "訓練 IELTS 閱讀 True/False/Not Given 辨析：學生必須區分『文章明確反駁』與『文章未提及』。",
    distractorAnalysis: [
      "A. Correct: 文章明確陳述 mirror flaw，與題目陳述矛盾 → FALSE。",
      "B. Incorrect: 混淆天文貢獻 (革命性) 與瑕疵記錄，屬不同面向。",
      "C. Incorrect: 文章確有明確陳述，故非 Not Given。",
      "D. Incorrect: 服務任務的存在恰好印證了初期缺陷，並非完美。"
    ],
    academicEtymology: "servicing (n. 維修/保養) ↔ maintenance / repair | flawlessly (adv. 無瑕疵地)"
  },

  {
    id: "ielts_r_03",
    gradeLevel: "g11",
    skill: "IELTS Reading — Matching Headings",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Reading: Paragraph Heading Match",
    questionTemplate: "Paragraph topic: 'Despite initial skepticism from the scientific community, longitudinal studies spanning three decades have consistently demonstrated a robust correlation between urban green space availability and reduced incidence of cardiovascular disease among metropolitan populations.' — Choose the most suitable heading:",
    optionsTemplate: [
      "Long-term evidence links urban nature to heart health",
      "Scientists remain unconvinced by environmental health theories",
      "The psychological benefits of urban parks",
      "Metropolitan infrastructure and disease prevention funding"
    ],
    correctIndex: 0,
    explanation: "段落核心論點：30年縱向研究 (longitudinal studies) 顯示城市綠地與心血管疾病 (cardiovascular disease) 之間的相關性。標題應同時涵蓋研究強度 (long-term) 與主要因果關係 (nature → heart health)。",
    intent: "訓練 IELTS 段落標題配對：識別段落的中心論點而非細節或反面意見。",
    distractorAnalysis: [
      "A. Correct: 精確映射縱向研究強度與心臟健康因果主題。",
      "B. Incorrect: 段落明確否定懷疑論，此標題反映的是被推翻的觀點。",
      "C. Incorrect: 段落論及的是心血管疾病而非心理效益。",
      "D. Incorrect: 段落未提及資金或基礎設施。"
    ],
    academicEtymology: "longitudinal (adj. 縱向的/長期的) ↔ long-term / sustained | cardiovascular (adj. 心血管的)"
  },

  {
    id: "ielts_r_04",
    gradeLevel: "g10",
    skill: "IELTS Reading — Inference & Implication",
    cefr: "B2",
    examType: "IELTS Academic",
    title: "IELTS Reading: Author Implication",
    questionTemplate: "Author writes: 'While proponents of geoengineering celebrate its theoretical potential to mitigate climate change, critics contend that deliberately manipulating planetary-scale atmospheric systems introduces catastrophic and irreversible risks that render such interventions unconscionable without further research.' What can be inferred about the author's perspective?",
    optionsTemplate: [
      "The author implies that geoengineering requires more rigorous research before implementation",
      "The author fully supports geoengineering as the optimal climate solution",
      "The author believes climate change cannot be mitigated by any means",
      "The author dismisses critics of geoengineering as uninformed"
    ],
    correctIndex: 0,
    explanation: "作者以平衡語氣呈現正反兩面後，聚焦「without further research」暗示在缺乏充分研究前採用地球工程是不道德的 (unconscionable)，隱含需要更多研究的立場。",
    intent: "訓練 IELTS 推斷類題型：辨別作者的潛在立場 (Implied Position) 而非明確論點。",
    distractorAnalysis: [
      "A. Correct: 'without further research' 隱含需要更多研究才能考慮實施。",
      "B. Incorrect: 作者呈現平衡視角，並未完全支持地球工程。",
      "C. Incorrect: 文章肯定地球工程的「理論潛力」，並非否定所有手段。",
      "D. Incorrect: 文章採批判性平衡角度，未貶低任何一方。"
    ],
    academicEtymology: "geoengineering (n. 地球工程) | unconscionable (adj. 違背良知的) ↔ unethical / unscrupulous"
  },

  {
    id: "ielts_r_05",
    gradeLevel: "g11",
    skill: "IELTS Reading — Cohesive Devices",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Reading: Discourse Connective Function",
    questionTemplate: "Sentence: 'The experimental drug demonstrated exceptional efficacy in Phase II trials; _____, its progression to Phase III was contingent upon resolving previously undetected hepatotoxicity concerns.' Which connective fits best?",
    optionsTemplate: ["nevertheless", "consequently", "furthermore", "in contrast"],
    correctIndex: 0,
    explanation: "'Nevertheless' 表示儘管有正面結果 (exceptional efficacy)，仍面臨障礙 (hepatotoxicity concerns)，完美體現轉折讓步關係。'Consequently' 表因果，不符語意。",
    intent: "測試 IELTS 篇章銜接詞 (Cohesive Devices) 在具體語境中的語義功能辨識。",
    distractorAnalysis: [
      "A. Correct: nevertheless = 儘管如此，轉折正面表現與現實阻礙。",
      "B. Incorrect: consequently = 因此，暗示正向結果，但下文帶出障礙，邏輯不符。",
      "C. Incorrect: furthermore = 更進一步，表遞進而非讓步轉折。",
      "D. Incorrect: in contrast = 相比之下，需要前後兩個明確對比對象。"
    ],
    academicEtymology: "hepatotoxicity (n. 肝毒性) | contingent upon (adj. phr. 以…為前提)"
  },

  {
    id: "ielts_r_06",
    gradeLevel: "g11",
    skill: "IELTS Reading — Summary Completion",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Summary Completion: Epigenetics",
    questionTemplate: "Passage: 'Epigenetics demonstrates that environmental exposures — including diet, stress, and toxins — can induce heritable modifications to gene expression without altering the underlying DNA sequence. This challenges the deterministic view of genetics, suggesting that phenotype is not solely dictated by genotype.' Complete: The field of epigenetics indicates that an organism's observable characteristics can be shaped by _____ factors, not merely by its genetic blueprint.",
    optionsTemplate: ["environmental", "evolutionary", "immunological", "biochemical"],
    correctIndex: 0,
    explanation: "文章明確提及 diet, stress, and toxins 等環境因素 (environmental exposures)，且這些因素影響表現型 (phenotype)，故填入 environmental 最準確。",
    intent: "訓練 IELTS 摘要填寫：精確從段落提取並換詞重述 (Paraphrase)。",
    distractorAnalysis: [
      "A. Correct: environmental = 環境的，文章明確以 'environmental exposures' 為核心論據。",
      "B. Incorrect: evolutionary = 演化的，涉及物種長期變異而非個體環境影響。",
      "C. Incorrect: immunological = 免疫學的，文章並未提及免疫系統。",
      "D. Incorrect: biochemical = 生化的，太過寬泛且非文章主要論點。"
    ],
    academicEtymology: "epigenetics (n. 表觀遺傳學) | heritable (adj. 可遺傳的) | phenotype (n. 表現型)"
  },

  // ─────────────────────────────────────────────────────────
  //  IELTS GRAMMAR & SENTENCE STRUCTURE
  // ─────────────────────────────────────────────────────────
  {
    id: "ielts_g_01",
    gradeLevel: "g10",
    skill: "IELTS Grammar — Conditional Structures",
    cefr: "B2",
    examType: "IELTS Academic",
    title: "IELTS Grammar: Mixed Conditionals",
    questionTemplate: "If the initial clinical trials _____ more rigorous screening protocols, the unforeseen adverse effects might not be causing such widespread alarm today.",
    optionsTemplate: [
      "had incorporated",
      "incorporated",
      "would incorporate",
      "have incorporated"
    ],
    correctIndex: 0,
    explanation: "混合條件句：If 子句談過去的反事實 (過去未採用更嚴格篩選) → 用 had + p.p.；主要子句談過去行動對現在的影響 (might not be causing today) → 用 would + V。",
    intent: "評測混合條件句 (Mixed Conditionals) — 過去假設對現在的影響，IELTS 5.5-7.0 核心文法點。",
    distractorAnalysis: [
      "A. Correct: had incorporated = 過去完成式，表達過去反事實假設。",
      "B. Incorrect: incorporated = 過去簡單式，不符合虛擬語氣要求。",
      "C. Incorrect: would incorporate = 助動詞用法錯置，不可用於 if 子句。",
      "D. Incorrect: have incorporated = 現在完成式，時態與過去反事實不符。"
    ],
    academicEtymology: "incorporate (v. 納入/整合) ↔ integrate / include | rigorous (adj. 嚴謹的)"
  },

  {
    id: "ielts_g_02",
    gradeLevel: "g11",
    skill: "IELTS Grammar — Inversion Structures",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Grammar: Negative Inversion (Rarely)",
    questionTemplate: "Rarely _____ such a comprehensive integration of machine learning algorithms into epidemiological surveillance systems, a development that has transformed disease outbreak prediction globally.",
    optionsTemplate: [
      "has the medical community witnessed",
      "the medical community has witnessed",
      "did the medical community witnessed",
      "had witnessed the medical community"
    ],
    correctIndex: 0,
    explanation: "否定副詞 'Rarely' 置於句首，觸發部分倒裝 (Partial Inversion)：助動詞 'has' 必須移至主詞 'the medical community' 前。現在完成式配合 'a development that has transformed' 確認時態一致性。",
    intent: "評測 IELTS/TOEFL 高分語段中否定頻率副詞引發倒裝結構的掌握。",
    distractorAnalysis: [
      "A. Correct: Rarely + has (aux) + subject + p.p. → 正確部分倒裝。",
      "B. Incorrect: 保留正常語序，違反句首否定副詞倒裝規則。",
      "C. Incorrect: did + 過去式 witnessed 形成雙重過去表達，錯誤時態。",
      "D. Incorrect: 主詞賓語語序混亂，文法結構不成立。"
    ],
    academicEtymology: "epidemiological (adj. 流行病學的) | surveillance (n. 監測/監視) ↔ monitoring / tracking"
  },

  {
    id: "ielts_g_03",
    gradeLevel: "g10",
    skill: "IELTS Grammar — Passive Voice in Academic Writing",
    cefr: "B2",
    examType: "IELTS Academic",
    title: "IELTS Grammar: Academic Passive Voice",
    questionTemplate: "The study's methodology _____ rigorous peer scrutiny before the final dataset _____ for publication in a high-impact journal.",
    optionsTemplate: [
      "was subjected to / was approved",
      "subjected to / approved",
      "has been subjected / approves",
      "was subjecting / was being approved"
    ],
    correctIndex: 0,
    explanation: "學術寫作標準：被動語態 'was subjected to' (過去簡單被動) 與 'was approved' 保持時態一致，且均符合學術文章客觀語氣要求。",
    intent: "訓練 IELTS Task 1/2 學術被動語態的正確時態搭配，核心評分指標。",
    distractorAnalysis: [
      "A. Correct: 兩個過去簡單被動式互相呼應，語法完整。",
      "B. Incorrect: 缺少 BE 動詞，語法結構不完整。",
      "C. Incorrect: 主要子句現在簡單式 approves 與敘述過去的語境矛盾。",
      "D. Incorrect: 'was subjecting' 為主動進行式，不符學術被動要求。"
    ],
    academicEtymology: "scrutiny (n. 嚴格審查) ↔ examination / inspection | peer review (同行評審)"
  },

  // ─────────────────────────────────────────────────────────
  //  IELTS VOCABULARY — Academic Word List (AWL) Focus
  // ─────────────────────────────────────────────────────────
  {
    id: "ielts_v_01",
    gradeLevel: "g9",
    skill: "IELTS Vocabulary — AWL Synonyms",
    cefr: "B1",
    examType: "IELTS Academic",
    title: "IELTS Vocabulary: Academic Word Substitution",
    questionTemplate: "Choose the Academic Word List synonym that best replaces the underlined word: The new urban planning policy aims to _____ the growing problem of inadequate affordable housing in metropolitan areas. (Original: solve)",
    optionsTemplate: ["address", "abolish", "neglect", "intensify"],
    correctIndex: 0,
    explanation: "'Address a problem' 是學術英語中表達「著手處理問題」的核心搭配詞，語域適合且語意精確。Abolish = 廢除 (過激)；neglect = 忽略 (反義)；intensify = 加劇 (反義)。",
    intent: "建立 IELTS Task 2 高頻學術動詞替換能力，提升 Lexical Resource 評分維度。",
    distractorAnalysis: [
      "A. Correct: address = 處理/應對，核心 AWL 動詞。",
      "B. Incorrect: abolish = 廢除，語義過強且不適用。",
      "C. Incorrect: neglect = 忽視，語義完全相反。",
      "D. Incorrect: intensify = 加劇，使問題更嚴重，與題意相反。"
    ],
    academicEtymology: "address (v. 處理) in academic context ↔ tackle / handle / mitigate"
  },

  {
    id: "ielts_v_02",
    gradeLevel: "g10",
    skill: "IELTS Vocabulary — Nominalization",
    cefr: "B2",
    examType: "IELTS Academic",
    title: "IELTS Vocabulary: Nominalization for Academic Register",
    questionTemplate: "Rewrite in formal academic register using nominalization: 'Governments must act quickly to reduce carbon emissions.' → The _____ of _____ action by governments is critical to achieving meaningful emissions _____.",
    optionsTemplate: [
      "implementation / prompt / reduction",
      "doing / quick / reducing",
      "act / fast / lowering",
      "necessity / government / emission"
    ],
    correctIndex: 0,
    explanation: "名詞化 (Nominalization) 是 IELTS Band 7+ 寫作的關鍵特徵：act→implementation, quickly→prompt, reduce→reduction，消除主詞 'governments must' 改以名詞結構主導，語域更加正式學術。",
    intent: "培養 IELTS Task 2 名詞化能力：以名詞結構取代口語化的動詞句，提升 GRA 與 LR 評分。",
    distractorAnalysis: [
      "A. Correct: 完整的名詞化替換，保留語義且語域正式。",
      "B. Incorrect: doing/reducing 仍為動名詞，口語化程度高。",
      "C. Incorrect: act/fast 屬動詞/副詞，未達名詞化要求。",
      "D. Incorrect: 搭配語意不完整，necessity 後連接結構不正確。"
    ],
    academicEtymology: "nominalization (n. 名詞化) — converting verbs/adjectives into nouns for academic register"
  },

  {
    id: "ielts_v_03",
    gradeLevel: "g9",
    skill: "IELTS Vocabulary — Hedging Language",
    cefr: "B1",
    examType: "IELTS Academic",
    title: "IELTS Vocabulary: Academic Hedging (軟化語氣)",
    questionTemplate: "Which sentence demonstrates the most appropriate academic hedging for an IELTS Task 2 essay?",
    optionsTemplate: [
      "The evidence suggests that increased screen time may contribute to reduced attention spans in adolescents.",
      "Screen time definitely destroys children's brains and must be banned immediately.",
      "Some people think screens are bad but it's complicated and hard to say.",
      "Scientists have proven that screens cause ADHD in all young people."
    ],
    correctIndex: 0,
    explanation: "'Suggests' 和 'may contribute' 是典型的學術軟化語氣 (Hedging) 用法，體現了學術謹慎性 (epistemic caution)，避免過度武斷，是 Band 7+ 學術語氣的核心特徵。",
    intent: "辨識 IELTS Task 2 中學術軟化語言 (Hedging Language) 的正確使用，IELTS 7.0 核心寫作素養。",
    distractorAnalysis: [
      "A. Correct: suggests + may 是標準學術軟化表達，保持謹慎客觀。",
      "B. Incorrect: definitely / must be banned 過於武斷，不符學術語域。",
      "C. Incorrect: 口語化且邏輯鬆散，缺乏學術結構。",
      "D. Incorrect: 'all young people' 絕對化陳述，學術不嚴謹，且過度推論。"
    ],
    academicEtymology: "hedging (n. 學術軟化語氣) — suggest / indicate / appear to / may / might / tend to"
  },

  {
    id: "ielts_v_04",
    gradeLevel: "g11",
    skill: "IELTS Vocabulary — Connotation Precision",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Vocabulary: Negative vs Neutral Connotation",
    questionTemplate: "Choose the word with the most neutral academic connotation for describing the government's new economic policy: 'The government's new policy has _____ the distribution of wealth across demographic strata.'",
    optionsTemplate: ["reconfigured", "distorted", "hijacked", "manipulated"],
    correctIndex: 0,
    explanation: "'Reconfigured' 表中性的重新配置，不含價值判斷；'distorted' 含負面扭曲含義；'hijacked' 與 'manipulated' 均具強烈負面政治化色彩，不適合客觀學術描述。",
    intent: "精確辨識 IELTS 學術詞彙的語義色彩 (Connotation)，是 C1 語言精準度的核心評量點。",
    distractorAnalysis: [
      "A. Correct: reconfigured = 重新配置，學術中性語態。",
      "B. Incorrect: distorted = 扭曲，含負面判斷。",
      "C. Incorrect: hijacked = 劫持，帶有強烈政治性負面色彩。",
      "D. Incorrect: manipulated = 操控，含不道德的負面隱含。"
    ],
    academicEtymology: "reconfigure (v. 重新配置) ↔ restructure / redistribute | demographic (adj. 人口統計學的)"
  },

  // ─────────────────────────────────────────────────────────
  //  TOEFL iBT READING — Academic Passage Analysis
  // ─────────────────────────────────────────────────────────
  {
    id: "toefl_r_01",
    gradeLevel: "g10",
    skill: "TOEFL Reading — Factual Information",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL iBT Reading: Factual Information",
    questionTemplate: "Passage: 'The Cambrian Explosion, occurring approximately 541 million years ago, represents a geologically rapid diversification of most major animal phyla. Fossil evidence from the Burgess Shale in Canada and the Chengjiang biota in China documents this pivotal event, revealing organisms with complex body plans, including bilateral symmetry and rudimentary nervous systems.' — According to the passage, what is the significance of the Burgess Shale?",
    optionsTemplate: [
      "It provides fossil evidence documenting the Cambrian Explosion",
      "It is the oldest known fossil site on Earth",
      "It contains only vertebrate fossil specimens",
      "It contradicts the geological timeframe of the Cambrian period"
    ],
    correctIndex: 0,
    explanation: "文章明確指出 Burgess Shale 與 Chengjiang biota 是提供寒武紀大爆發 (Cambrian Explosion) 化石紀錄的遺址。答案須忠實反映文章的直接陳述，不可過度推論。",
    intent: "訓練 TOEFL Factual Information 題型：直接從文章找出明確陳述，不憑常識作答。",
    distractorAnalysis: [
      "A. Correct: 文章直接陳述兩地點作為化石紀錄來源。",
      "B. Incorrect: 文章未宣稱其為地球上最古老的化石遺址。",
      "C. Incorrect: 文章提及雙側對稱生物，非僅脊椎動物。",
      "D. Incorrect: 化石記錄支持而非反駁寒武紀地質框架。"
    ],
    academicEtymology: "phyla (n. pl. 門，生物分類) | bilateral symmetry (雙側對稱) | rudimentary (adj. 初步的/基礎的)"
  },

  {
    id: "toefl_r_02",
    gradeLevel: "g10",
    skill: "TOEFL Reading — Negative Factual Information",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL iBT Reading: EXCEPT Question",
    questionTemplate: "Passage: 'Mycorrhizal networks facilitate nutrient exchange between trees and fungi in a mutually beneficial symbiosis. Through these underground fungal filaments, trees share photosynthetically derived carbon with fungi, while receiving phosphorus, nitrogen, and water in return. Recent research suggests older trees, termed 'mother trees', preferentially channel resources to younger seedlings of the same species.' — All of the following are mentioned EXCEPT:",
    optionsTemplate: [
      "Mycorrhizal networks can extend across intercontinental distances",
      "Fungi receive carbon from trees in exchange for minerals",
      "Older trees preferentially support younger trees of the same species",
      "Phosphorus and nitrogen are transferred through fungal filaments"
    ],
    correctIndex: 0,
    explanation: "文章未提及菌根網絡可延伸至洲際距離 (intercontinental distances)。其餘三選項 (碳/礦物交換、母樹偏好相同物種、磷氮轉移) 均在文章中有明確敘述。EXCEPT 題要求找出文中未提及的選項。",
    intent: "訓練 TOEFL Negative Factual Information 題型 (EXCEPT)：須全面核實所有選項是否有文章依據。",
    distractorAnalysis: [
      "A. Correct (i.e. NOT mentioned): 洲際距離一詞完全未出現。",
      "B. Mentioned: 文章明確描述碳與磷氮的交換關係。",
      "C. Mentioned: 文章描述母樹偏好同種幼苗。",
      "D. Mentioned: 磷、氮通過菌絲傳遞已在文章中陳述。"
    ],
    academicEtymology: "mycorrhizal (adj. 菌根的) | symbiosis (n. 共生) ↔ mutualism | photosynthetically (adv. 光合地)"
  },

  {
    id: "toefl_r_03",
    gradeLevel: "g11",
    skill: "TOEFL Reading — Inference",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL iBT Reading: Inference Question",
    questionTemplate: "Passage: 'The monetization of personal data by technology corporations has generated substantial revenues, yet simultaneously eroded user privacy and autonomy. Regulatory frameworks across jurisdictions remain fragmented and inadequate, often lagging years behind technological advancements. Without unified global governance, the asymmetry between corporate power and individual rights will likely deepen.' — What can be inferred about the author's view on current data regulation?",
    optionsTemplate: [
      "Existing regulatory frameworks are insufficient to protect individuals from corporate data exploitation",
      "Technology companies are acting in full compliance with all international data protection laws",
      "Individual users have sufficient tools to protect their own data privacy",
      "Global governance of data is unnecessary due to effective national regulations"
    ],
    correctIndex: 0,
    explanation: "作者以 'fragmented', 'inadequate', 'lagging behind', 和 'asymmetry between corporate power and individual rights' 等詞彙隱含現行監管框架不足的立場，為典型 TOEFL 推論題。",
    intent: "訓練 TOEFL Inference 題型：從作者的用詞選擇和語氣推斷隱含立場，不限於表面文意。",
    distractorAnalysis: [
      "A. Correct: fragmented / inadequate / lagging 均指向監管不足的結論。",
      "B. Incorrect: 文章明確批評監管滯後，暗示企業行為未被充分約束。",
      "C. Incorrect: 文章強調個人權利被侵蝕，暗示個人工具不足。",
      "D. Incorrect: 文章明確呼籲 unified global governance，直接反駁此選項。"
    ],
    academicEtymology: "asymmetry (n. 不對稱性) ↔ imbalance | jurisdiction (n. 管轄範圍) | fragmented (adj. 碎片化的)"
  },

  {
    id: "toefl_r_04",
    gradeLevel: "g11",
    skill: "TOEFL Reading — Sentence Simplification",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL iBT Reading: Sentence Simplification",
    questionTemplate: "Simplify without losing essential meaning: 'Notwithstanding the considerable methodological advancements that have characterized recent decades of cognitive neuroscience research, the precise neurobiological mechanisms underlying consciousness remain profoundly elusive and resistant to empirical elucidation.'",
    optionsTemplate: [
      "Despite major recent progress in brain science, the biological basis of consciousness is still not well understood.",
      "Cognitive neuroscience has completely failed to advance our understanding of human consciousness.",
      "Scientists have recently discovered the exact neurological mechanisms of consciousness.",
      "Consciousness research is no longer considered a valid scientific field."
    ],
    correctIndex: 0,
    explanation: "原句核心：讓步 (Notwithstanding) → 儘管有方法進步 (methodological advancements)；轉折核心 → 意識的神經生物學機制仍然難以捉摸 (elusive)。簡化後必須保留讓步-轉折結構。",
    intent: "TOEFL Sentence Simplification 題型：辨識主要子句含義並以簡單語言重述，保留核心資訊。",
    distractorAnalysis: [
      "A. Correct: 保留讓步轉折結構 (despite progress → still not understood)。",
      "B. Incorrect: 原文肯定有方法進步，'completely failed' 歪曲原意。",
      "C. Incorrect: 與原文完全相反，原文強調仍然 elusive。",
      "D. Incorrect: 文章未質疑意識研究的合法性。"
    ],
    academicEtymology: "elusive (adj. 難以捉摸的) ↔ elusive / intangible | empirical elucidation (實證闡釋)"
  },

  {
    id: "toefl_r_05",
    gradeLevel: "g10",
    skill: "TOEFL Reading — Vocabulary in Context",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL iBT Reading: Vocabulary Meaning in Context",
    questionTemplate: "Passage: 'The advent of CRISPR-Cas9 gene editing technology has engendered both unprecedented therapeutic possibilities and profound ethical quandaries. While proponents envision curing hereditary disorders, critics warn against a precipitous rush toward germline modifications that could have multigenerational consequences.' — The word 'precipitous' most closely means:",
    optionsTemplate: ["recklessly hasty", "carefully deliberate", "scientifically rigorous", "economically profitable"],
    correctIndex: 0,
    explanation: "'Precipitous' 在此語境中意指「魯莽急促的、倉促的」，與 'rush' 連用強調在沒有充分考量的情況下急速前進，對應學術批評者的警告語氣。",
    intent: "TOEFL Vocabulary in Context 題型：不依賴字面意義，而是透過語境推斷詞義。",
    distractorAnalysis: [
      "A. Correct: precipitous = 倉促魯莽的，搭配 'rush' 體現批評者的警告語氣。",
      "B. Incorrect: deliberately = 刻意謹慎，語義完全相反。",
      "C. Incorrect: rigorous = 嚴謹的，與批評語境衝突。",
      "D. Incorrect: profitable = 有利可圖，與安全/倫理語境無關。"
    ],
    academicEtymology: "precipitous (adj. 倉促的) ↔ hasty / impetuous | germline (n. 種系/生殖系) | quandary (n. 困境)"
  },

  {
    id: "toefl_r_06",
    gradeLevel: "g12",
    skill: "TOEFL Reading — Rhetorical Purpose",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL iBT Reading: Rhetorical Purpose",
    questionTemplate: "Author writes in paragraph 3: 'To illustrate the devastating ecological consequences of microplastic accumulation, consider the documented decline in seabird reproductive success in remote Pacific archipelagos, where plastic ingestion rates among adult specimens now exceed 90%.' Why does the author include this example?",
    optionsTemplate: [
      "To provide a concrete empirical example that supports the broader argument about microplastic ecological damage",
      "To suggest that seabirds are the only species affected by microplastic pollution",
      "To introduce a counter-argument against the dangers of microplastics",
      "To demonstrate that remote ecosystems are immune from human environmental impact"
    ],
    correctIndex: 0,
    explanation: "作者使用具體的太平洋海鳥生殖率下降例子，其功能是 'To illustrate'（在句首已明確說明）作為支持主論點 (microplastic ecological consequences) 的實證案例。這是 TOEFL 修辭目的題的核心技巧。",
    intent: "訓練 TOEFL Rhetorical Purpose 題型：辨識例子、引用或數據在文章論證結構中的功能角色。",
    distractorAnalysis: [
      "A. Correct: 'To illustrate' 明確說明此例子的支持論點功能。",
      "B. Incorrect: 作者未宣稱海鳥是唯一受影響物種。",
      "C. Incorrect: 例子支持而非反駁微塑料的危害。",
      "D. Incorrect: 文章描述遠洋生態系統受影響，恰好反駁此選項。"
    ],
    academicEtymology: "archipelago (n. 群島) | reproductive (adj. 生殖的) | ingestion (n. 攝入/吞嚥)"
  },

  // ─────────────────────────────────────────────────────────
  //  TOEFL iBT GRAMMAR & STRUCTURE
  // ─────────────────────────────────────────────────────────
  {
    id: "toefl_g_01",
    gradeLevel: "g9",
    skill: "TOEFL Grammar — Gerund vs Infinitive",
    cefr: "B1",
    examType: "TOEFL iBT",
    title: "TOEFL Grammar: Gerund vs Infinitive (Meaning Change)",
    questionTemplate: "The regulatory committee stopped _____ new pharmaceutical approvals after discovering critical safety violations in the testing data.",
    optionsTemplate: [
      "processing",
      "to process",
      "having processed",
      "process"
    ],
    correctIndex: 0,
    explanation: "'Stop + V-ing' 表示停止當前正在進行的動作 (= 停止審批工作)。'Stop + to V' 表示停下來去做另一件事 (= 停下來去審批)，語義完全不同。語境要求委員會停止審批行為。",
    intent: "評測 TOEFL 核心語法陷阱：stop/remember/forget 後接動名詞與不定詞的語義區別。",
    distractorAnalysis: [
      "A. Correct: stop processing = 停止正在進行的審批動作。",
      "B. Incorrect: stop to process = 停下來 (去做別的) 再審批，語義相反。",
      "C. Incorrect: having processed 為完成式分詞，語法結構不符。",
      "D. Incorrect: 原形動詞不可接於 stop 後作為受詞。"
    ],
    academicEtymology: "pharmaceutical (adj. 製藥的) ↔ medicinal | regulatory (adj. 監管的)"
  },

  {
    id: "toefl_g_02",
    gradeLevel: "g10",
    skill: "TOEFL Grammar — Subjunctive Mood",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL Grammar: Subjunctive after Verbs of Recommendation",
    questionTemplate: "The ethics board recommended that the principal investigator _____ all consent forms prior to commencing the longitudinal study.",
    optionsTemplate: [
      "review",
      "reviews",
      "reviewed",
      "has reviewed"
    ],
    correctIndex: 0,
    explanation: "表達建議/要求/主張的動詞 (recommend, suggest, insist, demand, require) 後方的 that 子句必須使用動詞原形 (Base Form Subjunctive)，不論主詞人稱與數目。",
    intent: "測試 TOEFL 高頻文法點：動詞原形虛擬語氣 (Base Form Subjunctive) 的使用規則。",
    distractorAnalysis: [
      "A. Correct: 動詞原形 review，虛擬語氣正確格式。",
      "B. Incorrect: reviews 第三人稱單數，不可用於建議型虛擬子句。",
      "C. Incorrect: reviewed 過去式，時態置換造成語意混淆。",
      "D. Incorrect: has reviewed 現在完成式，超出建議虛擬語氣要求範疇。"
    ],
    academicEtymology: "longitudinal (adj. 縱向的) | consent (n. 同意書) ↔ assent / authorization"
  },

  {
    id: "toefl_g_03",
    gradeLevel: "g11",
    skill: "TOEFL Grammar — Participle Clauses",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL Grammar: Reduced Adverbial Clauses",
    questionTemplate: "_____ by mounting evidence of systemic bias in facial recognition algorithms, several municipalities have enacted temporary prohibitions on law enforcement use of the technology.",
    optionsTemplate: [
      "Prompted",
      "Prompting",
      "Having been prompted",
      "To be prompted"
    ],
    correctIndex: 0,
    explanation: "'Prompted by...' 是被動分詞構句，主詞 (municipalities) 是被證據所觸動的，因此使用被動分詞 (Past Participle)。'Prompting' 為主動，表示主詞主動去觸動某事，語義顛倒。",
    intent: "評測 TOEFL 分詞構句中主動/被動的精確辨別 — 高級語法C1核心考點。",
    distractorAnalysis: [
      "A. Correct: Prompted (p.p.) = 被…所促使，城市作為被動承受對象。",
      "B. Incorrect: Prompting = 主動，城市反而成為促使其他事物的主體，語義逆轉。",
      "C. Incorrect: Having been prompted 過於冗長，且強調動作先於主句不必要。",
      "D. Incorrect: To be prompted 為不定詞被動，不用於此句首結構。"
    ],
    academicEtymology: "algorithm (n. 演算法) | municipality (n. 市政府/市政機構) | prohibition (n. 禁令)"
  },

  {
    id: "toefl_g_04",
    gradeLevel: "g10",
    skill: "TOEFL Grammar — Noun Clauses",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL Grammar: Noun Clause Word Order",
    questionTemplate: "The researchers were unable to determine _____ the unexpected increase in cortisol levels was a direct consequence of the experimental intervention or a pre-existing physiological condition.",
    optionsTemplate: [
      "whether",
      "that",
      "what",
      "if whether"
    ],
    correctIndex: 0,
    explanation: "'Whether ... or ...' 是表示「是否…還是」二擇一的名詞子句引導詞，完美適配 'whether A or B' 的二擇語境。'If' 雖也可引導名詞子句，但不可連接 'or' 子句。",
    intent: "辨析 TOEFL 名詞子句引導詞 whether 與 if 的精確使用情境差異。",
    distractorAnalysis: [
      "A. Correct: whether...or 二擇結構，名詞子句標準引導詞。",
      "B. Incorrect: that 引導名詞子句但不表達二擇，且後方的 or 結構不符。",
      "C. Incorrect: what 引導名詞子句時後方需要不完整句，但此句為完整句。",
      "D. Incorrect: 'if whether' 是重複冗贅，文法不成立。"
    ],
    academicEtymology: "cortisol (n. 皮質醇) | physiological (adj. 生理的) ↔ biological / bodily"
  },

  // ─────────────────────────────────────────────────────────
  //  TOEFL iBT VOCABULARY — Academic & Scientific Lexis
  // ─────────────────────────────────────────────────────────
  {
    id: "toefl_v_01",
    gradeLevel: "g9",
    skill: "TOEFL Vocabulary — Scientific Terminology",
    cefr: "B1",
    examType: "TOEFL iBT",
    title: "TOEFL Vocabulary: Scientific Precision",
    questionTemplate: "In the context of evolutionary biology, the term 'vestigial' refers to:",
    optionsTemplate: [
      "A structure that has lost most of its ancestral function through evolution",
      "A newly evolved organ that provides significant adaptive advantage",
      "A genetic mutation that causes immediate reproductive failure",
      "A species that has recently diverged from a common ancestor"
    ],
    correctIndex: 0,
    explanation: "'Vestigial' (痕跡的/退化的) 指在演化過程中已失去大部分或全部原始功能的解剖結構，如人類的尾骨 (coccyx) 或鯨魚的後肢骨骼殘跡。",
    intent: "建立 TOEFL 生物學術詞彙庫：vestigial 是 TOEFL 自然科學閱讀段落高頻詞。",
    distractorAnalysis: [
      "A. Correct: vestigial = 痕跡的，指失去功能的演化殘餘結構。",
      "B. Incorrect: 描述的是新演化的適應性結構，與 vestigial 相反。",
      "C. Incorrect: 描述基因突變，與解剖結構類別不同。",
      "D. Incorrect: 描述物種分歧 (speciation)，與 vestigial 概念不相關。"
    ],
    academicEtymology: "vestigial (adj. 痕跡的) ← vestige (n. 殘跡) | coccyx (n. 尾骨)"
  },

  {
    id: "toefl_v_02",
    gradeLevel: "g10",
    skill: "TOEFL Vocabulary — Economics & Social Science",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL Vocabulary: Economics Terminology",
    questionTemplate: "The phenomenon where the production cost per unit decreases as output volume increases is termed:",
    optionsTemplate: [
      "economies of scale",
      "diminishing marginal returns",
      "stagflation",
      "comparative advantage"
    ],
    correctIndex: 0,
    explanation: "'Economies of scale' (規模經濟) 指隨著生產規模擴大，每單位成本下降的經濟現象，是 TOEFL 社會科學閱讀的核心術語。",
    intent: "建立 TOEFL 社會科學詞彙庫：經濟學術語理解是 TOEFL 閱讀的重要能力。",
    distractorAnalysis: [
      "A. Correct: economies of scale = 規模經濟，完全符合題目描述。",
      "B. Incorrect: diminishing marginal returns = 邊際效益遞減，指額外投入帶來的收益下降。",
      "C. Incorrect: stagflation = 停滯性通膨，指高通膨與低成長並存。",
      "D. Incorrect: comparative advantage = 比較優勢，指相對生產效率優勢。"
    ],
    academicEtymology: "economies of scale (n. phr. 規模經濟) | marginal (adj. 邊際的/附加的)"
  },

  {
    id: "toefl_v_03",
    gradeLevel: "g11",
    skill: "TOEFL Vocabulary — Psychology & Cognition",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL Vocabulary: Cognitive Psychology Terms",
    questionTemplate: "The tendency for individuals to favor information that confirms their pre-existing beliefs while discounting contradictory evidence is known as:",
    optionsTemplate: [
      "confirmation bias",
      "cognitive dissonance",
      "the availability heuristic",
      "sunk cost fallacy"
    ],
    correctIndex: 0,
    explanation: "'Confirmation bias' (確認偏誤) 是傾向尋找、偏好並記憶符合自身已有信念的信息，同時忽視或貶低相反證據的認知傾向。TOEFL 心理學閱讀高頻術語。",
    intent: "建立 TOEFL 認知心理學詞彙庫，辨別易混淆的認知偏誤術語。",
    distractorAnalysis: [
      "A. Correct: confirmation bias = 確認偏誤，完全符合題目描述。",
      "B. Incorrect: cognitive dissonance = 認知失調，指持有相互矛盾信念時的心理不適。",
      "C. Incorrect: availability heuristic = 可得性捷思，指以容易回憶的例子評估機率。",
      "D. Incorrect: sunk cost fallacy = 沉沒成本謬誤，指因過去投入而繼續不理性行為。"
    ],
    academicEtymology: "confirmation bias (確認偏誤) | heuristic (n. 捷思/啟發法) | cognitive dissonance (認知失調)"
  },

  {
    id: "toefl_v_04",
    gradeLevel: "g10",
    skill: "TOEFL Vocabulary — Environmental Science",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL Vocabulary: Environmental Terminology",
    questionTemplate: "An ecological community that has reached a stable, self-sustaining state after a period of succession is called a:",
    optionsTemplate: [
      "climax community",
      "pioneer community",
      "keystone species",
      "biotic reservoir"
    ],
    correctIndex: 0,
    explanation: "'Climax community' (頂極群落) 是生態演替過程的最終穩定狀態，群落組成相對穩定並能自我維持，直至受到重大干擾。這是 TOEFL 生態學段落的核心術語。",
    intent: "建立 TOEFL 環境生態學詞彙庫：ecological succession 相關術語是考試高頻考點。",
    distractorAnalysis: [
      "A. Correct: climax community = 頂極群落，演替最終穩定狀態。",
      "B. Incorrect: pioneer community = 先驅群落，是演替過程的起始階段。",
      "C. Incorrect: keystone species = 關鍵物種，指對生態系統有不成比例影響的物種。",
      "D. Incorrect: biotic reservoir = 生物儲存庫，病原體術語，與生態演替無關。"
    ],
    academicEtymology: "climax community (頂極群落) | succession (n. 演替/接續) | pioneer (adj. 先驅的)"
  },

  // ─────────────────────────────────────────────────────────
  //  IELTS WRITING TASK 2 — Argument Analysis
  // ─────────────────────────────────────────────────────────
  {
    id: "ielts_w_01",
    gradeLevel: "g11",
    skill: "IELTS Writing Task 2 — Argument Structure",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Task 2: Identifying a Strong Thesis Statement",
    questionTemplate: "Task 2 topic: 'Governments should impose heavy taxes on junk food to combat the growing obesity epidemic.' Which thesis statement would score highest on Task Response?",
    optionsTemplate: [
      "While punitive taxation on junk food may deter certain consumption patterns, a more holistic approach combining subsidized healthy food access and public health education is likely to prove more equitable and effective.",
      "Junk food is bad and the government should tax it because obesity is a problem.",
      "Some people agree with taxing junk food, while others disagree, and there are arguments on both sides.",
      "The government controls everything we eat and this is not fair or democratic."
    ],
    correctIndex: 0,
    explanation: "高分論點陳述需：1) 明確表達立場 (partially disagree)；2) 提出具體反建議 (holistic approach)；3) 使用高階詞彙 (punitive, equitable)；4) 語氣客觀平衡。選項A完整達到以上標準。",
    intent: "訓練 IELTS Task 2 Task Response 核心評分標準：論點清晰度、立場一致性與詞彙精確度。",
    distractorAnalysis: [
      "A. Correct: 清晰立場 + 替代方案 + 高階詞彙 → Band 7-8 水準。",
      "B. Incorrect: 語言過度簡化，缺乏學術詞彙與論點深度。",
      "C. Incorrect: 未明確表達立場，'both sides' 型論點在 Task 2 中被視為規避立場。",
      "D. Incorrect: 情緒化表達，缺乏學術客觀性，不符合正式論述要求。"
    ],
    academicEtymology: "punitive (adj. 懲罰性的) ↔ penal | equitable (adj. 公平的) ↔ fair / impartial"
  },

  {
    id: "ielts_w_02",
    gradeLevel: "g11",
    skill: "IELTS Writing — Cohesion & Coherence",
    cefr: "C1",
    examType: "IELTS Academic",
    title: "IELTS Task 2: Cohesive Transition Selection",
    questionTemplate: "Complete with the most appropriate discourse marker: 'Proponents argue that remote work increases employee productivity and work-life balance. _____, empirical studies reveal that certain demographics, particularly junior employees lacking dedicated workspaces, experience significant declines in collaborative skill development and career mentorship.'",
    optionsTemplate: [
      "Conversely",
      "Furthermore",
      "As a result",
      "In particular"
    ],
    correctIndex: 0,
    explanation: "'Conversely' 表示與前文相反的觀點，完美銜接 'proponents argue' (正面論點) 與 'empirical studies reveal' (反面證據) 之間的對立關係，是 IELTS 7+ 必備銜接詞。",
    intent: "精確掌握 IELTS 銜接詞的語義功能：對比轉折 (Conversely/However) vs 遞進 (Furthermore) vs 因果 (As a result)。",
    distractorAnalysis: [
      "A. Correct: Conversely = 相反地，完美體現正反論點的對立轉換。",
      "B. Incorrect: Furthermore = 更進一步，表遞進補充，與後文反駁語氣不符。",
      "C. Incorrect: As a result = 因此，暗示因果關係而非對立，邏輯不符。",
      "D. Incorrect: In particular = 尤其，表強調特定例子而非轉折對立。"
    ],
    academicEtymology: "empirical (adj. 實證的/經驗的) | demographic (n. 人口群體) | mentorship (n. 導師輔導)"
  },

  // ─────────────────────────────────────────────────────────
  //  TOEFL iBT LISTENING ANALYSIS (Text-based simulation)
  // ─────────────────────────────────────────────────────────
  {
    id: "toefl_l_01",
    gradeLevel: "g9",
    skill: "TOEFL Listening — Main Purpose",
    cefr: "B1",
    examType: "TOEFL iBT",
    title: "TOEFL Listening: Professor's Main Purpose",
    questionTemplate: "Lecture summary: 'A professor begins by stating that plate tectonics was initially dismissed by the scientific establishment. She then discusses Alfred Wegener's struggles for acceptance, describes the 1950s-60s seabed mapping discoveries that validated his theory, and concludes by noting that this represents a classic example of scientific paradigm shifts.' — What is the professor's primary purpose?",
    optionsTemplate: [
      "To illustrate how scientific consensus can evolve through accumulating evidence, using plate tectonics as a case study",
      "To criticize Wegener for his failure to provide adequate evidence during his lifetime",
      "To argue that seabed mapping is the most important tool in modern geology",
      "To describe the technical details of how tectonic plates move"
    ],
    correctIndex: 0,
    explanation: "教授從拒絕→爭議→接受的歷史敘事，最後總結為「科學典範轉移 (paradigm shift)」的典型案例。整個講座以板塊構造學為具體例子，主要目的是說明科學共識如何演變。",
    intent: "訓練 TOEFL Listening Main Purpose 題型：識別講座的整體論述目標而非局部細節。",
    distractorAnalysis: [
      "A. Correct: 以板塊構造學為案例說明科學共識的演變過程。",
      "B. Incorrect: 教授同情 Wegener 的困境，並非批評他。",
      "C. Incorrect: 海床測繪是驗證手段，非講座主要論點。",
      "D. Incorrect: 板塊移動技術細節未在摘要中提及。"
    ],
    academicEtymology: "paradigm shift (典範轉移) — Kuhn's scientific revolution theory | tectonic (adj. 構造的)"
  },

  {
    id: "toefl_l_02",
    gradeLevel: "g10",
    skill: "TOEFL Listening — Speaker Attitude",
    cefr: "B2",
    examType: "TOEFL iBT",
    title: "TOEFL Listening: Identifying Speaker's Attitude",
    questionTemplate: "Student says: 'I mean, I understand that the peer review process is supposed to ensure quality, but honestly, three months to get feedback on a manuscript seems... excessive? Especially when the research might have urgent public health implications.' What attitude does the student express?",
    optionsTemplate: [
      "Cautious criticism — the student acknowledges the purpose of peer review but questions its timeline efficiency",
      "Full rejection — the student believes peer review should be abolished entirely",
      "Enthusiastic support — the student is highly impressed by the peer review timeline",
      "Indifference — the student has no strong opinion about peer review"
    ],
    correctIndex: 0,
    explanation: "學生使用 'I understand... but...' 的讓步-轉折結構，表達對同行評審的謹慎批評。'excessive?' 的疑問語氣與 'especially when... urgent' 顯示其質疑時間效率而非全盤否定系統。",
    intent: "訓練 TOEFL Speaker Attitude 題型：從語調標記 (但/謹慎) 與用詞推斷說話者的複雜立場。",
    distractorAnalysis: [
      "A. Correct: 讓步 (understand) + 質疑 (excessive?) = 謹慎批評立場。",
      "B. Incorrect: 學生認可同行評審的目的，未要求廢除。",
      "C. Incorrect: 'excessive?' 明確表達不滿，非支持。",
      "D. Incorrect: 學生明確表達關切，非漠不關心。"
    ],
    academicEtymology: "manuscript (n. 稿件) ↔ draft / submission | peer review (n. 同行評審)"
  },

  // ─────────────────────────────────────────────────────────
  //  IELTS GENERAL TRAINING READING
  // ─────────────────────────────────────────────────────────
  {
    id: "ielts_gen_r_01",
    gradeLevel: "g9",
    skill: "IELTS General Reading — Practical Text",
    cefr: "B1",
    examType: "IELTS General",
    title: "IELTS General Reading: Job Advertisement Analysis",
    questionTemplate: "Job ad excerpt: 'Candidates must demonstrate a minimum of three years' relevant experience in financial auditing. Proficiency in IFRS standards is essential. A relevant professional certification (CPA, ACCA, or equivalent) is required. Applications from candidates with additional expertise in forensic accounting will be viewed favorably.' — Which candidate would NOT meet the minimum requirements?",
    optionsTemplate: [
      "A candidate with 2 years of auditing experience and a CPA certification",
      "A candidate with 4 years of auditing experience and ACCA certification",
      "A candidate with 3 years of experience, CPA, and forensic accounting skills",
      "A candidate with 5 years of auditing experience and IFRS proficiency"
    ],
    correctIndex: 0,
    explanation: "廣告明確要求「最少三年相關經驗」。選項A只有2年，不符合最低年資要求，即使擁有CPA認證。其餘選項均滿足三年以上的要求。",
    intent: "訓練 IELTS General Reading 實用文本（求職廣告）的精確信息提取與細節核對能力。",
    distractorAnalysis: [
      "A. Correct (does NOT meet): 2年不符合最低3年要求。",
      "B. Incorrect: 4年 + ACCA = 滿足所有最低要求。",
      "C. Incorrect: 3年 + CPA + 法務會計 = 超過最低要求。",
      "D. Incorrect: 5年 + IFRS = 滿足所有最低要求。"
    ],
    academicEtymology: "IFRS (International Financial Reporting Standards) | forensic accounting (法務/司法會計)"
  },

  {
    id: "ielts_gen_r_02",
    gradeLevel: "g8",
    skill: "IELTS General Reading — Notice & Advertisement",
    cefr: "B1",
    examType: "IELTS General",
    title: "IELTS General: Identifying Conditions in Notices",
    questionTemplate: "Library notice: 'Members may borrow up to 8 items simultaneously. Loan periods are 3 weeks for books, 1 week for DVDs and magazines. Renewals must be requested before the due date and cannot exceed 2 consecutive renewals. Overdue items incur a fine of $0.50 per day per item. Items reserved by another member cannot be renewed.' — A member borrowed a DVD on Jan 1. Today is Jan 10. They want to renew. Is renewal possible?",
    optionsTemplate: [
      "No — the 1-week DVD loan period has already expired (due Jan 8)",
      "Yes — DVDs can be renewed at any time within 3 weeks",
      "Yes — the member can renew because no other member has reserved it",
      "No — DVDs are never eligible for renewal under any circumstances"
    ],
    correctIndex: 0,
    explanation: "DVD 借閱期為1週 (7天)，1月1日借出則到期日為1月8日。到1月10日時已逾期2天，因此無法申請續借 (renewals must be requested before the due date)。",
    intent: "訓練 IELTS General Reading 告示類文本：精確解讀條件規則並應用於具體情境。",
    distractorAnalysis: [
      "A. Correct: DVD 1週期限已過，Jan 8到期，Jan 10已逾期。",
      "B. Incorrect: 混淆DVD(1週)與書籍(3週)的借閱期限。",
      "C. Incorrect: 即便無人預約，逾期後也不能申請續借。",
      "D. Incorrect: DVD在到期前可以申請續借，但本案例已逾期。"
    ],
    academicEtymology: "consecutive (adj. 連續的) ↔ sequential | incur (v. 招致/引發) ↔ accumulate"
  },

  // ─────────────────────────────────────────────────────────
  //  ADVANCED TOEFL / IELTS INTEGRATED SKILLS
  // ─────────────────────────────────────────────────────────
  {
    id: "toefl_int_01",
    gradeLevel: "g12",
    skill: "TOEFL Integrated — Lecture vs Reading Contrast",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL Integrated: Lecture Challenges Reading Claim",
    questionTemplate: "Reading claims: 'The decline of large predators causes trophic cascades that destabilize entire ecosystems.' Lecture professor says: 'While trophic cascades are real, recent field studies in European forests show that the reintroduction of wolves actually increased deer overgrazing in certain microhabitats due to displacement effects, temporarily reducing plant diversity rather than restoring it.' What is the lecture's relationship to the reading?",
    optionsTemplate: [
      "The lecture provides a counterexample that complicates the reading's general claim about predator reintroduction",
      "The lecture fully confirms the reading's argument that predator reintroduction always restores ecosystem balance",
      "The lecture is completely unrelated to the reading's topic",
      "The lecture argues that trophic cascades do not exist in any ecosystem"
    ],
    correctIndex: 0,
    explanation: "講座並未完全否定食物鏈效應的存在，但提供了一個讓讀文章的樂觀簡化論述複雜化的反例 (displacement effect → temporary diversity reduction)，這是 TOEFL Integrated 典型的「讓步-複雜化」關係。",
    intent: "訓練 TOEFL Integrated 聽讀整合題：識別講座與閱讀文章之間的邏輯關係 (支持/複雜化/反駁)。",
    distractorAnalysis: [
      "A. Correct: 講座提供反例使文章的一般性論斷複雜化。",
      "B. Incorrect: 講座提供了相反的微棲地案例，並非全面確認。",
      "C. Incorrect: 講座直接回應文章的核心主題。",
      "D. Incorrect: 教授明確承認食物鏈效應真實存在。"
    ],
    academicEtymology: "trophic cascade (食物鏈效應) | displacement effect (驅逐效應) | microhabitat (微棲地)"
  },

  {
    id: "toefl_int_02",
    gradeLevel: "g12",
    skill: "TOEFL / IELTS — Critical Reasoning",
    cefr: "C1",
    examType: "TOEFL iBT",
    title: "TOEFL Critical Reasoning: Logical Flaw Identification",
    questionTemplate: "Argument: 'Our city installed additional streetlights in District 7 last year, and crime rates in that district subsequently fell by 15%. Therefore, installing more streetlights across the city will reduce crime rates citywide.' Which flaw is present?",
    optionsTemplate: [
      "Post hoc ergo propter hoc — assuming causation from correlation without ruling out confounding factors",
      "Ad hominem — attacking the character of crime statistics reporters",
      "False dichotomy — presenting lighting as the only possible crime prevention method",
      "Circular reasoning — using the conclusion as a premise"
    ],
    correctIndex: 0,
    explanation: "'Post hoc ergo propter hoc' (此後即因此) 謬誤：僅因路燈安裝在犯罪率下降之前，便假設是因果關係，而未考慮其他同期發生的混淆因素 (如警力增加、人口變化)。這是 TOEFL 批判思維題的核心邏輯謬誤。",
    intent: "建立 TOEFL 批判推理能力：辨識常見邏輯謬誤類型，是 TOEFL iBT 最高難度題型。",
    distractorAnalysis: [
      "A. Correct: 後此謬誤，混淆相關性與因果性，且未排除干擾變量。",
      "B. Incorrect: 人身攻擊謬誤與此論述無關。",
      "C. Incorrect: 文章未主張路燈是唯一方法，並非假二分法。",
      "D. Incorrect: 循環論證需要以結論為前提，此處並非如此。"
    ],
    academicEtymology: "post hoc ergo propter hoc (拉丁語: after this, therefore because of this) | confounding factor (混淆因素)"
  },

  {
    id: "ielts_band9_01",
    gradeLevel: "g12",
    skill: "IELTS Band 8-9 Precision — Advanced Grammar",
    cefr: "C2",
    examType: "IELTS Academic",
    title: "IELTS Band 9: Cleft Sentence for Emphatic Focus",
    questionTemplate: "Rewrite with emphatic cleft structure to focus on 'the unprecedented pace of digitization': 'The unprecedented pace of digitization has fundamentally altered labor markets and rendered many traditional vocational skills economically redundant.' — Best cleft sentence version:",
    optionsTemplate: [
      "It is the unprecedented pace of digitization that has fundamentally altered labor markets and rendered many traditional vocational skills economically redundant.",
      "The digitization's pace, which is unprecedented, has altered labor markets that rendered skills redundant.",
      "What has fundamentally altered, unprecedented pace of digitization, is labor markets.",
      "Having an unprecedented pace, digitization altered labor markets and rendered traditional skills redundant."
    ],
    correctIndex: 0,
    explanation: "強調分裂句 (Cleft Sentence) 的標準結構：'It is/was + 被強調成分 + that + 其餘句子'。選項A精確將 'the unprecedented pace of digitization' 置於焦點位置，同時保持原句的完整語義。",
    intent: "掌握 IELTS Band 8-9 必備的分裂句 (Cleft Sentence) 強調結構，提升 Grammatical Range & Accuracy 評分。",
    distractorAnalysis: [
      "A. Correct: 標準 It is... that... 分裂句，聚焦強調目標成分。",
      "B. Incorrect: 非限定關係子句未達到分裂句強調的修辭效果。",
      "C. Incorrect: What 引導的假分裂句結構語義混亂。",
      "D. Incorrect: 分詞構句不具備強調焦點的修辭功能。"
    ],
    academicEtymology: "cleft sentence (分裂強調句) | vocational (adj. 職業的) ↔ occupational | redundant (adj. 被淘汰的)"
  },

  {
    id: "ielts_band9_02",
    gradeLevel: "g12",
    skill: "IELTS Band 8-9 — Advanced Discourse Analysis",
    cefr: "C2",
    examType: "IELTS Academic",
    title: "IELTS Band 9 Reading: Author's Rhetorical Strategy",
    questionTemplate: "Author writes: 'To characterize the opioid crisis as merely a failure of individual willpower is to fundamentally misrepresent the pharmacological properties of these substances and to ignore decades of neuroscientific research demonstrating their capacity to permanently remodel dopaminergic reward circuitry.' — What rhetorical strategy does the author primarily employ?",
    optionsTemplate: [
      "Refutation through scientific authority — dismissing a reductive explanation by invoking pharmacological and neuroscientific evidence",
      "Personal anecdote — using individual stories to challenge opioid policy",
      "Statistical comparison — contrasting opioid addiction rates across demographics",
      "Euphemism — using indirect language to soften the severity of addiction"
    ],
    correctIndex: 0,
    explanation: "作者首先拆解並反駁了簡化性解釋 (individual willpower argument)，然後以科學權威 (pharmacological + neuroscientific evidence) 為武器，進行基於學術共識的反駁論述，這是最高難度IELTS閱讀的修辭策略辨識。",
    intent: "培養 IELTS Band 8-9 修辭策略辨識能力：識別作者如何組織其論述以達到說服效果。",
    distractorAnalysis: [
      "A. Correct: 反駁 (refutation) + 科學權威 (scientific authority) 是本段核心修辭策略。",
      "B. Incorrect: 完全沒有個人軼事，全為學術論述。",
      "C. Incorrect: 無任何統計比較，聚焦於科學機制解釋。",
      "D. Incorrect: 語言明確且直接，並無委婉化 (euphemism) 手法。"
    ],
    academicEtymology: "dopaminergic (adj. 多巴胺能的) | circuitry (n. 迴路) | pharmacological (adj. 藥理學的)"
  }
];
