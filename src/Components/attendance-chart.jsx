"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { day: "Mon", thisWeek: 70, lastWeek: 95 },
  { day: "Tue", thisWeek: 55, lastWeek: 40 },
  { day: "Wed", thisWeek: 30, lastWeek: 35 },
  { day: "Thu", thisWeek: 45, lastWeek: 50 },
  { day: "Fri", thisWeek: 20, lastWeek: 30 },
  { day: "Sat", thisWeek: 75, lastWeek: 65 },
  { day: "Sun", thisWeek: 55, lastWeek: 70 },
]

export function AttendanceChart() {
  return (
    (<div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Student Attendance</h3>
          <p className="text-sm text-muted-foreground">Weekly</p>
        </div>
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
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="thisWeek" fill="#60A5FA" />
            <Bar dataKey="lastWeek" fill="#4ADE80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>)
  );
}

