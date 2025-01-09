"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { addCourse } from '@/course'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar } from '@mui/material'
import { addToCourses, fetchLoading } from '@/Redux/coursesSlice'



export function AddCourseDialog({ open, onOpenChange }) {

  const currentUser = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.courses.loading);
  const error = useSelector((state) => state.courses.error);
  const [snackOpen, setSnackOpen] = React.useState(false)
  const dispatch = useDispatch()
  const form = useForm({
    defaultValues: {
      category: "",
      title: "",
      duration: "",
      image: "",
    },
  })

  async function onSubmit(values) {
    // Handle form submission
    try {
      dispatch(fetchLoading())
      const details = await addCourse(values, currentUser.access_token)
      console.log(details)
      dispatch(addToCourses(details.courses))
      setSnackOpen(true)
    } catch (error) {
      console.log(error)
      dispatch(addError(error))
    }
   
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="length"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl >
                    <Input type="number" placeholder="Enter course duration" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              { 
                loading ? "Adding Course..." : "Add Course"
              }
              Add Course
            </Button>
          </form>
        </Form>
      </DialogContent>

      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={()=>setSnackOpen(false)} message="Course added successfully" />
    </Dialog>
  )
}

