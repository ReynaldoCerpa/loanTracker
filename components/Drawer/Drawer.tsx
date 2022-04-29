import {  Drawer as MantineDrawer} from '@mantine/core'

const Drawer = ({opened, setOpened}: DrawerProps) => {

	return (
		<MantineDrawer
			opened={opened}
			onClose={() => setOpened(false)}
			padding="lg"
			size="sm"
		>
			<h2>Login</h2>
			<h2>Register</h2>
		</MantineDrawer>
	)
}

export default Drawer
