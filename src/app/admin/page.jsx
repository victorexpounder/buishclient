'use client'
import { Users, GraduationCap, UserCheck } from 'lucide-react'
import { SearchInput } from "@/components/search-input"
import { MetricCard } from "@/components/metric-card"
import { PerformanceChart } from "@/components/performance-chart"
import { GenderDistribution } from "@/components/gender-distribution"
import { AttendanceChart } from "@/components/attendance-chart"
import { StarStudents } from "@/components/star-students"
import Sidebar from '@/Components/Sidebar'

export default function Dashboard() {
  return (
    (
    <div className='min-h-screen bg-gray-50 p-1 box-border flex'>
      <Sidebar/>
      <div className="h-screen bg-gray-50 p-6 overflow-y-scroll">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="w-72">
              <SearchInput />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <MetricCard icon={Users} label="Students Present" value="2315" className="bg-blue-50" />
            <MetricCard
              icon={GraduationCap}
              label="Students Learning"
              value="439"
              className="bg-green-50" />
            <MetricCard icon={UserCheck} label="Teachers" value="103" className="bg-orange-50" />
          </div>

          <PerformanceChart />

          <div className="grid gap-6 md:grid-cols-2">
            <GenderDistribution />
            <AttendanceChart />
          </div>

          <StarStudents />
        </div>
      </div> 
    </div>
    
  )
  );
}

