import { Burger } from '@mantine/core'
import { useState } from 'react'
import Logo from '../Logo'
import Drawer from '../Drawer/Drawer'
import Button from '../Button'

const LandingNavbar = () =>{

	const [opened, setOpened] = useState(false)
	const [page, setPage] = useState("home")
	const options = [
		{title:"Iniciar sesión"},
		{title: "Registrarse"}
	]

	return (
			<div className="flex justify-between w-full p-6 items-center bg-primary h-[5rem]">
				<Logo
					onClick={()=>{
						setPage("home")		
					}}
				/>
				<div className="sm:hidden">
					<Burger
						color="white"
						opened={false}
						onClick={() => setOpened((o) => !o)}
					/>
					<Drawer 
						opened={opened}
						setOpened={setOpened}
						options={options}
					/>
				</div>
				<div className="hidden sm:block">
				{ page === "home" ?
					<>
						<Button
							href="/login"
							className="base-button bg-white"
							title="Iniciar sesión"
							onClick={()=>{
								setPage("login")
							}}
						/>
						<Button
							href="/register"
							className="base-button bg-white ml-2"
							title="Registrarse"
							onClick={()=>{
								setPage("register")
							}}
						/>
					</>
					: null
				}
				</div>
			</div>
			)
}

export default LandingNavbar
