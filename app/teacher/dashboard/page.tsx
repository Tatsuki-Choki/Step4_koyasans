import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockStudents, getLatestGrowthData } from "@/lib/mock-data"
import { Users, TrendingUp } from "lucide-react"
import TeacherSearchAndList from "./teacher-search-list"

// 統計カードコンポーネント
const StatsCard = ({ title, value, icon: Icon, unit }: { title: string; value: number | string; icon: React.ComponentType<{ className?: string }>; unit: string }) => (
  <Card className="border border-theme-border/60 bg-white/85 shadow-soft-lg">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold text-theme-ink">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-theme-ink/60" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-theme-ink">
        {value}
      </div>
      <p className="mt-1 text-sm text-theme-ink/65">{unit}</p>
    </CardContent>
  </Card>
)

export default function TeacherDashboard() {
  const avgGrowth = mockStudents.reduce((sum, student) => {
    const growth = getLatestGrowthData(student.id)
    return (
      sum +
      (growth
        ? (growth.challenge + growth.persistence + growth.completion) / 3
        : 0)
    )
  }, 0) / mockStudents.length

  return (
    <div className="mx-auto max-w-[1600px] space-y-8">
      {/* ヘッダー */}
      <div>
        <p className="mb-2 text-sm font-medium leading-relaxed text-theme-ink/70">
          全生徒の成長状況を確認し、個別サポートを行います
        </p>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatsCard title="総生徒数" value={mockStudents.length} icon={Users} unit="名" />
        <StatsCard title="平均成長率" value={Math.round(avgGrowth)} icon={TrendingUp} unit="ポイント" />
        <StatsCard title="記録数" value={mockStudents.length * 10} icon={Users} unit="総記録数" />
      </div>

      {/* 検索と生徒一覧 */}
      <TeacherSearchAndList />
    </div>
  )
}
