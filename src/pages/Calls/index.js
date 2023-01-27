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
 
function Calls() { 
  const [calls, setCalls] = useState([])

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setCalls(response.data)
    })
  },[]) 
 
  return(
    <CallsContainer>
      <CallsTitle>Calls</CallsTitle>
      {
        calls.map((call, index) => ( 
          <CallDaily key={index}>
            <CallDate>{ new Date(call.date).toDateString() }</CallDate>
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