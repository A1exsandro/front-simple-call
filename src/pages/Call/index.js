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

  const childToParent = (childdata) => {
    setData(childdata);
  } 

	function createCall() {
		axios.post(`${baseURL}/calls`, { 
      date:  dateCall.toISOString(),
		  students: data 
		}) 
  }

	return (
		<CallContainer>
			<CallTitle>Call</CallTitle> 
      <CallTitle>{ dateCall.toDateString() }</CallTitle> 

			<Student childToParent={childToParent}/> 

			<CallResume>
				Total de Alunos: 45 - Total de Faltas: 5
			</CallResume>
			<CallSubmit onClick={createCall}>Enviar</CallSubmit> 
		</CallContainer>
	)
}

export default Call
