import { MoreVertical } from 'lucide-react'
import { Avatar } from "@/Components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"

const students = [
  {
    id: 1,
    name: "Micheal",
    matricNo: "ID 123456789",
    attendance: "104",
    exam: "98%",
  },
  {
    id: 2,
    name: "Tony",
    matricNo: "ID 123456789",
    attendance: "100",
    exam: "96%",
  },
  {
    id: 3,
    name: "James",
    matricNo: "ID 123456789",
    attendance: "98",
    exam: "95%",
  },
]

export function StarStudents() {
  return (
    (<div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Star Students</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Matric No</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Exam</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-blue-100" />
                {student.name}
              </TableCell>
              <TableCell className="text-blue-500">{student.matricNo}</TableCell>
              <TableCell>{student.attendance}</TableCell>
              <TableCell>{student.exam}</TableCell>
              <TableCell>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)
  );
}

