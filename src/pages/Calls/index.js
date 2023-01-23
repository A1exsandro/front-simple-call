import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3000/calls'

function Calls() { 
  const [calls, setcalls] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setcalls(response.data)
    })
  },[])

  

  return(
    
    <div>Calls 
      <table>
        <thead>
          <tr> 
            <th>Chamadas</th>  
          </tr> 
        </thead>
        {
          calls.map((call, index) => ( 
            <tbody key={index}>
              <tr>
                <td>{ call.date }</td>
              </tr> 
                {
                  call.students.map((student, index) => (
                    <tr key={index}>
                      <td >{student.name}</td>
                      <td >{student.present.toString()}</td>
                    </tr>
                  ))
                } 
            </tbody>  
          ))
        }  
      </table>
    </div>
  )
}

export default Calls 