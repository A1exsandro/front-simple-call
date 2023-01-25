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

const baseURL = 'http://localhost:3000'

function Call() {
  const [data, setData] = useState([])

  const childToParent = (childdata) => {
    setData(childdata);
  } 

	function createCall() {
		axios.post(`${baseURL}/calls`, { 
      date:  '2023-01-01',
		  students: data 
		}) 
  }

	return (
		<CallContainer>
			<CallTitle>Call</CallTitle> 
			<CallDate type="date"></CallDate>

			<Student childToParent={childToParent}/> 

			<CallResume>
				Total de Alunos: 45 - Total de Faltas: 5
			</CallResume>
			<CallSubmit onClick={() => (alert('Chamada Realizada com Sucesso!!!'))}>Enviar</CallSubmit>
			<button onClick={createCall}>Criar</button>
		</CallContainer>
	)
}

export default Call
