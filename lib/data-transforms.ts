import type { WeeklyGrowthData } from "@/types"
import type { GrowthData } from "@/lib/mock-data"

export function transformToWeeklyData(growthData: GrowthData[]): WeeklyGrowthData[] {
  const weeklyData: WeeklyGrowthData[] = []
  
  for (let i = 0; i < growthData.length; i += 7) {
    const weekData = growthData.slice(i, i + 7)
    if (weekData.length === 0) continue

    const avgChallenge = weekData.reduce((sum, d) => sum + d.challenge, 0) / weekData.length
    const avgPersistence = weekData.reduce((sum, d) => sum + d.persistence, 0) / weekData.length
    const avgCompletion = weekData.reduce((sum, d) => sum + d.completion, 0) / weekData.length

    weeklyData.push({
      week: `Week ${Math.floor(i / 7) + 1}`,
      date: weekData[0].date.toISOString().split("T")[0],
      challenge: Math.round(avgChallenge),
      persistence: Math.round(avgPersistence),
      completion: Math.round(avgCompletion),
    })
  }

  return weeklyData
}

export function calculateAverageGrowth(growthData: GrowthData | null): number {
  if (!growthData) return 0
  return Math.round((growthData.challenge + growthData.persistence + growthData.completion) / 3)
}

