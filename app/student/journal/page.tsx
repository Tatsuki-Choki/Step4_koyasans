"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Send } from "lucide-react"

export default function JournalPage() {
  const [content, setContent] = useState("")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // デモ用の送信処理（実際にはAPIを呼び出す）
    setTimeout(() => {
      setContent("")
      setIsSubmitting(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 800)
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="mx-auto max-w-md px-5 py-6">
        {/* ヘッダー */}
        <div className="mb-6">
          <Link href="/student/dashboard">
            <Button variant="outline" className="mb-4 flex h-auto items-center gap-2 rounded-full border-theme-border/70 bg-white/85 px-4 py-2 text-theme-ink hover:bg-white">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">戻る</span>
            </Button>
          </Link>
          <h1 className="mb-2 text-3xl font-semibold text-theme-ink">
            今日の記録
          </h1>
          <p className="text-sm text-theme-ink/70">
            今日の出来事や気づきを自由に記録してください
          </p>
        </div>

        {/* ジャーナリングフォーム */}
        <form onSubmit={handleSubmit}>
          <Card className="border border-theme-border/60 bg-white/85 shadow-soft-lg">
            <CardHeader className="pb-4">
              <div className="space-y-4">
                <div>
                  <CardTitle className="mb-2 text-lg font-semibold text-theme-ink">
                    あなたの記録
                  </CardTitle>
                  <CardDescription className="text-sm text-theme-ink/70">
                    感じたこと、考えたこと、挑戦したこと。何でも自由に書いてください。
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-theme-ink/60" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="flex-1 rounded-lg border border-theme-border/60 bg-white/85 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-lavender focus:border-theme-lavender"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="今日はどんな一日でしたか？&#10;&#10;例：&#10;・新しいことに挑戦したこと&#10;・困難を乗り越えたこと&#10;・他者を助けたこと&#10;・自分が成長したと感じたこと"
                  className="min-h-[280px] w-full resize-none rounded-2xl border border-theme-border/60 bg-white/85 p-4 text-base text-theme-ink/85 focus:outline-none focus:border-theme-lavender focus:ring-2 focus:ring-theme-lavender/40 placeholder:text-theme-ink/40"
                />
                
                <div className="flex flex-col gap-3 border-t border-theme-border/60 pt-4">
                  <p className="text-center text-xs text-theme-ink/60">
                    {content.length} 文字
                  </p>
                  <div className="flex gap-3">
                    <Link href="/student/dashboard" className="flex-1">
                      <Button type="button" variant="outline" className="h-12 w-full rounded-full border-theme-border/60 text-theme-ink hover:bg-white">
                        キャンセル
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={!content.trim() || isSubmitting}
                      className="flex-1 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        "保存中..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          保存
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {showSuccess && (
            <div className="mt-4 rounded-2xl border border-theme-lavender/50 bg-theme-lavender/15 p-3 text-center text-sm text-theme-ink">
              記録を保存しました。
            </div>
          )}

          {/* ヒントカード */}
          <Card className="mt-6 border border-theme-border/60 bg-white/85 shadow-soft">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-xl bg-theme-sky/25 p-2">
                  <svg
                    className="h-4 w-4 text-theme-ink/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-theme-ink">
                    記録のヒント
                  </h3>
                  <ul className="space-y-1 text-xs text-theme-ink/70">
                    <li>• 具体的な行動や体験を書くと、より正確に分析できます</li>
                    <li>• 感情や気づきも大切な記録です</li>
                    <li>• 小さなことでも構いません。継続することが大切です</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
