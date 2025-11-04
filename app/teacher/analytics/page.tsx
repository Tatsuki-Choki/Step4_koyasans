import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TeacherGrowthChartWrapper from "@/components/teacher-growth-chart-wrapper"
import { getGrowthDataByStudentId, mockStudents } from "@/lib/mock-data"

export default function TeacherAnalyticsPage() {
  const sampleStudentId = mockStudents[0]?.id ?? "1"
  const weeklyData = getGrowthDataByStudentId(sampleStudentId).slice(0, 28).map((data, index) => ({
    week: `Week ${index + 1}`,
    challenge: data.challenge,
    persistence: data.persistence,
    completion: data.completion,
  }))

  return (
    <div className="space-y-6">
      <Card className="border border-theme-border/60 bg-white/85">
        <CardHeader>
          <CardTitle className="text-theme-ink">クラス全体の推移サマリー</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-theme-ink/70">
            各指標の推移を確認し、伴走に活かしましょう。
          </p>
        </CardContent>
      </Card>

      <TeacherGrowthChartWrapper weeklyData={weeklyData} />
    </div>
  )
}

