import Student from '../../components/Students'

import { 
	CallContainer,
	CallTitle,
	CallDate,
	CallSubmit,
	CallResume
} from './styles'

function Call() {
	return (
		<CallContainer>
			<CallTitle>Call</CallTitle> 
			<CallDate type="date"></CallDate>
			<Student />  
			<CallResume>
				Total de Alunos: 45 - Total de Faltas: 5
			</CallResume>
			<CallSubmit onClick={() => (alert('Chamada Realizada com Sucesso!!!'))}>Enviar</CallSubmit>
		</CallContainer>
	)
}

export default Call
