"use client"

import { memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, BookOpen, TrendingUp } from "lucide-react"

const menuItems = [
  {
    title: "ダッシュボード",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "記録",
    href: "/student/journal",
    icon: BookOpen,
  },
  {
    title: "成長",
    href: "/student/growth",
    icon: TrendingUp,
  },
] as const

function FooterNavComponent() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-theme-border/40 bg-white/90">
      <div className="grid h-16 grid-cols-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-t-2xl transition-soft",
                isActive
                  ? "bg-theme-lavender/20 text-theme-ink"
                  : "text-theme-ink/60 hover:bg-theme-lavender/15 hover:text-theme-ink"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "text-theme-ink") } />
              <span className={cn("text-xs font-medium", isActive && "font-semibold text-theme-ink")}>
                {item.title}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export const FooterNav = memo(FooterNavComponent)
FooterNav.displayName = "FooterNav"
