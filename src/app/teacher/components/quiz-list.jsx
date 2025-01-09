import React from 'react'
import { Button } from "@/Components/ui/button"

export function QuizList() {
  const quizzes = [
    {
      id: 1,
      title: "Computer Graphics Basics",
      questions: 10,
      duration: "30 mins",
    },
    {
      id: 2,
      title: "3D Modeling Fundamentals",
      questions: 15,
      duration: "45 mins",
    },
  ]

  return (
    <div className="space-y-4">
      {quizzes.map((quiz) => (
        <div
          key={quiz.id}
          className="flex items-center justify-between rounded-lg border bg-white p-4"
        >
          <div>
            <h3 className="font-semibold">{quiz.title}</h3>
            <p className="text-sm text-muted-foreground">
              {quiz.questions} questions · {quiz.duration}
            </p>
          </div>
          <Button variant="outline">Edit</Button>
        </div>
      ))}
    </div>
  )
}

