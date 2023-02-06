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
  StudentName,   
} from './styles'

const baseURL = process.env.REACT_APP_BASE_URL 
 
function Student() { 
  const [students, setStudents] = useState([{}]) 
 
  // GET ALL STUDENTS
  useEffect(() => {
    axios.get(`${baseURL}/students`).then((response) => {
      setStudents(response.data)
    })
  },[])

  const handleDelete = (student) => {
    axios.patch(`${baseURL}/students`, {
      student
    })
    console.log(student)
  }
 
  return (  
    students.map((student, index) => (
      <StudentContainer key={index}>
        <StudentAvatar onClick={() => handleDelete(student)}>{student.id}</StudentAvatar>
        <StudentDescription>
          <StudentPresence> 
            <StudentPresent>Presenças: {student.presences}</StudentPresent>
            <StudentAbsent>Faltas: {student.absences}</StudentAbsent>
          </StudentPresence> 
          <StudentName>{student.name}</StudentName> 
        </StudentDescription>
        <StudentStar>&#11088; &#11088;</StudentStar> 
      </StudentContainer> 
    ))  
  )
}

export default Student 