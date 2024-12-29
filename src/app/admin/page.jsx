'use client'
import { Users, GraduationCap, UserCheck } from 'lucide-react'
import { SearchInput } from "@/Components/search-input"
import { MetricCard } from "@/Components/metric-card"
import { PerformanceChart } from "@/Components/performance-chart"
import { GenderDistribution } from "@/Components/gender-distribution"
import { AttendanceChart } from "@/Components/attendance-chart"
import { StarStudents } from "@/Components/star-students"
import Sidebar from '@/Components/Sidebar'
import AdminSidebar from '@/Components/AdminSidebar'
import ProgressSide from '@/Components/ProgressSide'
import ProtectedRoute from '@/RequireAuth'
import { BottomNav } from '@/Components/ButtonNav'

export default function Dashboard() {
  return (
    (
    <ProtectedRoute>
      <div className='min-h-screen bg-gray-50 p-1 box-border flex'>
          <AdminSidebar/>
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
        <ProgressSide admin={true}/>
        <BottomNav />
      </div>
    </ProtectedRoute>
    
  )
  );
}

