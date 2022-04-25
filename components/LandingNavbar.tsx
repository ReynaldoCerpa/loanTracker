import { Burger, Drawer } from '@mantine/core'
import { useState } from "react"

const LandingNavbar = () =>{
	const [opened, setOpened] = useState(false)
	return (
			<div className="flex justify-between w-full h-16 p-2 items-center bg-[#1C54A8]">
				<Burger
					color="white"
					opened={false}
					onClick={() => setOpened((o) => !o)}
				/>
			<Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="sm"
      >
				<h2>Login</h2>
				<h2>Register</h2>
      </Drawer>
			<h1 className="font-source text-white">LoanTracker</h1>
			</div>
			)
}

export default LandingNavbar
