"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { AlertCircle, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("エラーが発生しました:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="border border-theme-border/60 bg-white/85 shadow-soft-lg max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-xl bg-destructive/10 p-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-xl font-semibold text-theme-ink">
              エラーが発生しました
            </CardTitle>
          </div>
          <CardDescription className="text-theme-ink/70">
            予期しないエラーが発生しました。しばらくしてから再度お試しください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {process.env.NODE_ENV === "development" && (
              <div className="rounded-2xl bg-theme-sky/15 p-3">
                <p className="text-xs font-mono text-theme-ink/80 break-all">
                  {error.message}
                </p>
              </div>
            )}
            <div className="flex gap-3">
              <Button
                onClick={reset}
                className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                もう一度試す
              </Button>
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2 rounded-full border-theme-border/60 text-theme-ink hover:bg-white">
                  <Home className="h-4 w-4" />
                  ホームに戻る
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
