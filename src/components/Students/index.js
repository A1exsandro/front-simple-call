import { useEffect, useState } from 'react'
import axios from 'axios'
import { 
  StudentContainer,
  StudentAvatar,
  StudentDescription,
  StudentStar,
  StudentPresence,
  StudentPresent,
  StudentAbsent,
  StudentName
} from './styles'

const baseURL = process.env.REACT_APP_BASE_URL
 
function Student( {childToParent} ) { 
  const [students, setStudents] = useState([ ])
   
  // GET ALL STUDENTS
  useEffect(() => {
    axios.get(`${baseURL}/students`).then((response) => {
      setStudents(response.data)
    })
  },[ ])

  // STUDENT PRESENT
  function setPresent(student){ 
    student.present = true 

    axios.patch(`${baseURL}/students`, { 
		  student 
		})

    childToParent(students) 
  }

  // STUDENT ABSENT
  function setAbsent(student){ 
    student.present = false 

    axios.patch(`${baseURL}/students`, { 
		  student 
		})

    childToParent(students) 
  }
  
 
  return ( 
    students.map((student, index) => (
      <StudentContainer key={index}>
        <StudentAvatar>{student.id}</StudentAvatar>
        <StudentDescription>
          <StudentPresence>
            <StudentPresent onClick={() => setPresent(student)}>Presenças: {student.presences}</StudentPresent>
            <StudentAbsent onClick={() => setAbsent(student)}>Faltas: {student.absences}</StudentAbsent>
          </StudentPresence>
          <StudentName>{student.name}</StudentName> 
        </StudentDescription>
        <StudentStar>*****</StudentStar> 
      </StudentContainer> 
    )) 
  )
}

export default Student 