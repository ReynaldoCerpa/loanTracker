import { Input } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Login : FC = () => {
	return (
		<div className="reg-log-cont">
			<Logo
				className="mb-5"
			/>
			<div className="form-card form-card-mq">
				<h1 className="text-[1.5rem] font-source mx-auto mb-4">Inicie Sesión</h1>
				<Input
					className="mb-3"
					placeholder="Nombre de usuario"
				/>
				<Input
					className="mb-1"
					placeholder="Contraseña"
					type={'password'}
				/>
				<div className="flex flex-col sm:flex-row mb-16 ">
					<p>No tiene cuenta?</p>
					<Link href="/register"> 
						<a className="text-primary cursor-pointer sm:ml-1">Regístrese</a>
					</Link>
				</div>
				
				<Button
					title="Iniciar sesión"
					className="base-button bg-primary text-white w-full"
					onClick={()=>{

					}}
				/>
			</div>
		</div>
	)
}


export default Login
