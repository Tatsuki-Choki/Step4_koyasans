"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp } from "lucide-react"
import { getGrowthDataByStudentId, getLatestGrowthData } from "@/lib/mock-data"
import GrowthChartWrapper from "@/components/growth-chart-wrapper"

export default function GrowthPage() {
  const studentId = "1" // デモ用
  const growthData = getGrowthDataByStudentId(studentId)
  const latestGrowth = getLatestGrowthData(studentId)

  // グラフ用のデータフォーマット（週ごとに平均化）- useMemoでメモ化
  const weeklyData = useMemo(() => {
    const data = []
    for (let i = 0; i < growthData.length; i += 7) {
      const weekData = growthData.slice(i, i + 7)
      const avgChallenge =
        weekData.reduce((sum, d) => sum + d.challenge, 0) / weekData.length
      const avgPersistence =
        weekData.reduce((sum, d) => sum + d.persistence, 0) / weekData.length
      const avgCompletion =
        weekData.reduce((sum, d) => sum + d.completion, 0) / weekData.length

      data.push({
        week: `Week ${Math.floor(i / 7) + 1}`,
        date: weekData[0].date,
        challenge: Math.round(avgChallenge),
        persistence: Math.round(avgPersistence),
        completion: Math.round(avgCompletion),
      })
    }
    return data
  }, [growthData])

  return (
    <div className="min-h-screen pb-20">
      <div className="mx-auto max-w-md px-5 py-6">
        {/* ヘッダー */}
        <div className="mb-6">
          <Link href="/student/dashboard">
            <Button variant="outline" className="mb-4 h-auto gap-2 rounded-full border-theme-border/70 bg-white/80 px-4 py-2 text-theme-ink hover:bg-white">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">戻る</span>
            </Button>
          </Link>
          <h1 className="mb-2 text-3xl font-semibold text-theme-ink">
            あなたの成長
          </h1>
          <p className="text-sm text-theme-ink/70">
            過去30日間の成長をグラフで確認できます
          </p>
        </div>

        {/* 現在の指標カード - Compact horizontal layout */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <Card className="border border-theme-border/50 bg-white/85 shadow-soft">
            <CardContent className="rounded-2xl bg-gradient-to-b from-theme-lavender/30 via-white to-white p-3">
              <div className="mb-1 text-center text-xs font-medium text-theme-ink/65">
                チャレンジ
              </div>
              <div className="mb-1 text-center text-xl font-bold text-theme-ink">
                {latestGrowth?.challenge.toFixed(0) || 0}
              </div>
              <div className="flex items-center justify-center text-[10px] text-theme-ink/60">
                <TrendingUp className="mr-0.5 h-2.5 w-2.5" />
                <span>向上</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-theme-border/50 bg-white/85 shadow-soft">
            <CardContent className="rounded-2xl bg-gradient-to-b from-theme-blush/30 via-white to-white p-3">
              <div className="mb-1 text-center text-xs font-medium text-theme-ink/65">
                諦めない
              </div>
              <div className="mb-1 text-center text-xl font-bold text-theme-ink">
                {latestGrowth?.persistence.toFixed(0) || 0}
              </div>
              <div className="flex items-center justify-center text-[10px] text-theme-ink/60">
                <TrendingUp className="mr-0.5 h-2.5 w-2.5" />
                <span>向上</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-theme-border/50 bg-white/85 shadow-soft">
            <CardContent className="rounded-2xl bg-gradient-to-b from-theme-sky/30 via-white to-white p-3">
              <div className="mb-1 text-center text-xs font-medium text-theme-ink/65">
                やり遂げる
              </div>
              <div className="mb-1 text-center text-xl font-bold text-theme-ink">
                {latestGrowth?.completion.toFixed(0) || 0}
              </div>
              <div className="flex items-center justify-center text-[10px] text-theme-ink/60">
                <TrendingUp className="mr-0.5 h-2.5 w-2.5" />
                <span>向上</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 成長グラフ */}
        <GrowthChartWrapper weeklyData={weeklyData} />

        {/* 指標の説明 - Move below the fold */}
        <div className="mt-6 space-y-3">
          <Card className="border border-theme-border/50 bg-white/85 shadow-soft">
            <CardContent className="py-3">
              <h3 className="mb-1 text-xs font-semibold text-theme-ink">
                チャレンジする心
              </h3>
              <p className="text-[11px] leading-relaxed text-theme-ink/70">
                新しいことに挑戦する姿勢や、困難な状況に積極的に取り組む意欲を表します。
              </p>
            </CardContent>
          </Card>

          <Card className="border border-theme-border/50 bg-white/85 shadow-soft">
            <CardContent className="py-3">
              <h3 className="mb-1 text-xs font-semibold text-theme-ink">
                諦めない力
              </h3>
              <p className="text-[11px] leading-relaxed text-theme-ink/70">
                困難や失敗に直面しても、最後まであきらめずに努力を続ける力を表します。
              </p>
            </CardContent>
          </Card>

          <Card className="border border-theme-border/50 bg-white/85 shadow-soft">
            <CardContent className="py-3">
              <h3 className="mb-1 text-xs font-semibold text-theme-ink">
                やり遂げる力
              </h3>
              <p className="text-[11px] leading-relaxed text-theme-ink/70">
                目標や計画を最後まで実行し、達成するまでの継続力を表します。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
