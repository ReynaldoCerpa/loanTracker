import {  Drawer as MantineDrawer} from '@mantine/core'
import { DrawerProps } from '../../types/drawer'
import DrawerButton from './DrawerButton'

//import { FiUserPlus, FiUser } from "react-icons/fi";

const Drawer = ({opened, setOpened, options}: DrawerProps) => {
	let i = 0
	return (
		<MantineDrawer
			position="right"
			opened={opened}
			onClose={() => setOpened(false)}
			padding="sm"
			size="sm"
		>
		{
			options.map((x)=>{
				return <DrawerButton key={i++} href={x.href} title={x.title} />
			})
		}
		</MantineDrawer>
	)
}

Drawer.defaultProps = {
	opened: false,
	options:[{
		title: "No hay botones"
	}]
}

export default Drawer
