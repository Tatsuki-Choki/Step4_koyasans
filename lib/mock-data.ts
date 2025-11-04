// モックデータ

export interface Student {
  id: string
  name: string
  grade: number
  class: string
  avatar?: string
}

export interface JournalEntry {
  id: string
  studentId: string
  date: string
  content: string
  tags?: string[]
}

export interface GrowthData {
  studentId: string
  date: string
  challenge: number // チャレンジする心 (0-100)
  persistence: number // 諦めない力 (0-100)
  completion: number // やり遂げる力 (0-100)
}

// サンプル生徒データ（10人）
export const mockStudents: Student[] = [
  {
    id: "1",
    name: "田中 花子",
    grade: 1,
    class: "1-A",
  },
  {
    id: "2",
    name: "佐藤 太郎",
    grade: 2,
    class: "2-B",
  },
  {
    id: "3",
    name: "鈴木 美咲",
    grade: 1,
    class: "1-C",
  },
  {
    id: "4",
    name: "山田 健太",
    grade: 3,
    class: "3-A",
  },
  {
    id: "5",
    name: "中村 さくら",
    grade: 2,
    class: "2-A",
  },
  {
    id: "6",
    name: "高橋 大輔",
    grade: 1,
    class: "1-B",
  },
  {
    id: "7",
    name: "伊藤 あかり",
    grade: 3,
    class: "3-B",
  },
  {
    id: "8",
    name: "渡辺 翔太",
    grade: 2,
    class: "2-C",
  },
  {
    id: "9",
    name: "加藤 みゆき",
    grade: 1,
    class: "1-A",
  },
  {
    id: "10",
    name: "吉田 涼太",
    grade: 3,
    class: "3-C",
  },
]

// ジャーナリングエントリのテンプレート
const journalTemplates = [
  {
    content: "今日は文化祭の準備でリーダーシップを発揮できました。最初は不安でしたが、チームメンバーと協力して頑張ることができました。",
    tags: ["リーダーシップ", "協力"],
  },
  {
    content: "勉強で分からない問題があったけど、諦めずに質問して解決できました。自分でも成長を感じられます。",
    tags: ["諦めない力", "学習"],
  },
  {
    content: "新しいクラブ活動に挑戦しました。最初は難しかったけど、継続することで少しずつ上達しているのを感じます。",
    tags: ["チャレンジ", "継続"],
  },
  {
    content: "友達が困っている時に手伝うことができました。人の役に立てるのは嬉しいです。",
    tags: ["協力", "思いやり"],
  },
  {
    content: "難しい課題に取り組みました。最初は諦めそうになりましたが、最後までやり遂げることができました。",
    tags: ["やり遂げる力", "チャレンジ"],
  },
  {
    content: "部活動で新しい戦術を提案しました。チームメンバーがそれを採用してくれて、結果が出ました。",
    tags: ["リーダーシップ", "創造性"],
  },
  {
    content: "今日は学校の掃除当番で、他の人よりも早く終わらせることができました。効率的に行動できたと思います。",
    tags: ["効率性", "責任感"],
  },
  {
    content: "テストで良い点が取れました。日々の努力が実を結んだと感じます。",
    tags: ["達成感", "継続"],
  },
  {
    content: "クラスで意見が分かれた時、みんなの意見を聞いてまとめることができました。",
    tags: ["協調性", "リーダーシップ"],
  },
  {
    content: "新しい習い事を始めました。不安もありますが、楽しみな気持ちの方が大きいです。",
    tags: ["チャレンジ", "成長"],
  },
]

// サンプルジャーナルエントリ（各生徒10日分）
export const mockJournalEntries: JournalEntry[] = []

// 各生徒に10日分のジャーナリングエントリを生成
// ハイドレーションエラー回避のため、固定基準日を使用
const MOCK_BASE_DATE = new Date('2025-11-04')

mockStudents.forEach((student) => {
  for (let i = 0; i < 10; i++) {
    const date = new Date(MOCK_BASE_DATE)
    date.setDate(date.getDate() - (9 - i))
    const template = journalTemplates[i % journalTemplates.length]

    mockJournalEntries.push({
      id: `${student.id}-${i + 1}`,
      studentId: student.id,
      date: date.toISOString().split("T")[0],
      content: template.content,
      tags: template.tags,
    })
  }
})

// サンプル成長データ（過去30日分）
export const mockGrowthData: GrowthData[] = []

// 各生徒の成長データを生成（30日分）
// ハイドレーションエラー回避のため、固定基準日と決定的な値を使用
mockStudents.forEach((student, index) => {
  // 決定的なシード値を使用して、同じ値が常に生成されるようにする
  const baseChallenge = 40 + index * 2 + (index % 10) * 1.3
  const basePersistence = 45 + index * 1.5 + (index % 10) * 1.1
  const baseCompletion = 50 + index * 1.3 + (index % 10) * 1.4

  for (let i = 0; i < 30; i++) {
    const date = new Date(MOCK_BASE_DATE)
    date.setDate(date.getDate() - (29 - i))
    // 決定的な値を使用
    const randomChallenge = (index * 7 + i * 3) % 10
    const randomPersistence = (index * 5 + i * 2) % 8
    const randomCompletion = (index * 11 + i * 4) % 12

    mockGrowthData.push({
      studentId: student.id,
      date: date.toISOString().split("T")[0],
      challenge: Math.min(100, Math.round(baseChallenge + i * 1.5 + randomChallenge)),
      persistence: Math.min(100, Math.round(basePersistence + i * 1.3 + randomPersistence)),
      completion: Math.min(100, Math.round(baseCompletion + i * 1.2 + randomCompletion)),
    })
  }
})

// ヘルパー関数
export function getStudentById(id: string): Student | undefined {
  return mockStudents.find((s) => s.id === id)
}

export function getJournalEntriesByStudentId(studentId: string): JournalEntry[] {
  return mockJournalEntries.filter((e) => e.studentId === studentId)
}

export function getGrowthDataByStudentId(studentId: string): GrowthData[] {
  return mockGrowthData.filter((d) => d.studentId === studentId)
}

export function getLatestGrowthData(studentId: string): GrowthData | undefined {
  const data = getGrowthDataByStudentId(studentId)
  return data[data.length - 1]
}
