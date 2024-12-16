import React from 'react'
import pen from '../app/images/pen.png'
import Image from 'next/image'
import profile from '../app/images/profile.jpeg'
import circle1 from '../app/images/circle1.png'
import circle2 from '../app/images/circle2.png'
import circle3 from '../app/images/circle3.png'
import circle4 from '../app/images/circle4.png'
import { Avatar, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

const ProgressSide = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className='w-full flex flex-col flex-[1] py-8 lg:mr-6 gap-4' style={{fontFamily: `"Poppins", sans-serif`}}>
      <div className='bg-white hidden rounded-xl w-[320px]  h-[310px] lg:block' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <div className='bg-[var(--main-blue)] flex justify-between items-center p-4 rounded-2xl'>
                <p className='font-extrabold text-white'>My Profile</p>
                <div className='bg-white p-1 rounded-lg'>
                    <Image src={pen} alt='pen' width={18} height={18}/>
                </div>
            </div>

            <div className='p-4 flex gap-4 items-center '>
                <Avatar
                alt={currentUser.username}
                src="https://s3-alpha-sig.figma.com/img/d732/791e/ba1ab7e927cb6b270bd9c56389af877a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1b4LbMKnTkjgzct~lwvfLKxz1T5WG0d2M92mDsdGr-ZhZt~bMwfURdbaSh9NDYnvpZsA8vdI2TNh7L2sXItMVVWp5B152bnS-sXhc-YnckUvqdDI3SGgJc7x-AGTTl2XW67FRm9sbtXO53kP0LkfKThBp-Zi~Qwi-LK8yzTxlX6OIVnbaNO07~JafjgH~PfxVqk-Xulkng1PeV6~d8Aw3OWHaA0HRtTNODpYdhCiUrq9B3GVWLKuHZLVwgCl1TVWdJSMggaO0eneKUVuLK43zWSTed3kCDQnstUdcp~HiGogv57N0tjd-gtg3oYZ-2DACw8l-FdnpRFOXhOuxw9OQ__"
                sx={{ width: 90, height: 90 }}
                />

                <div>
                    <p className='font-semibold'>Mr, {currentUser.username}</p>
                    <p className='text-[#767676] text-[14px]'>Undergraduate </p>
                </div>
            </div>
      </div>

        <div className='' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <p className='text-[20px] font-semibold p-3'>Progress Tracker</p>
            <div className='flex md:grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image alt='circle' src={circle1} width={100} height={100}/>
                    <p className='font-semibold max-sm:text-[10px]'>AI</p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image alt='circle' src={circle2} width={100} height={100}/>
                    <p className='font-semibold max-sm:text-[10px]'>HCI</p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image alt='circle' src={circle3} width={100} height={100}/>
                    <p className='font-semibold max-sm:text-[10px]'>Python</p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image alt='circle' src={circle1} width={100} height={100}/>
                    <p className='font-semibold max-sm:text-[10px]'>Research M.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProgressSide
