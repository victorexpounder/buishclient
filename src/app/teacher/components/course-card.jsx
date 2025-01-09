import React from 'react'
import { Bookmark } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CourseCard({ category, title, length, rating, students, image }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative p-0">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <div className="text-sm font-medium text-orange-500">{category}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="text-sm text-muted-foreground">{length} mins</div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium">{rating}</div>
          <div className="text-sm text-muted-foreground">{students} students</div>
        </div>
      </CardFooter>
    </Card>
  )
}

