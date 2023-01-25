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

const baseURL = 'http://localhost:3000'

function Student( {childToParent} ) { 
  const [students, setStudents] = useState([])
   
  useEffect(() => {
    axios.get(`${baseURL}/students`).then((response) => {
      setStudents(response.data)
    })
  },[ ])

  function setAbsent(student){ 
    student.present = false 
    childToParent(students)
    console.log(student) 
  }
 
  return ( 
    students.map((student, index) => (
      <StudentContainer key={index}>
        <StudentAvatar>{index + 1}</StudentAvatar>
        <StudentDescription>
          <StudentPresence>
            <StudentPresent onClick={() => (alert('o Aluno está Presente'))}>Presenças: {student.present}</StudentPresent>
            <StudentAbsent onClick={() => setAbsent(student)}>Faltas: {student.present.toString()}</StudentAbsent>
          </StudentPresence>
          <StudentName>{student.name}</StudentName> 
        </StudentDescription>
        <StudentStar>*****</StudentStar> 
      </StudentContainer> 
    )) 
  )
}

export default Student 