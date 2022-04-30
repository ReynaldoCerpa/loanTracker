import { Burger } from '@mantine/core'
import { useState } from 'react'
import Logo from '../Logo'
import Drawer from '../Drawer/Drawer'
import Button from '../Button'
import Link from 'next/link'

const LandingNavbar = () =>{

	const [opened, setOpened] = useState(false)
	const options = [
		{title:"Iniciar sesión"},
		{title: "Registrarse"}
	]

	return (
			<div className="flex justify-between w-full p-6 items-center bg-primary h-[5rem]">
					<Logo/>
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
					<Button
						href="/login"
						className="bg-white font-raleway p-2 rounded-md ml-2"
						title="Registrarse"
					/>
				</div>
			</div>
			)
}

export default LandingNavbar
