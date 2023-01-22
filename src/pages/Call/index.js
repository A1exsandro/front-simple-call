import Student from '../../components/Students'

import { 
	CallContainer,
	CallTitle,
	CallDate,
	CallSubmit
} from './styles'

function Call() {
	return (
		<CallContainer>
			<CallTitle>Call</CallTitle>
			<CallDate>01/01/23</CallDate>
			<Student />
			<CallSubmit>Enviar</CallSubmit>
		</CallContainer>
	)
}

export default Call
