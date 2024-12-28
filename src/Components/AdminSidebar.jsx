import Image from 'next/image'
import React from 'react'
import logo from '../app/images/logo.png'
import { Chat, Home, Logout, Note, Person2Rounded, Settings } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { logout } from '@/Redux/userSlice'
import { useDispatch } from 'react-redux'
const AdminSidebar = () => {
    const dispatch = useDispatch()
  return (
    <div className='w-[80px] rounded-3xl h-screen bg-[var(--main-blue)]  hidden sm:flex flex-col justify-between items-center p-4'>
      <div className='flex flex-col gap-20 justify-center items-center'>
        <div className='bg-[#D9D9D9] w-[52px] h-[52px] rounded-full flex items-center justify-center'>
            <Image src={logo} width={50} height={50} alt='logo'/>
        </div>
        <div className='flex flex-col gap-10 cursor-pointer'>
            <a href="/admin"><Home className='text-white'/></a> 
            <a href="/course"><Note className='text-white'/></a> 
            <Person2Rounded className='text-white'/>
            <Tooltip title='Log Out'>
              <Logout className='text-white' onClick={()=>{dispatch(logout())}} />
            </Tooltip>
        </div>
      </div>
      <Settings className='text-white'/>
    </div>
  )
}

export default AdminSidebar
