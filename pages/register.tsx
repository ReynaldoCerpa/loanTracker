import { FC, useState } from "react"
import Input from "../components/Input"
import { validateRegisterInputs } from '../utils/validateInputs';
import Link from 'next/link';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Register : FC = () => {

	const [loading, setLoading] = useState(false)
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [emailMessage, setEmailMessage] = useState("")
	const [usernameMessage, setUsernameMessage] = useState("")
	const [passwordMessage, setPasswordMessage] = useState("")
	const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("")

	return (
		<div className="reg-log-cont">
		<Logo
				className="mb-5"
		/>
			<div className="form-card form-card-mq">
				<h1 className="text-[1.5rem] font-source mx-auto mb-4">Regístrese</h1>
				<form>
					<Input
						errorMessage={usernameMessage}
						value={username}
						setValue={setUsername}
						className="mb-3"
						placeholder="Nombre de usuario"
					/>
					<Input
						errorMessage={emailMessage}
						value={email}
						setValue={setEmail}
						className="mb-3"
						placeholder="Correo electrónico"
						type="email"
					/>
					<Input
						errorMessage={passwordMessage}
						value={password}
						setValue={setPassword}
						className="mb-3"
						placeholder="Contraseña"
						type={'password'}
					/>
					<Input
						errorMessage={confirmPasswordMessage}
						value={confirmPassword}
						setValue={setConfirmPassword}
						className="mb-1"
						placeholder="Confirmar contraseña"
						type={'password'}
					/>
					<div className="flex flex-col  mb-16
													sm:flex-row">
						<p>Ya tiene cuenta?</p>
						<Link href="/login"> 
							<a className="text-primary cursor-pointer sm:ml-1">Inicie sesión</a>
						</Link>
					</div>
					
					<Button
						loading={loading}
						title="Registrarse"
						className="base-button bg-primary text-white w-full"
						onClick={()=>{
							setLoading(true)
							setTimeout(()=>{
								const valid = validateRegisterInputs({
									username, 
									email, 
									password, 
									confirmPassword, 
									setUsernameMessage, 
									setEmailMessage, 
									setPasswordMessage, 
									setConfirmPasswordMessage})
								setLoading(false)
								if (valid) console.log("Sesion iniciada") ; else console.log("Fail")
							}, 2000)
						}}
					/>
				</form>
			</div>
		</div>
			)
}

export default Register
