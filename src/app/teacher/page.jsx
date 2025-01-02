"use client"

import React, { useState } from "react"
import { Plus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CourseList } from "./components/course-list"
import { QuizList } from "./components/quiz-list"
import { AddCourseDialog } from "./components/add-course-dialog"
import { AddQuizDialog } from "./components/add-quiz-dialog"

export default function TeacherDashboard() {
  const [addCourseOpen, setAddCourseOpen] = useState(false)
  const [addQuizOpen, setAddQuizOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("courses")

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        </div>

        <Tabs defaultValue="courses" className="space-y-6" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            </TabsList>
            <Button
              onClick={() => {
                if (activeTab === "courses") setAddCourseOpen(true)
                else setAddQuizOpen(true)
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </div>

          <TabsContent value="courses" className="space-y-6">
            <CourseList />
          </TabsContent>

          <TabsContent value="quizzes" className="space-y-6">
            <QuizList />
          </TabsContent>
        </Tabs>

        <AddCourseDialog open={addCourseOpen} onOpenChange={setAddCourseOpen} />
        <AddQuizDialog open={addQuizOpen} onOpenChange={setAddQuizOpen} />
      </div>
    </div>
  )
}

