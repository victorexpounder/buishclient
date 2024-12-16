'use client'
import Splash from '@/Components/Splash'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
import { useFormik } from 'formik';
import { auth, signup } from '@/auth'
import { loadingReset, loginFailure, loginLoading, loginSuccess, signupFailure } from '@/Redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, CircularProgress, Snackbar } from '@mui/material'
import NotProtectedRoute from '@/RequireNoAuth'
import { useRouter } from 'next/navigation'


const page = () => {
  const [visible, setVisible] = useState(false)
  const [login, setLogin] = useState(true)
  const loading = useSelector((state) => state.user.loading);
  const loginError = useSelector((state) => state.user.error);
  const dispatch = useDispatch()
  const router = useRouter();

  useEffect(()=>{
    dispatch(loadingReset())
  }, [])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async(values) => {
      try {
        dispatch(loginLoading())
        const details = await auth(values)
        dispatch(loginSuccess(details))
      } catch (error) {
        dispatch(loginFailure(error.response.data.detail))
        console.log(error)
      }
    },
  });

  const signUpFormik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      role : 'student',
      address : 'bells'
    },
    onSubmit: async(values) => {
      try {
        dispatch(loginLoading())
        const details = await signup(values)
        const logindetails = await auth({username: values.email, password: values.password})
        dispatch(loginSuccess(logindetails))
      } catch (error) {
        dispatch(signupFailure(error.response.data.detail))
        console.log(error)
      }
    },
  });

  return (
    <NotProtectedRoute>
      <div className='min-h-screen w-full flex ' style={{fontFamily: `"Poppins", sans-serif`}}>
        <div className='hidden flex-1 xl:flex'>
          <Splash/>
        </div>
        <div className='flex-[2] bg-white flex flex-col  items-center justify-center'>
          <div className='sm:w-[500px] w-full max-sm:p-4 flex gap-5 flex-col items-center justify-center'>
            <div className='flex items-center'>
              <p className='sm:text-[30px] text-[18px] '>Welcome to BUISH..!</p>
              <Image src={logo} width={42} height={42} alt='logo' className='lg:hidden'/>
            </div>
            <div className='w-full bg-[var(--light-blue)] flex justify-between p-3 rounded-full'>
                <div onClick={()=>setLogin(true)} className={`${login? 'bg-[var(--main-blue)]' : '' }  w-full flex items-center justify-center p-2 rounded-3xl text-white cursor-pointer`}>
                <p className='text-[16px] sm:text-[18px] font-bold'>Login</p>
                </div>
                <div onClick={()=>setLogin(false)} className={`${!login? 'bg-[var(--main-blue)]' : '' } w-full flex items-center justify-center p-2 rounded-3xl text-white cursor-pointer`}>
                <p className='text-[16px] sm:text-[18px] font-bold'>Register</p>
                </div>
            </div>
              {login?
                <div className='w-full flex flex-col gap-5'>
                  <div className='w-full mt-4'>
                    <p className='text-[24px]' >Let’s Login In..!</p>
                    <p className='text-[16px] text-[#5B5B5B]'>Login to Your Account to Continue your Courses</p>
                  </div>

                  <div className='w-full'>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="username">Email</label>
                        <input type="text" 
                          name='username' 
                          placeholder='Enter Your User name' 
                          className='border border-[var(--light-blue)] p-3 rounded-full outline-none'
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          required
                        />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        
                        <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                          <input type={visible? 'text' : 'password'}
                            name='password' 
                            placeholder='Enter Your Password' 
                            className=' outline-none w-full'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            required
                          />
                          {visible? <Visibility fontSize='small' onClick={()=>{setVisible(!visible)}}/> : <VisibilityOff fontSize='small' onClick={()=>{setVisible(!visible)}}/>}
                        </div>

                        <div className='mt-3 flex justify-between'>
                          <div className='flex justify-center items-center gap-2'>
                          <input type='checkbox' name='check'/>
                          <label htmlFor="check" className='font-light text-[14px]'>Remember me</label>
                          </div>
                          <a href='' className='font-light text-[14px]'>Forgot Password?</a>
                        </div>
                      </div>

                      <button type='submit' className='w-full bg-[var(--main-blue)] p-4 rounded-full text-white font-bold text[16px]'>
                        {loading?
                          <CircularProgress />
                          :
                          "Login"
                        }
                      
                      </button>
                    </form>

                  </div>

                </div>
                :
                <div className='w-full flex flex-col gap-5'>
                  <div className='w-full mt-4'>
                    <p className='text-[24px]' >Getting Started..!</p>
                    <p className='text-[16px] text-[#5B5B5B]'>Create an account to begin your Courses</p>
                  </div>

                  <div className='w-full'>
                    <form action="" onSubmit={signUpFormik.handleSubmit} className='flex flex-col gap-6'>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="username">Email Address</label>
                        <input type="email" 
                          name='email' 
                          placeholder='Enter Your User name' 
                          className='border border-[var(--light-blue)] p-3 rounded-full outline-none'
                          onChange={signUpFormik.handleChange}
                          value={signUpFormik.values.email}
                          required
                        />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor="username">User name</label>
                        <input type="text" 
                          name='username' 
                          placeholder='Enter Your User name' 
                          className='border border-[var(--light-blue)] p-3 rounded-full outline-none'
                          onChange={signUpFormik.handleChange}
                          value={signUpFormik.values.username}
                          required
                        />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor="role">Role</label>
                        <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                          <select 
                            name="role" 
                            id="" 
                            className=' outline-none w-full'
                            onChange={signUpFormik.handleChange}
                            value={signUpFormik.values.role}
                            required
                          >
                            <option value="student">student</option>
                            <option value="teacher">teacher</option>
                            <option value="admin">admin</option>
                          </select>
                        </div>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor="username">Password</label>
                        
                        <div className='border border-[var(--light-blue)] p-3 rounded-full flex justify-between items-center'>
                          <input type={visible? 'text' : 'password'}
                            name='password' 
                            placeholder='Enter Your Password' 
                            className=' outline-none w-full'
                            onChange={signUpFormik.handleChange}
                            value={signUpFormik.values.password}
                            required
                          />
                          {visible? <Visibility fontSize='small' onClick={()=>{setVisible(!visible)}}/> : <VisibilityOff fontSize='small' onClick={()=>{setVisible(!visible)}}/>}
                        </div>

                        {login &&
                          <div className='mt-3 flex justify-between'>
                            <div className='flex justify-center items-center gap-2'>
                            <input type='checkbox' name='check'/>
                            <label htmlFor="check" className='font-light text-[14px]'>Remember me</label>
                            </div>
                            <a href='' className='font-light text-[14px]'>Forgot Password?</a>
                          </div>
                        }
                      </div>

                      <button type='submit' className='w-full bg-[var(--main-blue)] p-4 rounded-full text-white font-bold text[16px]'>{loading? <CircularProgress/> : "Register"}</button>
                    </form>

                  </div>
                </div>
              }
            
              <Snackbar open={loginError} autoHideDuration={4000} onClose={()=>dispatch(loadingReset())}>
                <Alert
                  onClose={()=>dispatch(loadingReset())}
                  severity="warning"
                  variant="filled"
                  sx={{ width: '100%' }}
                >
                  {loginError}
                </Alert>
              </Snackbar>
          </div>

        </div>

      </div>
    </NotProtectedRoute>
    
  )
}

export default page
