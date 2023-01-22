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

const baseURL = 'http://localhost:3000/students'

function Student() { 
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setStudents(response.data)
    })
  },[students])

  return ( 
    students.map((student, index) => (
      <StudentContainer key={index}>
        <StudentAvatar>{index}</StudentAvatar>
        <StudentDescription>
          <StudentPresence>
            <StudentPresent onClick={() => (alert('o Aluno está Presente'))}>Presenças: {student.present}</StudentPresent>
            <StudentAbsent onClick={() => (alert('o Aluno Faltou'))}>Faltas: {student.present}</StudentAbsent>
          </StudentPresence>
          <StudentName>{student.name}</StudentName> 
        </StudentDescription>
        <StudentStar>*****</StudentStar>
      </StudentContainer>
    )) 
  )
}

export default Student 