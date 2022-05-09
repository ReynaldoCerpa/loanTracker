import { FC } from "react"
import { Input } from '@mantine/core';
import Link from 'next/link';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Register : FC = () => {
	return (
		<div className="reg-log-cont">
		<Logo
				className="mb-5"
		/>
			<div className="form-card form-card-mq">
				<h1 className="text-[1.5rem] font-source mx-auto mb-4">Regístrese</h1>
				<form>
					<Input
						className="mb-3"
						placeholder="Nombre de usuario"
					/>
					<Input
						className="mb-3"
						placeholder="Correo electrónico"
						type={'password'}
					/>
						<Input
							className="mb-3"
							placeholder="Contraseña"
							type={'password'}
						/>
						<Input
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
						title="Registrarse"
						className="base-button bg-primary text-white w-full"
						onClick={()=>{

						}}
					/>
				</form>
			</div>
		</div>
			)
}

export default Register
