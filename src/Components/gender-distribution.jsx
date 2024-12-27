"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Users } from 'lucide-react'

const data = [
  { name: "Girls", value: 1981, percentage: "63.4%" },
  { name: "Boys", value: 334, percentage: "36.6%" },
]

const COLORS = ["#60A5FA", "#4ADE80"]

export function GenderDistribution() {
  return (
    (<div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Students</h3>
      <div className="relative h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <Users className="h-8 w-8 text-gray-400" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={item.name} className="text-center">
            <p className="text-2xl font-bold" style={{ color: COLORS[index] }}>
              {item.value}
            </p>
            <p className="text-sm text-muted-foreground">
              {item.name.toLowerCase()} {item.percentage}
            </p>
          </div>
        ))}
      </div>
    </div>)
  );
}

