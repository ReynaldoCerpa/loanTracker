import { Input } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../components/Button';
import LandingLayout from '../components/Layouts/LandingLayout'
import { PageWithLayoutType } from '../types/layout';

const Login : FC = () => {
	return (
		<div className="bg-primary w-full screen-height flex items-center justify-center">
			<div className="bg-white w-[40vh] rounded-2xl drop-shadow-xl p-6 
											flex flex-col ">
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
				<div className="flex mb-16">
					<p>No tiene cuenta?</p>
					<Link href="/register"> 
						<p className="text-primary cursor-pointer ml-1">Regístrese</p>
					</Link>
				</div>
				
				<Button
					title="Iniciar sesión"
					className="base-button bg-primary text-white w-full"
					href=""
					onClick={()=>{

					}}
				/>
			</div>
		</div>
	)
}

;(Login as PageWithLayoutType).layout = LandingLayout
export default Login
