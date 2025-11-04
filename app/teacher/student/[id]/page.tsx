import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getLatestGrowthData, getJournalEntriesByStudentId, mockStudents } from "@/lib/mock-data"
import { ArrowLeft, TrendingUp } from "lucide-react"

export default function TeacherStudentDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const student = mockStudents.find((item) => item.id === params.id)

  if (!student) {
    notFound()
  }

  const latestGrowth = getLatestGrowthData(student.id)
  const recentJournalEntries = getJournalEntriesByStudentId(student.id).slice(-5).reverse()

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-theme-ink">{student.name}</h1>
          <p className="text-theme-ink/70 text-sm">
            {student.grade}年生 {student.class}
          </p>
        </div>
        <Link href="/teacher/dashboard">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            一覧に戻る
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-theme-ink">チャレンジ</CardTitle>
            <CardDescription className="flex items-center gap-1 text-xs text-theme-ink/60">
              <TrendingUp className="h-4 w-4" />
              最近30日の平均
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-theme-ink">
              {latestGrowth?.challenge.toFixed(0) ?? "—"}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-theme-ink">諦めない</CardTitle>
            <CardDescription className="flex items-center gap-1 text-xs text-theme-ink/60">
              <TrendingUp className="h-4 w-4" />
              最近30日の平均
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-theme-ink">
              {latestGrowth?.persistence.toFixed(0) ?? "—"}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-theme-ink">やり遂げる</CardTitle>
            <CardDescription className="flex items-center gap-1 text-xs text-theme-ink/60">
              <TrendingUp className="h-4 w-4" />
              最近30日の平均
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-theme-ink">
              {latestGrowth?.completion.toFixed(0) ?? "—"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 backdrop-blur">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-theme-ink">最近の記録</CardTitle>
          <CardDescription className="text-sm text-theme-ink/65">
            最新5件のジャーナルを表示しています
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentJournalEntries.length === 0 ? (
            <p className="text-sm text-theme-ink/60">記録が見つかりませんでした。</p>
          ) : (
            recentJournalEntries.map((entry) => {
              const [year, month, day] = entry.date.split("-")
              return (
                <div
                  key={entry.id}
                  className="rounded-2xl border border-theme-border/40 bg-white/70 p-4"
                >
                  <p className="text-xs font-medium text-theme-ink/70 mb-1">
                    {`${year}年${Number(month)}月${Number(day)}日`}
                  </p>
                  <p className="text-sm leading-relaxed text-theme-ink/85">{entry.content}</p>
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-theme-lavender/20 px-3 py-1 text-xs text-theme-lavender/80"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </CardContent>
      </Card>
    </div>
  )
}

