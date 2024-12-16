'use client'
import Popular from '@/Components/Popular';
import ProgressSide from '@/Components/ProgressSide';
import Sidebar from '@/Components/Sidebar';
import FullWidthTabs from '@/Components/Tabs';
import Top from '@/Components/Top';
import ProtectedRoute from '@/RequireAuth';
import React from 'react'
import { useSelector } from 'react-redux';

const dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  

  return (
    <ProtectedRoute>
      <div className='min-h-screen p-1 box-border flex'>
        <Sidebar/>
        <div className=' h-screen overflow-scroll flex flex-col lg:flex-row w-full gap-10'>
          <div className='h-screen lg:overflow-scroll  py-3 flex flex-col flex-[2.5] lg:pl-10 max-lg:px-5 gap-6'>
            <Top currentUser={currentUser}/>

            <FullWidthTabs/>
            
          </div>
          <div className='max-sm:px-4'>
            <ProgressSide/>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default dashboard
