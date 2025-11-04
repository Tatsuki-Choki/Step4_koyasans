import { ViewSwitcher } from "@/components/ui/view-switcher"
import { FooterNav } from "@/components/ui/footer-nav"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-theme-border/60 bg-white/85 px-4 py-3 backdrop-blur">
        <h1 className="text-lg font-semibold text-theme-ink">チームコンパス</h1>
        <ViewSwitcher />
      </div>
      <main>{children}</main>
      <FooterNav />
    </div>
  )
}
