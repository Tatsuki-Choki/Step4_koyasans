"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap, Users } from "lucide-react"

type ActionCardProps = {
  href: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  ctaLabel: string
}

function ActionCard({ href, title, description, icon: Icon, ctaLabel }: ActionCardProps) {
  return (
    <div className="rounded-3xl border border-theme-border/60 bg-white/80 p-6 shadow-soft-lg transition-soft hover:-translate-y-1">
      <Link href={href} className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-theme-lavender/20 text-theme-lavender">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold text-theme-ink">{title}</h2>
          </div>
          <ArrowRight className="h-5 w-5 text-theme-ink/40" />
        </div>
        <p className="text-sm leading-relaxed text-theme-ink/70">{description}</p>
        <div className="text-sm font-medium text-theme-lavender">{ctaLabel}</div>
      </Link>
    </div>
  )
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-theme-ink/50">{label}</span>
      <h2 className="text-2xl font-semibold text-theme-ink">{title}</h2>
    </div>
  )
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-theme-border/60 bg-white/80 p-5 shadow-soft">
      <h3 className="text-base font-semibold text-theme-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-theme-ink/70">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-theme-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-theme-ink/50">Team Compass</span>
            <h1 className="text-4xl font-semibold leading-tight text-theme-ink md:text-5xl">
              学校と生徒をつなぐ、日々の成長記録プラットフォーム
            </h1>
            <p className="text-base leading-relaxed text-theme-ink/70 md:text-lg">
              チームコンパスは、生徒の挑戦と成長を日常の記録として残し、教師と保護者が一緒に伴走できる学習体験を提供します。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/student/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft-lg transition-soft hover:bg-primary/90"
            >
              <span className="inline-flex items-center gap-2">
                生徒ダッシュボードを見る
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/teacher/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-theme-border/70 px-5 py-3 text-sm font-semibold text-theme-ink transition-soft hover:bg-white/70"
            >
              <span>教師向け機能を見る</span>
            </Link>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-theme-border/50 bg-white/80 p-5 shadow-soft">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-theme-ink/60">毎日の記録数</dt>
              <dd className="mt-2 text-2xl font-semibold text-theme-ink">2,400+</dd>
            </div>
            <div className="rounded-3xl border border-theme-border/50 bg-white/80 p-5 shadow-soft">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-theme-ink/60">対応学年</dt>
              <dd className="mt-2 text-2xl font-semibold text-theme-ink">小学校〜高校</dd>
            </div>
            <div className="rounded-3xl border border-theme-border/50 bg-white/80 p-5 shadow-soft">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-theme-ink/60">導入校</dt>
              <dd className="mt-2 text-2xl font-semibold text-theme-ink">全国48校</dd>
            </div>
          </dl>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <SectionTitle label="For Students" title="日々の変化を自分で確かめる" />
          <div className="grid gap-4">
            <InfoCard
              title="成長が見えるダッシュボード"
              description="振り返りの記録や成長指標を、シンプルなグラフとタイムラインで確認できます。"
            />
            <InfoCard
              title="書くほど深まるジャーナリング"
              description="毎日の小さな気付きや成果を残せるミニマルな入力画面で、習慣化を後押しします。"
            />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <SectionTitle label="For Teachers" title="クラス全体と個別の両方に気付ける" />
          <div className="grid gap-4">
            <InfoCard
              title="一覧で全体像を把握"
              description="生徒の状況や最近の記録がひと目で分かるリスト表示で、忙しい日常でも素早くフォローできます。"
            />
            <InfoCard
              title="個別ページで丁寧に伴走"
              description="成長の推移やコメント履歴を時系列で確認しながら、次の声かけに活かせます。"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ActionCard
            href="/student/dashboard"
            title="生徒用ダッシュボード"
            description="自分の目標と達成を整理し、日々の成長を落ち着いたデザインの中で振り返ります。"
            icon={Users}
            ctaLabel="記録とグラフを確認"
          />
          <ActionCard
            href="/teacher/dashboard"
            title="教師用ダッシュボード"
            description="クラス全体の状態から個別の成長まで、一つの画面でシンプルに把握できます。"
            icon={GraduationCap}
            ctaLabel="生徒の状況を確認"
          />
        </section>
      </main>

      <footer className="border-t border-theme-border/50 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm text-theme-ink/60 md:flex-row md:items-center md:justify-between">
          <span>© 2024 チームコンパス</span>
          <div className="flex gap-4">
            <Link href="#" className="transition-soft hover:text-theme-ink/80">
              プライバシーポリシー
            </Link>
            <Link href="#" className="transition-soft hover:text-theme-ink/80">
              利用規約
            </Link>
            <Link href="#" className="transition-soft hover:text-theme-ink/80">
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
