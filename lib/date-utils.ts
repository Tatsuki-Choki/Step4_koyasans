import { format, parseISO } from "date-fns"
import { ja } from "date-fns/locale"

export function formatDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  return format(dateObj, "yyyy年M月d日", { locale: ja })
}

export function formatDateShort(date: string | Date): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  return format(dateObj, "M/d", { locale: ja })
}

export function formatDateISO(date: Date): string {
  return format(date, "yyyy-MM-dd")
}

export function getDateString(date: Date | string): string {
  if (typeof date === "string") {
    return date
  }
  return formatDateISO(date)
}

