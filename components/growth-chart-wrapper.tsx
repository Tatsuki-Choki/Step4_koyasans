"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeeklyGrowthData } from "@/types"

// Rechartsを動的インポート（コード分割）
const GrowthChart = dynamic(() => import("./growth-chart"), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
})

export default function GrowthChartWrapper({ weeklyData }: { weeklyData: WeeklyGrowthData[] }) {
  return (
    <Card className="mb-6 border border-theme-border/60 bg-white/90 backdrop-blur shadow-soft-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-theme-ink">
          成長の推移
        </CardTitle>
        <CardDescription className="text-sm text-theme-ink/70">
          3つの指標の推移を時系列で確認できます
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense
          fallback={
            <div className="h-[250px] flex items-center justify-center">
              <div className="animate-pulse space-y-4 w-full">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          }
        >
          <GrowthChart data={weeklyData} />
        </Suspense>
      </CardContent>
    </Card>
  )
}

