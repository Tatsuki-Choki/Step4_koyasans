"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeeklyGrowthData } from "@/types"

// Rechartsを動的インポート（コード分割）
const TeacherGrowthChart = dynamic(() => import("./teacher-growth-chart"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
})

export default function TeacherGrowthChartWrapper({ weeklyData }: { weeklyData: WeeklyGrowthData[] }) {
  return (
    <Card className="mb-8 border border-theme-border/60 bg-white/90 backdrop-blur shadow-soft-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-theme-ink">
          成長の推移
        </CardTitle>
        <CardDescription className="text-theme-ink/70">
          過去30日間の3つの指標の推移
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense
          fallback={
            <div className="h-[400px] flex items-center justify-center">
              <div className="animate-pulse space-y-4 w-full">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </div>
          }
        >
          <TeacherGrowthChart data={weeklyData} />
        </Suspense>
      </CardContent>
    </Card>
  )
}

