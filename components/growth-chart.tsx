"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import type { WeeklyGrowthData } from "@/types"

export default function GrowthChart({ data }: { data: WeeklyGrowthData[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="week"
          stroke="#6b7280"
          style={{ fontSize: "10px" }}
        />
        <YAxis
          stroke="#6b7280"
          style={{ fontSize: "10px" }}
          domain={[0, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <Legend wrapperStyle={{ fontSize: "12px" }} />
        <Line
          type="monotone"
          dataKey="challenge"
          stroke="#B8DCD4"
          strokeWidth={3}
          dot={{ fill: "#B8DCD4", r: 4 }}
          name="チャレンジ"
        />
        <Line
          type="monotone"
          dataKey="persistence"
          stroke="#F2D6D6"
          strokeWidth={3}
          dot={{ fill: "#F2D6D6", r: 4 }}
          name="諦めない"
        />
        <Line
          type="monotone"
          dataKey="completion"
          stroke="#D4E9E2"
          strokeWidth={3}
          dot={{ fill: "#D4E9E2", r: 4 }}
          name="やり遂げる"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
