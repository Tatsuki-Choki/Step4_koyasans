import { Student, JournalEntry, GrowthData } from "@prisma/client"

// APIレスポンス型
export interface ApiResponse<T> {
  data: T
  error?: never
}

export interface ApiErrorResponse {
  error: {
    message: string
    code: string
    errors?: Record<string, string[]>
  }
  data?: never
}

export type ApiResult<T> = ApiResponse<T> | ApiErrorResponse

// グラフ用のデータ型
export interface WeeklyGrowthData {
  week: string
  date: string
  challenge: number
  persistence: number
  completion: number
}

// 学生データ拡張型
export interface StudentWithRelations extends Student {
  user: {
    email: string
    role: "STUDENT" | "TEACHER"
  }
}

export interface JournalEntryWithRelations extends JournalEntry {
  student: Student
}

export interface GrowthDataWithRelations extends GrowthData {
  student: Student
}

// 統計データ型
export interface StudentStats {
  totalStudents: number
  averageGrowth: number
  totalEntries: number
}

// ダッシュボード用のデータ型
export interface DashboardData {
  latestGrowth: GrowthData | null
  recentEntries: JournalEntry[]
  stats: StudentStats
}

// ユーティリティ型
export type NonNullable<T> = T extends null | undefined ? never : T

