'use client'
import { BottomNav } from '@/Components/ButtonNav'
import AccordionIndicator from '@/Components/CoursesAccordion'
import Sidebar from '@/Components/Sidebar'
import Top from '@/Components/Top'
import ProtectedRoute from '@/RequireAuth'
import { Avatar } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
      <div className='min-h-screen p-1 box-border flex'>
        <Sidebar/>
        <div className=' h-screen overflow-scroll flex flex-col lg:flex-row w-full gap-10 p-4'>
          <div className="flex flex-col gap-4">
            <video controls className='rounded-xl' >
                <source src={"https://videos.pexels.com/video-files/2795171/2795171-uhd_2560_1440_25fps.mp4"} type="video/mp4" />
                <source src={"https://videos.pexels.com/video-files/2795171/2795171-uhd_2560_1440_25fps.mp4"} type="video/quicktime" />
                Your browser does not support the video tag.
            </video>

            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold text-[1.5rem]'>VUE JS SCRATCH COURSE</h3>

              <div className='flex gap-2 items-center '>
                <Avatar alt={'Noah'} src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800' />
                <div className='text-[0.8rem]'>
                  <p className='text-[var(--main-blue)] font-semibold'>Noah Attah</p>
                  <p className='text-gray-500'>Lecturer</p>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-[1rem]'>About Course</h3>
                <p>
                Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
                </p>
              </div>
            </div>
          </div>

          <div>
            <AccordionIndicator/>
          </div>
        </div>
        <BottomNav/>
      </div>
    </ProtectedRoute>
  )
}

export default page
