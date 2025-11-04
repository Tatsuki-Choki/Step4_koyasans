"use client"

import { memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

function ViewSwitcherComponent() {
  const pathname = usePathname()
  const isTeacher = pathname?.startsWith("/teacher") ?? false
  const isStudent = pathname?.startsWith("/student") ?? false

  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-full border border-theme-border/60 bg-white/90">
      <Link
        href="/teacher/dashboard"
        prefetch={true}
        className={cn(
          "px-3 py-1.5 text-xs font-medium transition-all duration-200",
          isTeacher
            ? "bg-theme-sky/30 text-theme-ink"
            : "text-theme-ink/60 hover:bg-theme-sky/20 hover:text-theme-ink"
        )}
      >
        教師用
      </Link>
      <Link
        href="/student/dashboard"
        prefetch={true}
        className={cn(
          "px-3 py-1.5 text-xs font-medium transition-all duration-200",
          isStudent
            ? "bg-theme-lavender/40 text-theme-ink"
            : "text-theme-ink/60 hover:bg-theme-lavender/20 hover:text-theme-ink"
        )}
      >
        生徒用
      </Link>
    </div>
  )
}

export const ViewSwitcher = memo(ViewSwitcherComponent)
ViewSwitcher.displayName = "ViewSwitcher"
