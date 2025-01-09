import { Chip } from '@mui/material'
import React from 'react'
import CourseCard from './CourseCard'

const Popular = () => {
  const studydata = [
    {
      img: '/courseimg.png',
      title: 'Computer Graphics',
      desc: 'Hardware Aspect',
      time: 40,
      rating: 4.2,
      std: 158
    },
    {
      img: '/courseimg2.png',
      title: 'Modelling',
      desc: 'Clipping Ai',
      time: 120,
      rating: 4.2,
      std: 158
    },
    {
      img: '/hierarchy.png',
      title: 'Modelling',
      desc: 'Clipping Ai',
      time: 120,
      rating: 4.2,
      std: 75
    },
    {
      img: '/courseimg3.png',
      title: 'Computer Graphics',
      desc: 'Hardware Aspect',
      time: 40,
      rating: 4.2,
      std: 158
    }
  ]
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-3'>
        <p className='text-[18px] lg:text-[22px] font-semibold'>Polupar Courses</p>
        <div className='flex gap-6 overflow-scroll'>
          <Chip label="All" className='text-[16px] font-semibold' onClick={()=>{}}/>
          <Chip label="Computer Graphics" color='success' onClick={()=>{}} className='text-[16px] font-semibold'/>
          <Chip label="Modelling" onClick={()=>{}} className='text-[16px] font-semibold'/>
          <Chip label="Simulation" onClick={()=>{}} className='text-[16px] font-semibold'/>
          <Chip label="World Wide Web" onClick={()=>{}} className='text-[16px] font-semibold'/>
        </div>
      </div>

      <div className='w-full flex max-sm:overflow-scroll md:grid grid-cols-2 gap-4'>
        {studydata.map((data, index)=>{
          return <a href={`/course/8888`} key={index}> <CourseCard data={data}/> </a>
        })

        }
          
          
      </div>
    </div>
  )
}

export default Popular
