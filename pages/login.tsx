import Link from 'next/link';
import { FC, useState } from 'react';
import { validateLoginInputs } from '../utils/validateInputs';
import Button from '../components/Button';
import Input from "../components/Input"
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
					<Input
						errorMessage={usernameMessage}
						className="mb-5"
						value={username}
						setValue={(e:any)=>setUsername(e.target.value)}
						placeholder="Nombre de usuario"
					/>
					<Input
						errorMessage={passwordMessage}
						className="mb-2s"
						value={password}
						setValue={(e:any)=>setPassword(e.target.value)}
						placeholder="Contraseña"
						type="password"
					/>
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
						setTimeout(()=>{
							const valid = validateLoginInputs({username, password, setUsernameMessage, setPasswordMessage})
							setLoading(false)
							if (valid) console.log("Sesion iniciada") ; else console.log("Fail")
						}, 2000)
					}}
				/>
			</div>
		</div>
	)
}


export default Login
