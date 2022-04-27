import {  Drawer as MantineDrawer} from '@mantine/core'
import { DrawerProps } from "../../types/types"
import { useState } from "react"

const Drawer = ({opened, setOpened}: DrawerProps) => {

	return (
			<MantineDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="sm"
      >
				<h2>Login</h2>
				<h2>Register</h2>
      </MantineDrawer>
			)
}

export default Drawer
