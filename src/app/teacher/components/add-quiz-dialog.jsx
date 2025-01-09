"use client"

import React from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { Plus, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import { Textarea } from "@/Components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group"

export function AddQuizDialog({ open, onOpenChange }) {
  const form = useForm({
    defaultValues: {
      title: "",
      duration: "",
      questions: [
        {
          text: "",
          options: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
        },
      ],
    },
  })

  const { fields: questions, append: appendQuestion, remove: removeQuestion } = useFieldArray({
    control: form.control,
    name: "questions",
  })

  function onSubmit(values) {
    console.log(values)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Quiz</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quiz Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter quiz title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter quiz duration" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Questions</h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => appendQuestion({
                    text: "",
                    options: [
                      { text: "", isCorrect: false },
                      { text: "", isCorrect: false },
                      { text: "", isCorrect: false },
                      { text: "", isCorrect: false },
                    ],
                  })}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Question
                </Button>
              </div>

              {questions.map((question, questionIndex) => (
                <div key={question.id} className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium">Question {questionIndex + 1}</h5>
                    {questionIndex > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeQuestion(questionIndex)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name={`questions.${questionIndex}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Question Text</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter question text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <FormLabel>Options</FormLabel>
                    {question.options.map((option, optionIndex) => (
                      <FormField
                        key={optionIndex}
                        control={form.control}
                        name={`questions.${questionIndex}.options.${optionIndex}.text`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center gap-2">
                                <Input placeholder={`Option ${optionIndex + 1}`} {...field} />
                                <FormField
                                  control={form.control}
                                  name={`questions.${questionIndex}.options.${optionIndex}.isCorrect`}
                                  render={({ field: radioField }) => (
                                    <FormItem>
                                      <FormControl>
                                        <RadioGroup
                                          onValueChange={(value) => {
                                            question.options.forEach((opt, idx) => {
                                              form.setValue(`questions.${questionIndex}.options.${idx}.isCorrect`, idx === optionIndex);
                                            });
                                          }}
                                          value={radioField.value ? optionIndex.toString() : undefined}
                                        >
                                          <RadioGroupItem value={optionIndex.toString()} />
                                        </RadioGroup>
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full">
              Create Quiz
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

