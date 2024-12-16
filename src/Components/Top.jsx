import { Search, Speaker, VolumeUp } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import voice from '../app/images/Voice.png'
import search from '../app/images/search.png'
import filter from '../app/images/filter.png'
import process from '../app/images/process.png'
import { useSelector } from 'react-redux'

const Top = ({currentUser}) => {
  
  return (
    <div className='w-full flex flex-col gap-9 lg:gap-3' style={{fontFamily: `"Poppins", sans-serif`}}>
      <div className='flex w-full lg:justify-between items-center max-lg:gap-4'>
            <div>
                <h3 className='font-semibold text-[24px] sm:text-[32px]'>Hi, {currentUser.username}</h3>
                <p className='text-[#545454CC] max-md:text-[13px] lg:w-[500px]'>What Computer Science Course would you like to learn  Today? Search Below.</p>
            </div>
            <VolumeUp fontSize='medium' sx={{color: 'var(--main-blue)'}}/>
      </div>

      <div className='flex items-center justify-center p-4 gap-2 rounded-xl lg:w-[70%]' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <Search/>
            <input type="text" placeholder='Search for..' className='w-full outline-none font-semibold text-[#B4BDC4]' />
            <div className='bg-[var(--main-blue)] p-2 rounded-lg'>
                <Image src={filter} width={20} height={20} alt='search'/>
            </div>
      </div>

      <div className='w-full px-7 pb-4 h-[180px] flex justify-center flex-col rounded-xl' style={{backgroundImage: "url('/offer.png')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <p className='text-[22px] sm:text-[30px] font-bold text-white'>Today’s Special</p>
        <p className='max-sm:w-full w-[500px] text-[13px] sm:text-[16px] font-bold text-white'>Summarized version of Python Programming for Machine Learning 2 
        (Deep Learning) added Today.!</p>
      </div>

    </div>
  )
}

export default Top
