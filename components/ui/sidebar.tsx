"use client"

import { memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, BarChart3 } from "lucide-react"

const menuItems = [
  {
    title: "ダッシュボード",
    href: "/teacher/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "統計分析",
    href: "/teacher/analytics",
    icon: BarChart3,
  },
] as const

function SidebarComponent() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-screen w-64 overflow-y-auto border-r border-theme-border/60 bg-theme-mint/70">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-theme-ink">
            チームコンパス
          </h2>
          <p className="text-xs font-medium text-theme-ink/60">教師用ダッシュボード</p>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 transition-soft",
                  isActive
                    ? "bg-white/70 text-theme-ink font-semibold"
                    : "text-theme-ink/70 hover:bg-white/60 hover:text-theme-ink"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm">{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export const Sidebar = memo(SidebarComponent)
Sidebar.displayName = "Sidebar"
