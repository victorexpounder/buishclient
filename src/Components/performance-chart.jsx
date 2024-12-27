"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", thisWeek: 20, lastWeek: 25 },
  { month: "Feb", thisWeek: 40, lastWeek: 35 },
  { month: "Mar", thisWeek: 80, lastWeek: 50 },
  { month: "Apr", thisWeek: 70, lastWeek: 45 },
  { month: "May", thisWeek: 10, lastWeek: 15 },
  { month: "Jun", thisWeek: 20, lastWeek: 25 },
  { month: "Jul", thisWeek: 60, lastWeek: 50 },
  { month: "Aug", thisWeek: 45, lastWeek: 40 },
  { month: "Sep", thisWeek: 30, lastWeek: 35 },
  { month: "Oct", thisWeek: 35, lastWeek: 25 },
  { month: "Nov", thisWeek: 70, lastWeek: 65 },
  { month: "Dec", thisWeek: 60, lastWeek: 40 },
]

export function PerformanceChart() {
  return (
    (<div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Students Performance</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-400" />
            <span className="text-sm text-muted-foreground">This Week</span>
            <span className="font-semibold">1,245</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <span className="text-sm text-muted-foreground">Last Week</span>
            <span className="font-semibold">1,356</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="thisWeek"
              stroke="#60A5FA"
              fill="#60A5FA"
              fillOpacity={0.2} />
            <Area
              type="monotone"
              dataKey="lastWeek"
              stroke="#4ADE80"
              fill="#4ADE80"
              fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>)
  );
}

