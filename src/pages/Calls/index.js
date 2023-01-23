import { useEffect, useState } from 'react'
import axios from 'axios'

import {  
  CallsContainer,
  CallsTitle,
  CallDaily,
  CallDate,
  CallStudents,
  CallName,
  CallPresent
} from './styles'

const baseURL = 'http://localhost:3000/calls'

function Calls() { 
  const [calls, setcalls] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setcalls(response.data)
    })
  },[])
 
  return(
    <CallsContainer>
      <CallsTitle>Calls</CallsTitle>
        {
          calls.map((call, index) => ( 
            <CallDaily key={index}>
              <CallDate>{ call.date }</CallDate>
              {
                  call.students.map((student, index) => (
                  <CallStudents key={index}> 
                    <CallName>{student.name}</CallName>
                    <CallPresent>{student.present.toString()}</CallPresent>
                  </CallStudents>
                ))
              } 
            </CallDaily>
          ))
        }  
    </CallsContainer>
     
  )
}

export default Calls 