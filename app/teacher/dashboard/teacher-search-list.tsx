"use client"

import { useMemo, useCallback, useState, memo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockStudents, getLatestGrowthData } from "@/lib/mock-data"
import { Search, ArrowRight } from "lucide-react"
import type { Student } from "@/lib/mock-data"

// 生徒カードコンポーネント
const StudentCard = memo(({ student }: { student: Student }) => {
  const latestGrowth = getLatestGrowthData(student.id)
  const avgGrowth = latestGrowth
    ? Math.round(
        (latestGrowth.challenge +
          latestGrowth.persistence +
          latestGrowth.completion) /
          3
      )
    : 0

  return (
    <Card className="border border-theme-border/60 bg-white/85 shadow-soft-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div>
            <CardTitle className="text-xl font-semibold text-theme-ink">
              {student.name}
            </CardTitle>
            <CardDescription className="mt-1 text-theme-ink/70">
              {student.grade}年生 {student.class}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* 成長指標のクイックビュー */}
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-2xl border border-theme-border/50 bg-white/80">
              <div className="text-sm font-medium text-theme-ink/75">
                チャレンジ
              </div>
              <div className="text-lg font-bold text-theme-ink">
                {latestGrowth?.challenge.toFixed(0) || "—"}
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl border border-theme-border/50 bg-white/80">
              <div className="text-sm font-medium text-theme-ink/75">
                諦めない
              </div>
              <div className="text-lg font-bold text-theme-ink">
                {latestGrowth?.persistence.toFixed(0) || "—"}
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl border border-theme-border/50 bg-white/80">
              <div className="text-sm font-medium text-theme-ink/75">
                やり遂げる
              </div>
              <div className="text-lg font-bold text-theme-ink">
                {latestGrowth?.completion.toFixed(0) || "—"}
              </div>
            </div>
          </div>

          {/* 平均成長率 */}
          <div className="p-3 rounded-2xl border border-theme-border/50 bg-white/80">
            <div className="flex items-center justify-between">
              <span className="text-sm text-theme-ink/70">
                平均成長率
              </span>
              <span className="text-lg font-bold text-theme-ink">
                {avgGrowth}
              </span>
            </div>
          </div>

          {/* 詳細ボタン */}
          <Link href={`/teacher/student/${student.id}`}>
            <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              詳細を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
})
StudentCard.displayName = "StudentCard"

export default function TeacherSearchAndList() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const filteredStudents = useMemo(
    () =>
      mockStudents.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.class.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  )

  return (
    <>
      {/* 検索バー */}
      <Card className="mb-6 border border-theme-border/60 bg-white/85 shadow-soft-lg">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-theme-ink/40" />
            <input
              type="text"
              placeholder="生徒名やクラスで検索..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-theme-border/60 rounded-lg bg-white/85 focus:outline-none focus:ring-2 focus:ring-theme-lavender focus:border-theme-lavender"
            />
          </div>
        </CardContent>
      </Card>

      {/* 生徒一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card className="border border-theme-border/60 bg-white/85 shadow-soft">
          <CardContent className="pt-6">
            <p className="text-center text-theme-ink/60 py-8">
              検索条件に一致する生徒が見つかりませんでした
            </p>
          </CardContent>
        </Card>
      )}
    </>
  )
}
