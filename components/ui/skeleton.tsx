export function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-lg border border-gray-200 p-6">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
    </div>
  )
}

export function SkeletonList() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start justify-between mb-2">
            <div className="h-3 bg-gray-200 rounded w-24"></div>
            <div className="flex gap-1">
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  )
}

export function SkeletonChart() {
  return (
    <div className="animate-pulse bg-white rounded-lg border border-gray-200 p-6">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
    </div>
  )
}

// 統計カード用のスケルトン
export function SkeletonStatsCard() {
  return (
    <div className="animate-pulse bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 bg-gray-200 rounded w-24"></div>
        <div className="h-5 w-5 bg-gray-200 rounded"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-16 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-12"></div>
    </div>
  )
}

// 生徒カード用のスケルトン
export function SkeletonStudentCard() {
  return (
    <div className="animate-pulse bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-4">
        <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg">
            <div className="h-3 bg-gray-200 rounded w-16 mb-2 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-8 mx-auto"></div>
          </div>
        ))}
      </div>
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
  )
}

// 成長指標カード用のスケルトン
export function SkeletonGrowthCard() {
  return (
    <div className="animate-pulse bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 bg-gray-200 rounded w-32"></div>
        <div className="h-5 w-5 bg-gray-200 rounded"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded w-20 mb-2"></div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  )
}

