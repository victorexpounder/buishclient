import Image from 'next/image'
import React from 'react'
import logo from '../app/images/logo.png'
import shape from '../app/images/SHAPE.png'
const Splash = () => {
  return (
    <div className='min-h-screen w-full bg-[#0392D7] flex items-center justify-center'>
      <div className='flex flex-col gap-8 items-center justify-center'>
            <div className='bg-white rounded-full w-[320px] h-[320px] flex items-center justify-center relative'>
                <Image src={logo} width={240} height={187} alt='bells logo' />
                <Image src={shape} width={310} height={310} alt='bells logo' className='absolute left-7 top-2' />
            </div>

            <div className='flex items-center justify-center'>
                <p className='text-center text-2xl font-semibold text-white lg:text-3xl'>BELLS UNIVERSITY <br />INTERACTIVE STUDY HUB </p>
            </div>
      </div>
    </div>
  )
}

export default Splash
