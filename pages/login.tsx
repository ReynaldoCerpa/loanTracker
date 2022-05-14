import { Input, InputWrapper } from '@mantine/core';
import Link from 'next/link';
import { FC, useState } from 'react';
import { validateLoginInputs } from '../utils/validteInputs';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Login : FC = () => {

	const [loading, setLoading] = useState(false)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [usernameMessage, setUsernameMessage] = useState("")
	const [passwordMessage, setPasswordMessage] = useState("")


	return (
		<div className="reg-log-cont">
			<Logo
				className="mb-5"
			/>
			<div className="form-card form-card-mq">
				<h1 className="text-[1.5rem] font-source mx-auto mb-4">Inicie Sesión</h1>
				<InputWrapper
					error={usernameMessage}
					className="mb-5"
				>
					<Input
						value={username}
						onInput={(e:any)=>setUsername(e.target.value)}
						placeholder="Nombre de usuario"
					/>
				</InputWrapper>
				<InputWrapper
					error={passwordMessage}
					className="mb-2"
				>
					<Input
						value={password}
						onInput={(e:any)=>setPassword(e.target.value)}
						placeholder="Contraseña"
						type={'password'}
					/>
				</InputWrapper>
				<div className="flex flex-col sm:flex-row mb-16 ">
					<p>No tiene cuenta?</p>
					<Link href="/register"> 
						<a className="text-primary cursor-pointer sm:ml-1">Regístrese</a>
					</Link>
				</div>
				
				<Button
					loading={loading}
					title="Iniciar sesión"
					className="base-button bg-primary text-white w-full"
					onClick={() => {
						setLoading(true)
						const valid = validateLoginInputs({username, password, setUsernameMessage, setPasswordMessage})
						if (valid) setLoading(false)
					}}
				/>
			</div>
		</div>
	)
}


export default Login
