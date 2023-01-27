import { useState } from 'react'
import axios from 'axios'
import Student from '../../components/Students'

import { 
	CallContainer,
	CallTitle,
	CallDate,
	CallSubmit,
	CallResume
} from './styles'
 
function Call() {
  const [data, setData] = useState([])
  const dateCall = new Date( )
  console.log(dateCall)

  const childToParent = (childdata) => {
    setData(childdata);
  } 

	function createCall() {
		axios.post(`${BASE_URL}/calls`, { 
      date:  dateCall.toISOString(),
		  students: data 
		}) 
  }

	return (
		<CallContainer>
			<CallTitle>Call</CallTitle> 
      <CallTitle>{ dateCall.toDateString() }</CallTitle>
			{/* <CallDate type="date"></CallDate> */}

			<Student childToParent={childToParent}/> 

			<CallResume>
				Total de Alunos: 45 - Total de Faltas: 5
			</CallResume>
			<CallSubmit onClick={createCall}>Enviar</CallSubmit> 
		</CallContainer>
	)
}

export default Call
