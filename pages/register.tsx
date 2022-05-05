import { FC } from "react"
import { Input } from '@mantine/core';
import Link from 'next/link';
import { PageWithLayoutType } from '../types/layout';
import Button from '../components/Button';
import Logo from '../components/Logo';
import NoLayout from "../components/Layouts/NoLayout";

const Register : FC = () => {
	return (
		<div className="bg-primary w-full h-screen flex flex-col items-center p-16">
		<Logo
				className="mb-5"
		/>
			<div className="bg-white max-w-[50vh] w-full rounded-2xl drop-shadow-xl p-10 
											flex flex-col ">
				<h1 className="text-[1.5rem] font-source mx-auto mb-4">Regístrese</h1>
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
						<p className="text-primary cursor-pointer sm:ml-1">Inicie sesión</p>
					</Link>
				</div>
				
				<Button
					title="Registrarse"
					className="base-button bg-primary text-white w-full"
					href=""
					onClick={()=>{

					}}
				/>
			</div>
		</div>
			)
}

;(Register as PageWithLayoutType).layout = NoLayout

export default Register
