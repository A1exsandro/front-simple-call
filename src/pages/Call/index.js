import { useState } from 'react'
import axios from 'axios'
import Student from '../../components/Students'

import { 
	CallContainer,
	CallTitle, 
	CallSubmit,
	CallResume
} from './styles' 

const baseURL = process.env.REACT_APP_BASE_URL  
 
function Call() {
  const [data, setData] = useState([])
  const dateCall = new Date( ) 

  const childToParent = (childData) => {
    setData(childData) 
  } 

  const createCall = () => {
		axios.post(`${baseURL}/calls`, { 
      date:  dateCall.toISOString(),
		  students: data 
		}) 
  }

  const handleCall = () => { 
    data.map((std) => (
      axios.patch(`${baseURL}/students`, { 
        std
      })
    ))

    createCall()
  } 

	return (
		<CallContainer>
			<CallTitle>Call</CallTitle> 
      <CallTitle>{ dateCall.toDateString() }</CallTitle> 

      <Student childToParent={childToParent}/> 
      
			<CallResume>
				Total de Alunos: 45 - Total de Faltas: 5
			</CallResume>
			<CallSubmit onClick={handleCall}>Enviar</CallSubmit> 
		</CallContainer>
	)
}

export default Call
