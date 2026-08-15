export const PRESCHOOL_FLASHCARDS = [
  // ================= FRUITS =================
  {
    id: "fruit_apple",
    category: "fruits",
    letter: "Aa",
    word: "Apple",
    phonetics: "/ˈæp.əl/",
    translation: "蘋果",
    color: "#ef4444",
    emoji: "🍎",
    questionPrompt: "哪個是 Apple (蘋果) 呢？",
    options: [
      { text: "Apple", emoji: "🍎", translation: "蘋果", isCorrect: true },
      { text: "Banana", emoji: "🍌", translation: "香蕉", isCorrect: false },
      { text: "Orange", emoji: "🍊", translation: "橘子", isCorrect: false }
    ]
  },
  {
    id: "fruit_banana",
    category: "fruits",
    letter: "Bb",
    word: "Banana",
    phonetics: "/bəˈnæn.ə/",
    translation: "香蕉",
    color: "#eab308",
    emoji: "🍌",
    questionPrompt: "哪個是 Banana (香蕉) 呢？",
    options: [
      { text: "Grape", emoji: "🍇", translation: "葡萄", isCorrect: false },
      { text: "Apple", emoji: "🍎", translation: "蘋果", isCorrect: false },
      { text: "Banana", emoji: "🍌", translation: "香蕉", isCorrect: true }
    ]
  },
  {
    id: "fruit_orange",
    category: "fruits",
    letter: "Oo",
    word: "Orange",
    phonetics: "/ˈɔːr.ɪndʒ/",
    translation: "橘子",
    color: "#f97316",
    emoji: "🍊",
    questionPrompt: "哪個是 Orange (橘子) 呢？",
    options: [
      { text: "Orange", emoji: "🍊", translation: "橘子", isCorrect: true },
      { text: "Lemon", emoji: "🍋", translation: "檸檬", isCorrect: false },
      { text: "Peach", emoji: "🍑", translation: "水蜜桃", isCorrect: false }
    ]
  },
  {
    id: "fruit_grape",
    category: "fruits",
    letter: "Gg",
    word: "Grape",
    phonetics: "/ɡreɪp/",
    translation: "葡萄",
    color: "#8b5cf6",
    emoji: "🍇",
    questionPrompt: "哪個是 Grape (葡萄) 呢？",
    options: [
      { text: "Cherry", emoji: "🍒", translation: "櫻桃", isCorrect: false },
      { text: "Grape", emoji: "🍇", translation: "葡萄", isCorrect: true },
      { text: "Apple", emoji: "🍎", translation: "蘋果", isCorrect: false }
    ]
  },
  {
    id: "fruit_strawberry",
    category: "fruits",
    letter: "Ss",
    word: "Strawberry",
    phonetics: "/ˈstrɔː.ber.i/",
    translation: "草莓",
    color: "#ef4444",
    emoji: "🍓",
    questionPrompt: "哪個是 Strawberry (草莓) 呢？",
    options: [
      { text: "Strawberry", emoji: "🍓", translation: "草莓", isCorrect: true },
      { text: "Watermelon", emoji: "🍉", translation: "西瓜", isCorrect: false },
      { text: "Pineapple", emoji: "🍍", translation: "鳳梨", isCorrect: false }
    ]
  },
  {
    id: "fruit_watermelon",
    category: "fruits",
    letter: "Ww",
    word: "Watermelon",
    phonetics: "/ˈwɑː.t̬ɚˌmel.ən/",
    translation: "西瓜",
    color: "#22c55e",
    emoji: "🍉",
    questionPrompt: "哪個是 Watermelon (西瓜) 呢？",
    options: [
      { text: "Kiwi", emoji: "🥝", translation: "奇異果", isCorrect: false },
      { text: "Melon", emoji: "🍈", translation: "哈密瓜", isCorrect: false },
      { text: "Watermelon", emoji: "🍉", translation: "西瓜", isCorrect: true }
    ]
  },
  {
    id: "fruit_pineapple",
    category: "fruits",
    letter: "Pp",
    word: "Pineapple",
    phonetics: "/ˈpaɪnˌæp.əl/",
    translation: "鳳梨",
    color: "#eab308",
    emoji: "🍍",
    questionPrompt: "哪個是 Pineapple (鳳梨) 呢？",
    options: [
      { text: "Banana", emoji: "🍌", translation: "香蕉", isCorrect: false },
      { text: "Pineapple", emoji: "🍍", translation: "鳳梨", isCorrect: true },
      { text: "Mango", emoji: "🥭", translation: "芒果", isCorrect: false }
    ]
  },
  {
    id: "fruit_peach",
    category: "fruits",
    letter: "Pp",
    word: "Peach",
    phonetics: "/piːtʃ/",
    translation: "水蜜桃",
    color: "#f472b6",
    emoji: "🍑",
    questionPrompt: "哪個是 Peach (水蜜桃) 呢？",
    options: [
      { text: "Peach", emoji: "🍑", translation: "水蜜桃", isCorrect: true },
      { text: "Apple", emoji: "🍎", translation: "蘋果", isCorrect: false },
      { text: "Strawberry", emoji: "🍓", translation: "草莓", isCorrect: false }
    ]
  },
  {
    id: "fruit_mango",
    category: "fruits",
    letter: "Mm",
    word: "Mango",
    phonetics: "/ˈmæŋ.ɡoʊ/",
    translation: "芒果",
    color: "#f59e0b",
    emoji: "🥭",
    questionPrompt: "哪個是 Mango (芒果) 呢？",
    options: [
      { text: "Lemon", emoji: "🍋", translation: "檸檬", isCorrect: false },
      { text: "Orange", emoji: "🍊", translation: "橘子", isCorrect: false },
      { text: "Mango", emoji: "🥭", translation: "芒果", isCorrect: true }
    ]
  },
  {
    id: "fruit_lemon",
    category: "fruits",
    letter: "Ll",
    word: "Lemon",
    phonetics: "/ˈlem.ən/",
    translation: "檸檬",
    color: "#fef08a",
    emoji: "🍋",
    questionPrompt: "哪個是 Lemon (檸檬) 呢？",
    options: [
      { text: "Lemon", emoji: "🍋", translation: "檸檬", isCorrect: true },
      { text: "Banana", emoji: "🍌", translation: "香蕉", isCorrect: false },
      { text: "Pineapple", emoji: "🍍", translation: "鳳梨", isCorrect: false }
    ]
  },
  {
    id: "fruit_cherry",
    category: "fruits",
    letter: "Cc",
    word: "Cherry",
    phonetics: "/ˈtʃer.i/",
    translation: "櫻桃",
    color: "#b91c1c",
    emoji: "🍒",
    questionPrompt: "哪個是 Cherry (櫻桃) 呢？",
    options: [
      { text: "Strawberry", emoji: "🍓", translation: "草莓", isCorrect: false },
      { text: "Cherry", emoji: "🍒", translation: "櫻桃", isCorrect: true },
      { text: "Grape", emoji: "🍇", translation: "葡萄", isCorrect: false }
    ]
  },
  {
    id: "fruit_kiwi",
    category: "fruits",
    letter: "Kk",
    word: "Kiwi",
    phonetics: "/ˈkiː.wi/",
    translation: "奇異果",
    color: "#65a30d",
    emoji: "🥝",
    questionPrompt: "哪個是 Kiwi (奇異果) 呢？",
    options: [
      { text: "Melon", emoji: "🍈", translation: "哈密瓜", isCorrect: false },
      { text: "Watermelon", emoji: "🍉", translation: "西瓜", isCorrect: false },
      { text: "Kiwi", emoji: "🥝", translation: "奇異果", isCorrect: true }
    ]
  },
  {
    id: "fruit_melon",
    category: "fruits",
    letter: "Mm",
    word: "Melon",
    phonetics: "/ˈmel.ən/",
    translation: "哈密瓜/香瓜",
    color: "#84cc16",
    emoji: "🍈",
    questionPrompt: "哪個是 Melon (哈密瓜) 呢？",
    options: [
      { text: "Melon", emoji: "🍈", translation: "哈密瓜", isCorrect: true },
      { text: "Kiwi", emoji: "🥝", translation: "奇異果", isCorrect: false },
      { text: "Lemon", emoji: "🍋", translation: "檸檬", isCorrect: false }
    ]
  },

  // ================= COLORS =================
  {
    id: "color_red",
    category: "colors",
    letter: "Red",
    word: "Red",
    phonetics: "/red/",
    translation: "紅色",
    color: "#ef4444",
    emoji: "🔴",
    questionPrompt: "哪個是 Red (紅色) 呢？",
    options: [
      { text: "Blue", emoji: "🔵", translation: "藍色", isCorrect: false },
      { text: "Red", emoji: "🔴", translation: "紅色", isCorrect: true },
      { text: "Green", emoji: "🟢", translation: "綠色", isCorrect: false }
    ]
  },
  {
    id: "color_blue",
    category: "colors",
    letter: "Blue",
    word: "Blue",
    phonetics: "/bluː/",
    translation: "藍色",
    color: "#3b82f6",
    emoji: "🔵",
    questionPrompt: "哪個是 Blue (藍色) 呢？",
    options: [
      { text: "Blue", emoji: "🔵", translation: "藍色", isCorrect: true },
      { text: "Yellow", emoji: "🟡", translation: "黃色", isCorrect: false },
      { text: "Purple", emoji: "🟣", translation: "紫色", isCorrect: false }
    ]
  },
  {
    id: "color_green",
    category: "colors",
    letter: "Green",
    word: "Green",
    phonetics: "/ɡriːn/",
    translation: "綠色",
    color: "#22c55e",
    emoji: "🟢",
    questionPrompt: "哪個是 Green (綠色) 呢？",
    options: [
      { text: "Red", emoji: "🔴", translation: "紅色", isCorrect: false },
      { text: "Green", emoji: "🟢", translation: "綠色", isCorrect: true },
      { text: "Orange", emoji: "🟠", translation: "橘色", isCorrect: false }
    ]
  },
  {
    id: "color_yellow",
    category: "colors",
    letter: "Yellow",
    word: "Yellow",
    phonetics: "/ˈjel.oʊ/",
    translation: "黃色",
    color: "#eab308",
    emoji: "🟡",
    questionPrompt: "哪個是 Yellow (黃色) 呢？",
    options: [
      { text: "Yellow", emoji: "🟡", translation: "黃色", isCorrect: true },
      { text: "Black", emoji: "⚫", translation: "黑色", isCorrect: false },
      { text: "White", emoji: "⚪", translation: "白色", isCorrect: false }
    ]
  },
  {
    id: "color_orange",
    category: "colors",
    letter: "Orange",
    word: "Orange",
    phonetics: "/ˈɔːr.ɪndʒ/",
    translation: "橘色",
    color: "#f97316",
    emoji: "🟠",
    questionPrompt: "哪個是 Orange (橘色) 呢？",
    options: [
      { text: "Brown", emoji: "🟤", translation: "咖啡色", isCorrect: false },
      { text: "Pink", emoji: "🩷", translation: "粉紅色", isCorrect: false },
      { text: "Orange", emoji: "🟠", translation: "橘色", isCorrect: true }
    ]
  },
  {
    id: "color_purple",
    category: "colors",
    letter: "Purple",
    word: "Purple",
    phonetics: "/ˈpɝː.pəl/",
    translation: "紫色",
    color: "#a855f7",
    emoji: "🟣",
    questionPrompt: "哪個是 Purple (紫色) 呢？",
    options: [
      { text: "Purple", emoji: "🟣", translation: "紫色", isCorrect: true },
      { text: "Blue", emoji: "🔵", translation: "藍色", isCorrect: false },
      { text: "Green", emoji: "🟢", translation: "綠色", isCorrect: false }
    ]
  },
  {
    id: "color_black",
    category: "colors",
    letter: "Black",
    word: "Black",
    phonetics: "/blæk/",
    translation: "黑色",
    color: "#171717",
    emoji: "⚫",
    questionPrompt: "哪個是 Black (黑色) 呢？",
    options: [
      { text: "White", emoji: "⚪", translation: "白色", isCorrect: false },
      { text: "Black", emoji: "⚫", translation: "黑色", isCorrect: true },
      { text: "Brown", emoji: "🟤", translation: "咖啡色", isCorrect: false }
    ]
  },
  {
    id: "color_white",
    category: "colors",
    letter: "White",
    word: "White",
    phonetics: "/waɪt/",
    translation: "白色",
    color: "#f8fafc",
    emoji: "⚪",
    questionPrompt: "哪個是 White (白色) 呢？",
    options: [
      { text: "White", emoji: "⚪", translation: "白色", isCorrect: true },
      { text: "Black", emoji: "⚫", translation: "黑色", isCorrect: false },
      { text: "Yellow", emoji: "🟡", translation: "黃色", isCorrect: false }
    ]
  },
  {
    id: "color_brown",
    category: "colors",
    letter: "Brown",
    word: "Brown",
    phonetics: "/braʊn/",
    translation: "咖啡色/棕色",
    color: "#78350f",
    emoji: "🟤",
    questionPrompt: "哪個是 Brown (咖啡色) 呢？",
    options: [
      { text: "Orange", emoji: "🟠", translation: "橘色", isCorrect: false },
      { text: "Brown", emoji: "🟤", translation: "咖啡色", isCorrect: true },
      { text: "Red", emoji: "🔴", translation: "紅色", isCorrect: false }
    ]
  },

  // ================= ANIMALS =================
  {
    id: "animal_dog",
    category: "animals",
    letter: "Dd",
    word: "Dog",
    phonetics: "/dɑːɡ/",
    translation: "狗狗",
    color: "#a16207",
    emoji: "🐶",
    questionPrompt: "汪汪！哪個是 Dog (狗狗) 呢？",
    options: [
      { text: "Dog", emoji: "🐶", translation: "狗狗", isCorrect: true },
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: false },
      { text: "Bird", emoji: "🐦", translation: "小鳥", isCorrect: false }
    ]
  },
  {
    id: "animal_cat",
    category: "animals",
    letter: "Cc",
    word: "Cat",
    phonetics: "/kæt/",
    translation: "貓咪",
    color: "#f97316",
    emoji: "🐱",
    questionPrompt: "喵喵！哪個是 Cat (貓咪) 呢？",
    options: [
      { text: "Mouse", emoji: "🐭", translation: "老鼠", isCorrect: false },
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: true },
      { text: "Rabbit", emoji: "🐰", translation: "兔子", isCorrect: false }
    ]
  },
  {
    id: "animal_bird",
    category: "animals",
    letter: "Bb",
    word: "Bird",
    phonetics: "/bɝːd/",
    translation: "小鳥",
    color: "#38bdf8",
    emoji: "🐦",
    questionPrompt: "哪個是 Bird (小鳥) 呢？",
    options: [
      { text: "Bird", emoji: "🐦", translation: "小鳥", isCorrect: true },
      { text: "Fish", emoji: "🐟", translation: "魚", isCorrect: false },
      { text: "Chicken", emoji: "🐔", translation: "公雞", isCorrect: false }
    ]
  },
  {
    id: "animal_fish",
    category: "animals",
    letter: "Ff",
    word: "Fish",
    phonetics: "/fɪʃ/",
    translation: "魚",
    color: "#0ea5e9",
    emoji: "🐟",
    questionPrompt: "咕嚕咕嚕！哪個是 Fish (魚) 呢？",
    options: [
      { text: "Turtle", emoji: "🐢", translation: "烏龜", isCorrect: false },
      { text: "Fish", emoji: "🐟", translation: "魚", isCorrect: true },
      { text: "Frog", emoji: "🐸", translation: "青蛙", isCorrect: false }
    ]
  },
  {
    id: "animal_rabbit",
    category: "animals",
    letter: "Rr",
    word: "Rabbit",
    phonetics: "/ˈræb.ɪt/",
    translation: "兔子",
    color: "#e2e8f0",
    emoji: "🐰",
    questionPrompt: "哪個是 Rabbit (兔子) 呢？",
    options: [
      { text: "Rabbit", emoji: "🐰", translation: "兔子", isCorrect: true },
      { text: "Mouse", emoji: "🐭", translation: "老鼠", isCorrect: false },
      { text: "Bear", emoji: "🐻", translation: "熊", isCorrect: false }
    ]
  },
  {
    id: "animal_elephant",
    category: "animals",
    letter: "Ee",
    word: "Elephant",
    phonetics: "/ˈel.ə.fənt/",
    translation: "大象",
    color: "#94a3b8",
    emoji: "🐘",
    questionPrompt: "長長的鼻子！哪個是 Elephant (大象) 呢？",
    options: [
      { text: "Lion", emoji: "🦁", translation: "獅子", isCorrect: false },
      { text: "Tiger", emoji: "🐯", translation: "老虎", isCorrect: false },
      { text: "Elephant", emoji: "🐘", translation: "大象", isCorrect: true }
    ]
  },
  {
    id: "animal_lion",
    category: "animals",
    letter: "Ll",
    word: "Lion",
    phonetics: "/ˈlaɪ.ən/",
    translation: "獅子",
    color: "#f59e0b",
    emoji: "🦁",
    questionPrompt: "吼～！哪個是 Lion (獅子) 呢？",
    options: [
      { text: "Lion", emoji: "🦁", translation: "獅子", isCorrect: true },
      { text: "Monkey", emoji: "🐵", translation: "猴子", isCorrect: false },
      { text: "Tiger", emoji: "🐯", translation: "老虎", isCorrect: false }
    ]
  },
  {
    id: "animal_tiger",
    category: "animals",
    letter: "Tt",
    word: "Tiger",
    phonetics: "/ˈtaɪ.ɡɚ/",
    translation: "老虎",
    color: "#f97316",
    emoji: "🐯",
    questionPrompt: "哪個是 Tiger (老虎) 呢？",
    options: [
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: false },
      { text: "Tiger", emoji: "🐯", translation: "老虎", isCorrect: true },
      { text: "Bear", emoji: "🐻", translation: "熊", isCorrect: false }
    ]
  },
  {
    id: "animal_monkey",
    category: "animals",
    letter: "Mm",
    word: "Monkey",
    phonetics: "/ˈmʌŋ.ki/",
    translation: "猴子",
    color: "#8b5cf6",
    emoji: "🐵",
    questionPrompt: "吱吱吱！哪個是 Monkey (猴子) 呢？",
    options: [
      { text: "Pig", emoji: "🐷", translation: "豬", isCorrect: false },
      { text: "Monkey", emoji: "🐵", translation: "猴子", isCorrect: true },
      { text: "Cow", emoji: "🐮", translation: "牛", isCorrect: false }
    ]
  },
  {
    id: "animal_bear",
    category: "animals",
    letter: "Bb",
    word: "Bear",
    phonetics: "/ber/",
    translation: "熊",
    color: "#78350f",
    emoji: "🐻",
    questionPrompt: "哪個是 Bear (熊) 呢？",
    options: [
      { text: "Bear", emoji: "🐻", translation: "熊", isCorrect: true },
      { text: "Lion", emoji: "🦁", translation: "獅子", isCorrect: false },
      { text: "Dog", emoji: "🐶", translation: "狗狗", isCorrect: false }
    ]
  },
  {
    id: "animal_cow",
    category: "animals",
    letter: "Cc",
    word: "Cow",
    phonetics: "/kaʊ/",
    translation: "牛",
    color: "#171717",
    emoji: "🐮",
    questionPrompt: "哞～！哪個是 Cow (牛) 呢？",
    options: [
      { text: "Horse", emoji: "🐴", translation: "馬", isCorrect: false },
      { text: "Sheep", emoji: "🐑", translation: "綿羊", isCorrect: false },
      { text: "Cow", emoji: "🐮", translation: "牛", isCorrect: true }
    ]
  },
  {
    id: "animal_pig",
    category: "animals",
    letter: "Pp",
    word: "Pig",
    phonetics: "/pɪɡ/",
    translation: "豬",
    color: "#f472b6",
    emoji: "🐷",
    questionPrompt: "哪個是 Pig (豬) 呢？",
    options: [
      { text: "Pig", emoji: "🐷", translation: "豬", isCorrect: true },
      { text: "Cow", emoji: "🐮", translation: "牛", isCorrect: false },
      { text: "Mouse", emoji: "🐭", translation: "老鼠", isCorrect: false }
    ]
  },
  {
    id: "animal_sheep",
    category: "animals",
    letter: "Ss",
    word: "Sheep",
    phonetics: "/ʃiːp/",
    translation: "綿羊",
    color: "#f8fafc",
    emoji: "🐑",
    questionPrompt: "咩～！哪個是 Sheep (綿羊) 呢？",
    options: [
      { text: "Horse", emoji: "🐴", translation: "馬", isCorrect: false },
      { text: "Sheep", emoji: "🐑", translation: "綿羊", isCorrect: true },
      { text: "Rabbit", emoji: "🐰", translation: "兔子", isCorrect: false }
    ]
  },
  {
    id: "animal_horse",
    category: "animals",
    letter: "Hh",
    word: "Horse",
    phonetics: "/hɔːrs/",
    translation: "馬",
    color: "#a16207",
    emoji: "🐴",
    questionPrompt: "哪個是 Horse (馬) 呢？",
    options: [
      { text: "Horse", emoji: "🐴", translation: "馬", isCorrect: true },
      { text: "Cow", emoji: "🐮", translation: "牛", isCorrect: false },
      { text: "Elephant", emoji: "🐘", translation: "大象", isCorrect: false }
    ]
  },
  {
    id: "animal_duck",
    category: "animals",
    letter: "Dd",
    word: "Duck",
    phonetics: "/dʌk/",
    translation: "鴨子",
    color: "#eab308",
    emoji: "🦆",
    questionPrompt: "呱呱！哪個是 Duck (鴨子) 呢？",
    options: [
      { text: "Chicken", emoji: "🐔", translation: "雞", isCorrect: false },
      { text: "Bird", emoji: "🐦", translation: "小鳥", isCorrect: false },
      { text: "Duck", emoji: "🦆", translation: "鴨子", isCorrect: true }
    ]
  },
  {
    id: "animal_chicken",
    category: "animals",
    letter: "Cc",
    word: "Chicken",
    phonetics: "/ˈtʃɪk.ɪn/",
    translation: "雞",
    color: "#ef4444",
    emoji: "🐔",
    questionPrompt: "咕咕！哪個是 Chicken (雞) 呢？",
    options: [
      { text: "Chicken", emoji: "🐔", translation: "雞", isCorrect: true },
      { text: "Duck", emoji: "🦆", translation: "鴨子", isCorrect: false },
      { text: "Bird", emoji: "🐦", translation: "小鳥", isCorrect: false }
    ]
  },
  {
    id: "animal_mouse",
    category: "animals",
    letter: "Mm",
    word: "Mouse",
    phonetics: "/maʊs/",
    translation: "老鼠",
    color: "#94a3b8",
    emoji: "🐭",
    questionPrompt: "哪個是 Mouse (老鼠) 呢？",
    options: [
      { text: "Rabbit", emoji: "🐰", translation: "兔子", isCorrect: false },
      { text: "Mouse", emoji: "🐭", translation: "老鼠", isCorrect: true },
      { text: "Cat", emoji: "🐱", translation: "貓咪", isCorrect: false }
    ]
  },
  {
    id: "animal_turtle",
    category: "animals",
    letter: "Tt",
    word: "Turtle",
    phonetics: "/ˈtɝː.t̬əl/",
    translation: "烏龜",
    color: "#166534",
    emoji: "🐢",
    questionPrompt: "哪個是 Turtle (烏龜) 呢？",
    options: [
      { text: "Frog", emoji: "🐸", translation: "青蛙", isCorrect: false },
      { text: "Fish", emoji: "🐟", translation: "魚", isCorrect: false },
      { text: "Turtle", emoji: "🐢", translation: "烏龜", isCorrect: true }
    ]
  },
  {
    id: "animal_frog",
    category: "animals",
    letter: "Ff",
    word: "Frog",
    phonetics: "/frɑːɡ/",
    translation: "青蛙",
    color: "#22c55e",
    emoji: "🐸",
    questionPrompt: "嘓嘓！哪個是 Frog (青蛙) 呢？",
    options: [
      { text: "Frog", emoji: "🐸", translation: "青蛙", isCorrect: true },
      { text: "Turtle", emoji: "🐢", translation: "烏龜", isCorrect: false },
      { text: "Duck", emoji: "🦆", translation: "鴨子", isCorrect: false }
    ]
  }
];
