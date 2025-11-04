import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import type { GrowthData } from "@/lib/mock-data"

interface GrowthIndicatorCardProps {
  title: string
  value: number
  showTrend?: boolean
  compact?: boolean
}

export function GrowthIndicatorCard({
  title,
  value,
  showTrend = false,
  compact = false,
}: GrowthIndicatorCardProps) {
  if (compact) {
    return (
      <Card className="border border-theme-border/60 bg-white/85 shadow-soft">
        <CardContent className="rounded-2xl bg-gradient-to-b from-theme-sky/30 via-white to-white p-3">
          <div className="mb-1 text-center text-xs font-medium text-theme-ink/70">
            {title}
          </div>
          <div className="text-center text-xl font-bold text-theme-ink">
            {value.toFixed(0)}
          </div>
          {showTrend && (
            <div className="mt-1 flex items-center justify-center text-[10px] text-theme-ink/60">
              <TrendingUp className="mr-0.5 h-2.5 w-2.5" />
              <span>向上</span>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-theme-border/60 bg-white/85 shadow-soft-lg">
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-medium text-theme-ink/75">{title}</div>
          {showTrend && <TrendingUp className="h-5 w-5 text-theme-ink/50" />}
        </div>
        <div className="text-2xl font-bold text-theme-ink">{value.toFixed(0)}</div>
      </CardContent>
    </Card>
  )
}

interface GrowthMetricsGridProps {
  latestGrowth: GrowthData | null
  compact?: boolean
}

export function GrowthMetricsGrid({ latestGrowth, compact = false }: GrowthMetricsGridProps) {
  const challenge = latestGrowth?.challenge || 0
  const persistence = latestGrowth?.persistence || 0
  const completion = latestGrowth?.completion || 0

  return (
    <div className={`grid ${compact ? "grid-cols-3 gap-2" : "grid-cols-1 md:grid-cols-3 gap-6"}`}>
      <GrowthIndicatorCard title="チャレンジ" value={challenge} compact={compact} />
      <GrowthIndicatorCard title="諦めない" value={persistence} compact={compact} />
      <GrowthIndicatorCard title="やり遂げる" value={completion} compact={compact} />
    </div>
  )
}
