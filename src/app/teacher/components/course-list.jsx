import React, { useEffect } from 'react'
import { CourseCard } from "./course-card"
import { getUserCourses } from '@/course'
import { useDispatch, useSelector } from 'react-redux';
import { addToCourses } from '@/Redux/coursesSlice';

export function CourseList() {
  const courses = useSelector((state) => state.courses.courses);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch()

  const fetchCourses = async () => {
    // Fetch courses from the server
    try {
      const res = await getUserCourses(currentUser.access_token)
      dispatch(addToCourses(res))
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {
        courses.length > 0 ?
        courses?.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))
        :
        <div className="text-center text-lg text-gray-500">
          No courses found
        </div>
      }
    </div>
  )
}

