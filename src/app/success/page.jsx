'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import success from '../images/process.png'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/Redux/userSlice'
import NotProtectedRoute from '@/RequireNoAuth'

const file = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loginSuccess(details))
  }, [])
  return (
    <NotProtectedRoute>
      <div className='w-full min-h-screen flex items-center justify-center bg-[var(--light-blue)]'>
        <Image src={success} width={300} height={300} alt='success'/>
      </div>
    </NotProtectedRoute>
  )
}

export default file
