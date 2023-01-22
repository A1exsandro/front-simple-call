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

function Student() {
  return (  
    <StudentContainer>
      <StudentAvatar>AV</StudentAvatar>
      <StudentDescription>
        <StudentPresence>
          <StudentPresent>Presenças: 64</StudentPresent>
          <StudentAbsent>Faltas: 01</StudentAbsent>
        </StudentPresence>
        <StudentName>Student</StudentName> 
      </StudentDescription>
      <StudentStar>*****</StudentStar>
    </StudentContainer>
  )
}

export default Student 