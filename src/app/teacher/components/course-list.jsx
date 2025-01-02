import React from 'react'
import { CourseCard } from "./course-card"

export function CourseList() {
  const courses = [
    {
      id: 1,
      category: "Computer Graphics",
      title: "Hardware Aspect",
      duration: "40 mins",
      rating: 4.2,
      students: 158,
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      id: 2,
      category: "Modelling",
      title: "Clipping Ai",
      duration: "120 mins",
      rating: 4.2,
      students: 158,
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  )
}

