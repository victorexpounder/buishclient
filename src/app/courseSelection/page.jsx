'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

import React from 'react'

const page = () => {
    const router  = useRouter()
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='font-bold text-2xl' >Select Mode</h1>
      <div className='flex gap-3'>
        <Button variant='contained' onClick={()=> router.push('/')}>Study</Button>
        <Button variant='contained'>Practice</Button>
      </div>
    </div>
  )
}

export default page
