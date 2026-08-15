export const GRADE_LESSONS_DATA = {
  g1: {
    gradeTitle: "Grade 1 (一年級 - 語言啟蒙與核心結構)",
    cefr: "A1 Starter",
    summary: "精確掌握主詞-動詞一致性 (Subject-Verb Agreement)、人稱代名詞主格/受格/所有格區分與自然發音 (Phonics) 規則。",
    grammarLessons: [
      {
        title: "核心文法 1: BE 動詞主意一致性 (Subject-Verb Agreement with BE)",
        formula: "I + am | He / She / It / 單數名詞 + is | You / We / They / 複數名詞 + are",
        explanation: "BE 動詞根據主詞的人稱與數目做形態變化。當主詞為第三人稱單數 (Third-Person Singular) 時，必須使用 'is'；主詞為複數或代名詞 They/We/You 時則固定搭配 'are'。",
        examples: [
          { en: "The research assistant is diligent.", zh: "該研究助理非常勤奮。(單數主詞 + is)" },
          { en: "Both the professor and the student are in the lecture hall.", zh: "教授與學生都在對講堂中。(複數主詞 + are)" }
        ]
      },
      {
        title: "核心文法 2: 所有格與代名詞格變化 (Possessive Adjectives & Pronouns)",
        formula: "主格 (Subject) ➔ 所有格形容詞 (Possessive Adj.) + 名詞 ➔ 所有格代名詞 (Possessive Pronoun)",
        explanation: "形容詞性所有格 (my, your, his, her, its, our, their) 後方必須修飾名詞；代名詞性所有格 (mine, yours, his, hers, ours, theirs) 則單獨使用，不可再加名詞。",
        examples: [
          { en: "This is her notebook; yours is on the desk.", zh: "這是她的筆記本；你的在課桌上。(her 修飾 notebook; yours 代表 your notebook)" }
        ]
      }
    ],
    vocabList: [
      { word: "diligent", pos: "adj.", meaning: "勤奮的", example: "Diligent students usually achieve higher academic marks." },
      { word: "assistant", pos: "n.", meaning: "助理 / 助手", example: "The lab assistant prepared the instruments for the experiment." },
      { word: "lecture", pos: "n.", meaning: "講座 / 課堂", example: "The professor delivered an inspiring lecture on physics." },
      { word: "instrument", pos: "n.", meaning: "儀器 / 工具", example: "Optical instruments require precise calibration." }
    ],
    examTip: "【命題陷阱】注意 compound subjects (由 and 連接的雙主詞) 必須視為複數，搭配 are/were。"
  },

  g2: {
    gradeTitle: "Grade 2 (二年級 - 名詞語法與空間介系詞)",
    cefr: "A1 Beginner",
    summary: "名詞規則與不規則複數變化、可數/不可數名詞計量、空間與時間介系詞精準用法。",
    grammarLessons: [
      {
        title: "核心文法 1: 不規則複數名詞與集體名詞 (Irregular Plurals & Collective Nouns)",
        formula: "man ➔ men | woman ➔ women | child ➔ children | foot ➔ feet | tooth ➔ teeth | mouse ➔ mice",
        explanation: "不規則複數名詞不遵循加 -s/-es 的字尾規則，需記憶字根元音轉變。不可數名詞 (Uncountable Nouns) 如 water, information, advice 則無複數型態，需使用量詞 (a piece of advice) 表示。",
        examples: [
          { en: "The scientist offered three valuable pieces of advice.", zh: "該科學家提供了三條寶貴的建議。(piece 加複數 -s)" },
          { en: "Several children were observing the mice in the lab.", zh: "幾位兒童正在觀察實驗室裡的小鼠。" }
        ]
      },
      {
        title: "核心文法 2: 空間與時間介系詞 (Prepositions of Time and Place)",
        formula: "at (精確時間/點) | on (特定日期/街道/平面) | in (月份/年份/封閉空間)",
        explanation: "at 常用於特定時刻 (at 8:00 AM)；on 用於特定日期 (on Monday, on July 4th)；in 用於較長期間 (in 2026, in summer) 或空間內部 (in the library)。",
        examples: [
          { en: "The symposium will commence at 9:00 AM on Monday in Room 301.", zh: "研討會將於週一上午 9 點在 301 室開始。" }
        ]
      }
    ],
    vocabList: [
      { word: "symposium", pos: "n.", meaning: "學術研討會", example: "Scholars gathered at the international symposium." },
      { word: "commence", pos: "v.", meaning: "開始 / 着手", example: "The formal ceremony will commence shortly." },
      { word: "valuable", pos: "adj.", meaning: "寶貴的 / 有價值的", example: "Her insights provided valuable guidance for the research team." }
    ],
    examTip: "【測驗陷阱】advice, information, furniture, homework 為絕對不可數名詞，絕不可加 -s！"
  },

  g3: {
    gradeTitle: "Grade 3 (三年級 - 時態進階與動詞語意分析)",
    cefr: "A1 Element",
    summary: "現在進行式 (Present Continuous) 之狀態動詞限制、情態動詞 (can/could/may/must) 之推測與許可層次。",
    grammarLessons: [
      {
        title: "核心文法 1: 狀態動詞 (Stative Verbs) 不可用於進行式",
        formula: "感官與認知動詞 (know, believe, understand, love, belong, contain) ➔ 僅能使用簡單現在式",
        explanation: "表示感覺、認知、感情或所有權的狀態動詞 (Stative Verbs) 表達持續狀態而非動態動作，因此一般不可使用 -ing 進行式。",
        examples: [
          { en: "Incorrect: I am knowing the answer. ➔ Correct: I know the answer.", zh: "錯誤：我正知道答案。➔ 正確：我知道答案。" },
          { en: "This textbook belongs to the university library.", zh: "這本教科書屬於大學圖書館。" }
        ]
      },
      {
        title: "核心文法 2: 情態動詞推測程度 (Modals of Deductive Probability)",
        formula: "must (100% 肯定推測) ➔ may/might (可能推測) ➔ cannot (100% 否定推測)",
        explanation: "情態動詞除了表達能力或許可外，在學術閱讀中常表示作者對事實推論的把握程度。",
        examples: [
          { en: "The data is inconsistent; there must be an error in calculation.", zh: "數據不一致；計算中必定存在錯誤。" },
          { en: "The hypothesis might be valid under controlled conditions.", zh: "在受控條件下，該假設可能是成立的。" }
        ]
      }
    ],
    vocabList: [
      { word: "hypothesis", pos: "n.", meaning: "假設 / 假說", example: "Researchers formulated a new hypothesis based on empirical evidence." },
      { word: "inconsistent", pos: "adj.", meaning: "不一致的 / 矛盾的", example: "The test results were inconsistent with previous findings." },
      { word: "empirical", pos: "adj.", meaning: "實證的 / 經驗的", example: "Empirical data supports the proposed economic model." }
    ],
    examTip: "【學術閱讀技巧】閱讀測驗看到 must/cannot 表達強烈絕對立場；might/may 則為學術軟化語氣 (Hedge)。"
  },

  g4: {
    gradeTitle: "Grade 4 (四年級 - 過去時態與形容詞語義等級)",
    cefr: "A2 Elementary",
    summary: "不規則過去式三態動詞變化、過去進行式 (Past Continuous) 與形容詞/副詞比較級之倍數表達。",
    grammarLessons: [
      {
        title: "核心文法 1: 過去進行式與簡單過去式之交錯 (Interrupted Past Actions)",
        formula: "主詞 + was/were + V-ing + when + 主詞 + V-ed (過去簡單式)",
        explanation: "當一個長動作在過去持續進行中 (Past Continuous)，被另一個突發的短動作 (Simple Past) 中斷時，兩時態交錯使用。",
        examples: [
          { en: "The researchers were conducting the experiment when the power outage occurred.", zh: "當停電發生時，研究人員正在進行實驗。" }
        ]
      },
      {
        title: "核心文法 2: 倍數比較級表達 (Multiplier Comparisons)",
        formula: "倍數 (twice / three times) + as + 形容詞原級 + as ...",
        explanation: "表達兩者之間的倍數比例關係，倍數詞必須置於 as...as 或比較級之前。",
        examples: [
          { en: "The new processor is three times as fast as the previous model.", zh: "這款新處理器的速度是上一代型號的三倍。" }
        ]
      }
    ],
    vocabList: [
      { word: "conduct", pos: "v.", meaning: "執行 / 進行", example: "The team will conduct a clinical trial next month." },
      { word: "outage", pos: "n.", meaning: "中斷 / 停電", example: "The power outage disrupted manufacturing operations." },
      { word: "processor", pos: "n.", meaning: "處理器", example: "Advanced microchips contain millions of logical processors." }
    ],
    examTip: "【文法 trap】twice 不可寫作 'two times'；比較句型中倍數詞一律放在 as...as 或比較級前面。"
  },

  g5: {
    gradeTitle: "Grade 5 (五年級 - 未來表達與平行結構)",
    cefr: "A2 High-Elem",
    summary: "未來完成式 (Future Perfect) 觀念導引、對等連接詞與對稱平行結構 (Parallel Structure)。",
    grammarLessons: [
      {
        title: "核心文法 1: 平行對稱結構 (Parallelism with Conjunctions)",
        formula: "A and/or/but B (A 與 B 必須具備相同的文法結構與詞性)",
        explanation: "由對等連接詞 (and, or, but, as well as) 連接的元素，詞性與子句結構必須保持平行一致 (Noun with Noun, V-ing with V-ing, Clause with Clause)。",
        examples: [
          { en: "Incorrect: She enjoys reading, swimming, and to dance.", zh: "錯誤：動名詞與不定詞混用。" },
          { en: "Correct: She enjoys reading, swimming, and dancing.", zh: "正確：全數使用動名詞 V-ing 平行對稱。" }
        ]
      },
      {
        title: "核心文法 2: 未來完成式簡介 (Future Perfect Tense)",
        formula: "By + 未來時間點, 主詞 + will have + p.p.",
        explanation: "表達『在未來某個指定時間點之前，某動作將已經完成』。",
        examples: [
          { en: "By the end of this year, the committee will have published the national guidelines.", zh: "到今年底前，委員會將已頒布國家指引。" }
        ]
      }
    ],
    vocabList: [
      { word: "committee", pos: "n.", meaning: "委員會", example: "The ethics committee reviewed the research proposal." },
      { word: "guideline", pos: "n.", meaning: "指引 / 準則", example: "Strict safety guidelines must be observed in the cleanroom." },
      { word: "parallel", pos: "adj.", meaning: "平行的 / 對稱的", example: "The author draws a parallel between economics and ecology." }
    ],
    examTip: "【寫作評分關鍵】IELTS Task 2 與 TOEFL 寫作中，平行結構 (Parallelism) 是考官評定高階句型一致性的重要標準。"
  },

  g6: {
    gradeTitle: "Grade 6 (六年級 - 國小國中銜接語篇分析)",
    cefr: "A2+ Bridge",
    summary: "間接問句 (Embedded Questions)、複合代名詞 (Compound Pronouns) 與語意轉折詞結構。",
    grammarLessons: [
      {
        title: "核心文法 1: 嵌入式間接問句 (Embedded Questions Syntax)",
        formula: "主要子句 + 疑問詞 (who/what/where/how/why) + 主詞 + 動詞",
        explanation: "當問句作為另一大句子的名詞子句受詞時，疑問句的倒裝結構 (助動詞 do/does/did) 必須還原為平述句語序 (主詞在動詞前)。",
        examples: [
          { en: "Direct: Where did he hide the key? ➔ Indirect: I don't know where he hid the key.", zh: "直接問句 ➔ 間接問句 (hid 為過去式，助動詞 did 消除)。" }
        ]
      }
    ],
    vocabList: [
      { word: "investigate", pos: "v.", meaning: "調查 / 研究", example: "Detectives were dispatched to investigate the incident." },
      { word: "incident", pos: "n.", meaning: "事件", example: "The unexpected incident delayed the flight schedule." }
    ],
    examTip: "【會考陷阱】間接問句千萬不可保留助動詞 do/does/did，肯定句語序是唯一正確答案。"
  },

  g7: {
    gradeTitle: "Grade 7 (七年級 - 現在完成式與被動語態)",
    cefr: "B1 Pre-Inter",
    summary: "現在完成式三大用法 (持續/經驗/完成)、被動語態 (Passive Voice) 之時態轉變與介系詞搭配。",
    grammarLessons: [
      {
        title: "核心文法 1: 現在完成式 (Present Perfect) 之持續性與瞬間動詞限制",
        formula: "主詞 + have/has + p.p. (+ for + 時間段 / since + 時間點)",
        explanation: "現在完成式強調過去發生的動作對現在造成的結果或經驗。注意：瞬間動詞 (die, leave, arrive, join) 不得與表示長時間持續的 for 連用，需轉換為狀態形容詞 (be dead, be away)。",
        examples: [
          { en: "Incorrect: He has died for five years. ➔ Correct: He has been dead for five years.", zh: "錯誤：die 為瞬間動作。➔ 正確：使用 be dead 搭配 for five years。" }
        ]
      },
      {
        title: "核心文法 2: 雙重受詞句子之被動語態 (Passive Voice with Ditransitive Verbs)",
        formula: "主詞 + be p.p. + 直接受詞 + by 行為者 | 直接受詞 + be p.p. + to/for + 間接受詞",
        explanation: "授與動詞 (give, send, offer, buy) 擁有兩個受詞 (人與物)，轉為被動語態時可分別由『人』或『物』擔任被動主詞。",
        examples: [
          { en: "Active: Professor Smith offered the candidate a scholarship.", zh: "主動語態。" },
          { en: "Passive 1: The candidate was offered a scholarship by Professor Smith.", zh: "被動語態 1 (以人為主詞)。" },
          { en: "Passive 2: A scholarship was offered to the candidate by Professor Smith.", zh: "被動語態 2 (物為主詞，搭配介系詞 to)。" }
        ]
      }
    ],
    vocabList: [
      { word: "scholarship", pos: "n.", meaning: "獎學金", example: "She received a prestigious full-ride scholarship." },
      { word: "prestigious", pos: "adj.", meaning: "著名的 / 有聲望的", example: "The university is renowned for its prestigious law faculty." }
    ],
    examTip: "【會考/托福常考】buy, make, choose 轉被動時介系詞用 for；give, send, offer, show 用 to。"
  },

  g8: {
    gradeTitle: "Grade 8 (八年級 - 關係代名詞與非限定子句)",
    cefr: "B1 Intermediate",
    summary: "限定與非限定關係子句 (Defining vs Non-defining Relative Clauses)、關係副詞 (where/when/why) 與動名詞/不定詞心態區分。",
    grammarLessons: [
      {
        title: "核心文法 1: 非限定關係子句 (Non-defining Relative Clauses with Commas)",
        formula: "先行詞 (專有名詞/特定人事物) , who / which ..., 主要動詞",
        explanation: "非限定關係子句前後必須加逗號 (,)，提供額外補充資訊。注意：在非限定關係子句中，絕不可使用 that 作為關係代名詞，亦不可省略關係代名詞！",
        examples: [
          { en: "Incorrect: Albert Einstein, that proposed the theory of relativity, won the Nobel Prize.", zh: "錯誤：逗號後方不得使用 that。" },
          { en: "Correct: Albert Einstein, who proposed the theory of relativity, won the Nobel Prize.", zh: "正確：專有名詞後方加逗號，關係代名詞使用 who。" }
        ]
      },
      {
        title: "核心文法 2: 不定詞 (to V) 與動名詞 (V-ing) 之語意差異",
        formula: "remember / forget / regret / stop + to V (未來/未做) vs. V-ing (過去/已做)",
        explanation: "部份動詞後方接 to V 與 V-ing 會產生完全相反的時間順序意義。",
        examples: [
          { en: "He stopped to talk to the teacher. (停下手中動作去跟老師說話)", zh: "不定詞表示目的。" },
          { en: "He stopped talking when the teacher entered. (停止說話的動作)", zh: "動名詞表示停止進行中的動作。" }
        ]
      }
    ],
    vocabList: [
      { word: "relativity", pos: "n.", meaning: "相對論", example: "Einstein's general theory of relativity revolutionized physics." },
      { word: "revolutionize", pos: "v.", meaning: "徹底改革 / 革命性改變", example: "Artificial intelligence promises to revolutionize global logistics." }
    ],
    examTip: "【雅思閱讀常考】非限定關係子句用逗號隔開，作答時若題目詢問關鍵限制條件，非限定子句的內容非主要限定範疇。"
  },

  g9: {
    gradeTitle: "Grade 9 (九年級 - 會考衝刺與複合子句進階)",
    cefr: "B1+ High-Inter",
    summary: "讓步與對比副詞子句 (Although / Despite / In spite of)、條件句 (Conditionals Type 1/2) 與 TOEFL Junior 綜合分析。",
    grammarLessons: [
      {
        title: "核心文法 1: 讓步連接詞與介系詞對比 (Although vs Despite / In spite of)",
        formula: "Although / Even though + 完整子句 (S + V) | Despite / In spite of + 名詞 / V-ing",
        explanation: "Although 是屬屬連接詞，後方接帶有主詞動詞的完整子句；Despite 與 In spite of 是介系詞片語，後方嚴格只能接名詞、名詞片語或動名詞 V-ing。",
        examples: [
          { en: "Although the weather was adverse, the expedition proceeded.", zh: "儘管天氣惡劣，探險隊仍繼續前進。(Although + 完整子句)" },
          { en: "Despite the adverse weather, the expedition proceeded.", zh: "儘管惡劣的天氣，探險隊仍繼續前進。(Despite + 名詞片語)" }
        ]
      }
    ],
    vocabList: [
      { word: "adverse", pos: "adj.", meaning: "不利的 / 惡劣的", example: "The flight was delayed due to adverse weather conditions." },
      { word: "expedition", pos: "n.", meaning: "遠征 / 探險隊", example: "The Arctic expedition uncovered critical ice core data." }
    ],
    examTip: "【會考高頻陷阱】Despite 後方絕不可以加 'of'！(Despite of 屬於常見文法錯誤，In spite 才可以加 of)。"
  },

  g10: {
    gradeTitle: "Grade 10 (十年級 - 假設語氣與分詞構句簡化)",
    cefr: "B2 Pre-Advanced",
    summary: "與過去事實相反假設 (Past Counterfactual)、與現在事實相反假設、分詞構句 (Participle Clauses) 與 IELTS Academic 寫作。",
    grammarLessons: [
      {
        title: "核心文法 1: 假設語氣綜合評析 (Subjunctive Conditionals Matrix)",
        formula: "與現在事實相反: If S + V-ed/were, S + would/could + V | 與過去事實相反: If S + had p.p., S + would/could have p.p.",
        explanation: "假設語氣透過『時態退格 (Tense Backshift)』表達非事實的虛擬情境。與現在相反時動詞退格至過去式 (BE動詞一律用 were)；與過去相反時動詞退格至過去完成式 (had + p.p.)。",
        examples: [
          { en: "If I were the Chief Executive Officer, I would implement sustainable supply chain policies.", zh: "如果我是執行長（現在事實並非如此），我會實施永續供應鏈政策。" },
          { en: "Had the trial been conducted earlier, the flaw would have been identified.", zh: "若試驗早點進行（過去事實並非如此），缺陷就會被發現。(If 省略引發倒裝)" }
        ]
      },
      {
        title: "核心文法 2: 獨立分詞構句與連接詞省略 (Absolute Participle Construction)",
        formula: "主詞1 + V1-ing / p.p. , 主詞2 + 動詞2 (當兩句主詞不同時，保留主詞1)",
        explanation: "分詞構句用以簡化副詞子句。若副詞子句主詞與主要子句主詞相同，省略屬屬連接詞與主詞；若主詞不同，則必須保留獨立主詞 (Absolute Construction)。",
        examples: [
          { en: "Weather permitting, the open-air symposium will take place tomorrow.", zh: "如果天氣允許的話，露天研討會將於明天舉行。(Weather 與 symposium 主詞不同，Weather 保留)" }
        ]
      }
    ],
    vocabList: [
      { word: "counterfactual", pos: "adj.", meaning: "反事實的", example: "History scholars often analyze counterfactual scenarios." },
      { word: "implementation", pos: "n.", meaning: "實行 / 履踐", example: "Successful implementation requires rigorous project planning." }
    ],
    examTip: "【高階文法倒裝】If S + had p.p. 當省略 If 時，had 移至主詞前：Had I known... (IELTS Task 2 衝刺 7.5 分必備句型)。"
  },

  g11: {
    gradeTitle: "Grade 11 (十一年級 - 高階倒裝句與學術語篇銜接)",
    cefr: "B2 Advanced",
    summary: "否定與限制副詞句首倒裝 (Inversion)、Only/Not until 倒裝結構、強調句型 (Cleft Sentences) 與 TOEFL iBT 聽讀實戰。",
    grammarLessons: [
      {
        title: "核心文法 1: 否定與限制副詞句首倒裝 (Negative and Restrictive Inversion)",
        formula: "Seldom / Rarely / Never / Barely / Hardly / Little + 助動詞/BE動詞 + 主詞 + 主要動詞",
        explanation: "當否定副詞或限制性副詞移至句首以達強調效果時，主要子句必須進行部分倒裝 (Partial Inversion)，結構如同一般疑問句。",
        examples: [
          { en: "Barely had the spacecraft launched when ground control detected a signal anomaly.", zh: "太空船剛發射，地面控制中心就偵測到了訊號異常。" },
          { en: "Only after extensive peer review was the groundbreaking paper published.", zh: "只有在經過廣泛的同行審查後，這篇突破性的論文才得以發表。" }
        ]
      },
      {
        title: "核心文法 2: 強調句型 (It is / was ... that ... Cleft Sentence)",
        formula: "It is/was + 被強調部分 (主詞/受詞/副詞片語) + that/who + 剩餘句子",
        explanation: "分裂句 (Cleft Sentence) 用於精確聚焦句子中特定的資訊點。",
        examples: [
          { en: "It was in 1953 that Watson and Crick unraveled the double-helix structure of DNA.", zh: "正是在 1953 年，華生與克里克解開了 DNA 的雙螺旋結構。" }
        ]
      }
    ],
    vocabList: [
      { word: "anomaly", pos: "n.", meaning: "異常 / 反常現象", example: "Astronomers detected an infrared anomaly in the distant galaxy." },
      { word: "unravel", pos: "v.", meaning: "解開 / 闡明", example: "Researchers are working tirelessly to unravel the mystery of dark matter." }
    ],
    examTip: "【TOEFL iBT 閱讀考點】Hardly... when... / No sooner... than... 倒裝句，主句用過去完成式，when/than 子句用過去簡單式。"
  },

  g12: {
    gradeTitle: "Grade 12 (十二年級 - 碩博學術語篇、IELTS 8.0+ & TOEFL 110+)",
    cefr: "C1 Mastery Prep",
    summary: "高階語篇銜接 (Cohesion & Coherence)、讓步結構 (Albeit / Insofar as)、學術同義詞替換矩陣與雙重否決構詞。",
    grammarLessons: [
      {
        title: "核心文法 1: 高階讓步與範圍限定連詞 (Albeit / Insofar as / Notwithstanding)",
        formula: "Albeit + 形容詞/副詞片語 (簡化自 although it is) | Insofar as + 子句 (在…的範圍內)",
        explanation: "Albeit 相當於 although，但後方常直接連接形容詞或副詞片語，免去主詞動詞；Insofar as 用於精確界定論述的邊界範疇。",
        examples: [
          { en: "The reform produced positive outcome, albeit at a considerable economic cost.", zh: "該改革產生了積極的成果，儘管付出了相當大的經濟代價。" },
          { en: "The hypothesis is valid insofar as it applies to linear systems.", zh: "只要適用於線性系統，該假設在該範圍內就是成立的。" }
        ]
      },
      {
        title: "核心文法 2: 雙重否定與名詞化句構 (Nominalization & Litotes)",
        formula: "動詞/形容詞 ➔ 名詞化 (Nominalization) 以建立客觀學術距離感",
        explanation: "高階學術寫作避免使用第一人稱 (I/We) 與過度口語的動詞，轉改用名詞化結構 (e.g. 'We analyzed the data' ➔ 'An analysis of the data was conducted')。",
        examples: [
          { en: "Academic: The rapid acceleration of urbanization precipitated ecological degradation.", zh: "都市化的快速加速引發了生態退化。(全句以名詞化為主軸)" }
        ]
      }
    ],
    vocabList: [
      { word: "notwithstanding", pos: "prep./adv.", meaning: "儘管 / 雖然", example: "Notwithstanding the market volatility, the firm expanded its capital." },
      { word: "precipitate", pos: "v.", meaning: "促成 / 引發", example: "The unexpected policy change precipitated widespread public debate." },
      { word: "nominalization", pos: "n.", meaning: "名詞化結構", example: "Nominalization is a hallmark feature of formal academic discourse." }
    ],
    examTip: "【IELTS Task 2 滿分關鍵】善用名詞化 (Nominalization) 取代個人化動詞句，呈現權威客觀之學者論述氣勢。"
  }
};
