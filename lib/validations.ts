import { z } from "zod"

export const journalEntrySchema = z.object({
  content: z.string().min(10, "記録は10文字以上で入力してください").max(5000, "記録は5000文字以内で入力してください"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "日付の形式が正しくありません"),
  tags: z.array(z.string()).optional(),
})

export type JournalEntryInput = z.infer<typeof journalEntrySchema>

export const growthDataSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "日付の形式が正しくありません"),
  challenge: z.number().min(0).max(100),
  persistence: z.number().min(0).max(100),
  completion: z.number().min(0).max(100),
})

export type GrowthDataInput = z.infer<typeof growthDataSchema>

