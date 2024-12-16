'use client'
import Splash from '@/Components/Splash'
import NotProtectedRoute from '@/RequireNoAuth'
import { ArrowRight } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()

    const update = (e)=>{
        e.preventDefault()
        console.log('go')
        router.push('/success')
    }
  return (
    <NotProtectedRoute>
      <div className='w-full min-h-screen flex'>
        <div className='hidden flex-1 xl:flex'>
          <Splash/>
        </div>

        <div className='flex-[2] bg-white flex flex-col  items-center justify-center'>
          <div className='sm:w-[500px] w-full max-sm:p-4 flex gap-5 flex-col items-center justify-center'>
            <div className='flex items-center'>
              <p className='sm:text-[28px] text-[18px] font-semibold '>Almost done, fill your profile</p>
              
            </div>
            

            

            <div className='w-full'>
              <form onSubmit={update} className='flex flex-col gap-6'>
                
                  <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                    <input type='text'
                      name='username' 
                      placeholder='Full Name' 
                      className=' outline-none w-full'
                    />
                    
                  </div>

                  <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                    <input type='date'
                      name='username' 
                      placeholder='Date Of Birth' 
                      className=' outline-none w-full'
                    />
                    
                  </div>
                  <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                      <select name="" id="" className=' outline-none w-full'>
                          <option value="male">male</option>
                          <option value="female">female</option>
                      </select>
                  </div>
                  <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                      <select name="" id="" className='outline-none w-full'>
                          <option value="male">COLNAS</option>
                          <option value="female">COLENG</option>
                          <option value="female">COLFAST</option>
                          <option value="female">COLMANS</option>
                          <option value="female">COLENVS</option>
                      </select>
                  </div>
                  <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                    <input type='text'
                      name='username' 
                      placeholder='Program' 
                      className=' outline-none w-full'
                    />
                  </div>

                  <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                      <select name="" id="" className='outline-none w-full'>
                          <option value="100">100</option>
                          <option value="200">200</option>
                          <option value="300">300</option>
                          <option value="400">400</option>
                          <option value="500">500</option>
                      </select>
                  </div>

                
                <button type='submit' className='w-full bg-[var(--main-blue)] p-4 rounded-full text-white font-bold text[16px]'>Continue <ArrowRight/> </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </NotProtectedRoute>
  )
}

export default page
