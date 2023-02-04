import axios from 'axios'
import { useForm } from "react-hook-form"
import Button from '../../components/Button'

import { Form } from './styles'

const baseURL = process.env.REACT_APP_BASE_URL 

function RegisterStudent(){
  const { register, handleSubmit } = useForm()
  const createStudent = (data) => {
		axios.post(`${baseURL}/students`, { 
      name: data.name  
		})  
  } 
 
	return( 
    <Form >
      <input {...register("name")} placeholder="Nome do Aluno" /> 
      <Button 
        type='submit'
        text='Register'
        onClick={handleSubmit( createStudent )} 
      />
    </Form> 
	)
}

export default RegisterStudent