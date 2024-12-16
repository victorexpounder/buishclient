'use client'
import Sidebar from '@/Components/Sidebar'
import Top from '@/Components/Top'
import ProtectedRoute from '@/RequireAuth'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
      <div className='min-h-screen p-1 box-border flex'>
        <Sidebar/>
        <div className=' h-screen overflow-scroll flex flex-col lg:flex-row w-full gap-10'>
          
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default page
