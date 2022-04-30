import {  Drawer as MantineDrawer} from '@mantine/core'
import { DrawerProps } from '../../types/drawer'
import DrawerButton from './DrawerButton'

//import { FiUserPlus, FiUser } from "react-icons/fi";

const Drawer = ({opened, setOpened, options}: DrawerProps) => {

	return (
		<MantineDrawer
			opened={opened}
			onClose={() => setOpened(false)}
			padding="lg"
			size="sm"
		>
		{
			options.map((x)=>{
				return <DrawerButton title={x.title} />
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
