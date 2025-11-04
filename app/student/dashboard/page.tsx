import { memo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getLatestGrowthData, getJournalEntriesByStudentId } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { TrendingUp, BookOpen, BarChart3, ArrowRight } from "lucide-react"
import type { JournalEntry } from "@/lib/mock-data"

// 成長指標カードコンポーネント
const GrowthCard = memo(({
  title,
  value,
  colorClass,
  compact = false,
}: {
  title: string
  value: number
  colorClass: "purple" | "pink" | "blue"
  compact?: boolean
}) => {
  const gradientMap: Record<typeof colorClass, string> = {
    purple: "from-theme-lavender/35 via-white to-white",
    pink: "from-theme-blush/35 via-white to-white",
    blue: "from-theme-sky/35 via-white to-white",
  }

  if (compact) {
    return (
      <Card className="border border-theme-border/50 bg-white/80 shadow-soft-lg">
        <CardContent className={cn("rounded-2xl bg-gradient-to-b p-4", gradientMap[colorClass])}>
          <div className="mb-1 text-center text-xs font-medium text-theme-ink/65">
            {title}
          </div>
          <div className="text-center text-xl font-bold text-theme-ink">
            {value.toFixed(0)}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-theme-border/50 bg-white/85 shadow-soft-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-theme-ink">
            {title}
          </CardTitle>
          <TrendingUp className="h-5 w-5 text-theme-ink/50" />
        </div>
      </CardHeader>
      <CardContent className={cn("rounded-3xl bg-gradient-to-b p-6", gradientMap[colorClass])}>
        <div className="mb-1 text-3xl font-bold text-theme-ink">
          {value.toFixed(0)}
        </div>
        <p className="text-xs text-theme-ink/60">過去30日間の平均</p>
      </CardContent>
    </Card>
  )
})
GrowthCard.displayName = "GrowthCard"

// アクションカードコンポーネント
const ActionCard = memo(({
  title,
  description,
  href,
  buttonText,
  icon: Icon,
  variant,
  compact = false,
}: {
  title: string
  description: string
  href: string
  buttonText: string
  icon: React.ComponentType<{ className?: string }>
  variant: "purple" | "blue"
  compact?: boolean
}) => {
  const gradient = variant === "purple"
    ? "from-theme-lavender/35 via-white to-white"
    : "from-theme-sky/35 via-white to-white"

  if (compact) {
    return (
      <Card className="border border-theme-border/50 bg-white/80 shadow-soft-lg">
        <CardContent className={cn("rounded-2xl bg-gradient-to-b p-4", gradient)}>
          <div className="flex flex-col items-center text-center">
            <Icon className="mb-2 h-6 w-6 text-theme-ink/70" />
            <CardTitle className="mb-1 text-sm font-semibold text-theme-ink">
              {title}
            </CardTitle>
            <CardDescription className="mb-3 text-xs leading-relaxed text-theme-ink/65">
              {description}
            </CardDescription>
            <Link href={href}>
              <Button className="w-full rounded-full bg-primary text-sm text-primary-foreground hover:bg-primary/90">
                {buttonText}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-theme-border/50 bg-white/85 shadow-soft-lg">
      <CardHeader className="pb-4">
        <div className="mb-2 flex items-center gap-3">
          <Icon className="h-5 w-5 text-theme-ink/70" />
          <CardTitle className="text-lg font-semibold text-theme-ink">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm leading-relaxed text-theme-ink/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("rounded-3xl bg-gradient-to-b p-6", gradient)}>
        <Link href={href}>
          <Button className="h-12 w-full rounded-full bg-primary text-base text-primary-foreground hover:bg-primary/90">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
})
ActionCard.displayName = "ActionCard"

// ジャーナルエントリーカードコンポーネント
const JournalEntryCard = memo(({ entry }: { entry: JournalEntry }) => {
  // 日付を固定フォーマットで表示（ハイドレーションエラー回避）
  const dateStr = typeof entry.date === 'string' ? entry.date : new Date(entry.date).toISOString().split('T')[0]
  const [year, month, day] = dateStr.split('-')
  const formattedDate = `${year}年${parseInt(month)}月${parseInt(day)}日`

  return (
  <div className="rounded-3xl border border-theme-border/50 bg-white/85 p-3 shadow-soft">
    <div className="mb-2 flex items-start justify-between">
      <span className="text-xs font-medium text-theme-ink/60">
        {formattedDate}
      </span>
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-theme-lavender/20 px-2 py-0.5 text-xs text-theme-lavender/80"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
    <p className="text-sm leading-relaxed text-theme-ink/85 line-clamp-2">{entry.content}</p>
  </div>
  )
})
JournalEntryCard.displayName = "JournalEntryCard"

export default function StudentDashboard() {
  const studentId = "1" // デモ用
  const latestGrowth = getLatestGrowthData(studentId)
  const recentEntries = getJournalEntriesByStudentId(studentId).slice(-2)

  return (
    <div className="min-h-screen pb-20">
      <div className="mx-auto max-w-md px-5 py-6">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold leading-tight text-theme-ink">
            おかえりなさい、田中さん
          </h1>
          <p className="text-sm leading-relaxed text-theme-ink/70">
            今日も一日お疲れ様です。今日の成長を振り返ってみましょう。
          </p>
        </div>

        {/* 成長指標のクイックビュー - Compact horizontal layout */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <GrowthCard 
            title="チャレンジ" 
            value={latestGrowth?.challenge || 0} 
            colorClass="purple"
            compact
          />
          <GrowthCard 
            title="諦めない" 
            value={latestGrowth?.persistence || 0} 
            colorClass="pink"
            compact
          />
          <GrowthCard 
            title="やり遂げる" 
            value={latestGrowth?.completion || 0} 
            colorClass="blue"
            compact
          />
        </div>

        {/* アクションカード - Compact layout */}
        <div className="mb-6 grid grid-cols-2 gap-2">
          <ActionCard
            title="記録"
            description="今日の記録"
            href="/student/journal"
            buttonText="書く"
            icon={BookOpen}
            variant="purple"
            compact
          />
          <ActionCard
            title="成長"
            description="グラフを見る"
            href="/student/growth"
            buttonText="見る"
            icon={BarChart3}
            variant="blue"
            compact
          />
        </div>

        {/* 最近の記録 - Compact preview */}
        <Card className="border border-theme-border/60 bg-white/85 shadow-soft-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-theme-ink">
              最近の記録
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentEntries.length > 0 ? (
              <div className="space-y-2">
                {recentEntries.map((entry) => (
                  <JournalEntryCard key={entry.id} entry={entry} />
                ))}
                <Link href="/student/journal" className="block pt-2 text-center text-sm font-medium text-theme-lavender hover:text-theme-lavender/80">
                  もっと見る →
                </Link>
              </div>
            ) : (
              <p className="py-4 text-center text-sm leading-relaxed text-theme-ink/60">
                まだ記録がありません。最初の記録を書いてみましょう。
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
