import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import UserService from '../../services/UserService'
import { validationEmail, validationPassword } from '../../Utils/validation'
import { NavLink, useNavigate } from 'react-router-dom'


import { Container, Form, Sign } from './styles'

const userService = new UserService()

const Login = () => {
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState([{
		name: 'first',
		email: 'first@email.com',
		token: '1234567'
	}])
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			setLoading(true)
			const response = await userService.login(form)
			if(response === true) {
				alert('user successfully logged in')
				navigate('/home')
			}
			setLoading(false)
		} catch (error) {
			alert('there are a wrong :(' + error)
		}
	} 

	const handleChange = (event) => {
		console.log('Digitando', event.target.name, event.target.value)
		setForm({...form, [event.target.name]: event.target.value})
		console.log('Form', form)
	}

	const validationInput = () => {
		return validationEmail(form.email) && validationPassword(form.password)
	}
	console.log('is form ok?', validationInput())

	return ( 
		<Container>
			<Form>
				<Sign>
					<h1>Sign In </h1>
					<div>&#129409;</div>
				</Sign>
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
				<Button 
					type='submit'
					text='Entrar'
					onClick={handleSubmit}
					disabled={loading === true || !validationInput()}
				/>
				<Sign>
					<p>Não possui conta?</p>
					<NavLink to="register">Sign Up &#10024;</NavLink>
				</Sign>
			</Form>
		</Container>
	) 
}
 
export default Login;