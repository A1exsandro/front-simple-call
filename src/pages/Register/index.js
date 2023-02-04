import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import UserService from '../../services/UserService'
import { validationEmail, validationPassword, validationName, validationPhone, validationConfirmPassword } from '../../Utils/validation'
import { NavLink, useNavigate } from 'react-router-dom'


import { Container, Form, Sign } from './styles'

const userService = new UserService()

const Register = () => {
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState([{}])
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.register({
        name: form.name,
        phone: form.phone,
        email: form.email,
        password: form.password,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  } 

	const handleChange = (event) => {
		setForm({...form, [event.target.name]: event.target.value})
	}

	const validationInput = () => {
		return validationEmail(form.email) 
		&& validationPassword(form.password)
		&& validationPhone(form.phone)
		&& validationConfirmPassword(form.password, form.confirmPassword)
		&& validationName(form.name)
  }

	return ( 
		<Container>
			<Form>
				<h1>Sign Up &#129409;</h1>
        <Input 
          name='name'
          placeholder='Digite seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input 
          name='phone'
          placeholder='Digite se telefone'
          onChange={handleChange}
          type='number'
        />
				<Input 
					name='email'
					placeholder='Digite o seu e-mail'
					onChange={handleChange}
					type='email'
				/>
				<Input 
					name='password'
					placeholder='Digite a sua senha'
					onChange={handleChange}
					type='password'
				/>
        <Input 
          name='confirmPassword'
          placeholder='Confirme sua senha'
          onChange={handleChange}
          type='password'
        />
				<Button 
					type='submit'
					text='Registrar'
					onClick={handleSubmit}
					disabled={loading === true || !validationInput()}
				/>
				<Sign>
					<p>Já possui conta?</p>
					<NavLink to="*">Sign In &#10024;</NavLink>
				</Sign>
			</Form>
		</Container>
	) 
}
 
export default Register