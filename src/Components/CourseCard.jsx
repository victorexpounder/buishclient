import { Bookmark, Save } from '@mui/icons-material';
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import React from 'react'

const CourseCard = ({data}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='max-sm:w-[250px] cursor-pointer' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data?.img}
      />
      <CardContent>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <p className='text-[#FF6B00] font-semibold'>{data?.title}</p>
            <Bookmark/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>{data?.desc}</p>
            <div className='flex gap-4'>
              <p className='text-[#0392D7] text-[15px] font-semibold'>{data?.time} mins</p>
              |
              <p className='font-semibold text-[15px]'>{data?.rating}</p>
              |
              <p className='font-semibold text-[15px]'>{data?.std}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default CourseCard
