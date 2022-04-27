import { Burger } from '@mantine/core'
import { useState } from 'react'
import Logo from './Logo'
import Drawer from './Drawer/Drawer'

const LandingNavbar = () =>{

	const [opened, setOpened] = useState(false)

	return (
			<div className="flex justify-between w-full h-16 p-2 items-center bg-[#1C54A8]">
				<Burger
					color="white"
					opened={false}
					onClick={() => setOpened((o) => !o)}
				/>
				<Logo/>
				<Drawer 
					opened={opened}
					setOpened={setOpened}
				/>
			</div>
			)
}

export default LandingNavbar
