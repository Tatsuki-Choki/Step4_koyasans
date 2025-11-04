import { Sidebar } from "@/components/ui/sidebar"
import { ViewSwitcher } from "@/components/ui/view-switcher"

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-theme-border/60 bg-white/85 px-6 py-4 backdrop-blur">
          <h1 className="text-xl font-semibold text-theme-ink">教師ダッシュボード</h1>
          <ViewSwitcher />
        </div>
        <main className="bg-transparent p-6">{children}</main>
      </div>
    </div>
  )
}
