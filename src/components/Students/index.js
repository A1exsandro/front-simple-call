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
  const [students, setStudents] = useState([]) 
 
  // GET ALL STUDENTS
  useEffect(() => {
    axios.get(`${baseURL}/students`).then((response) => {
      setStudents(response.data)
    })
  },[])

  // SET PRESENT TRUE OR FALSE
  const handlePresent = (student) => { 
    student.present = !student.present 
    childToParent(students) 
    console.log(student)  
  } 
 
  return ( 
    students.map((student, index) => (
      <StudentContainer key={index}>
        <StudentAvatar>{student.id}</StudentAvatar>
        <StudentDescription>
          <StudentPresence>
            <label >
              <input type="checkbox" onClick={() => handlePresent(student)}/>
            </label>
            <StudentPresent>Presenças: {student.presences}</StudentPresent>
            <StudentAbsent>Faltas: {student.absences}</StudentAbsent>
          </StudentPresence> 
          <StudentName>{student.name}</StudentName> 
        </StudentDescription>
        <StudentStar>*****</StudentStar>   
      </StudentContainer> 
    )) 
  )
}

export default Student 