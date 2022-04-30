import { Burger } from '@mantine/core'
import { useState } from 'react'
import Logo from '../Logo'
import Drawer from '../Drawer/Drawer'

const LandingNavbar = () =>{

	const [opened, setOpened] = useState(false)
	const options = [
		{title:"Iniciar sesión"},
		{title: "Registrarse"}
	]

	return (
			<div className="flex justify-between w-full p-6 items-center bg-primary h-[5rem]">
				<Burger
					color="white"
					opened={false}
					onClick={() => setOpened((o) => !o)}
				/>
				<Logo/>
				<Drawer 
					opened={opened}
					setOpened={setOpened}
					options={options}
				/>
			</div>
			)
}

export default LandingNavbar
