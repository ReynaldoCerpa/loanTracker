import { Group, UnstyledButton } from "@mantine/core"
import { DrawerButtonProps } from "../../types/drawer";

const DrawerButton = ({Icon, title}: DrawerButtonProps) => {
	// Custon icon prop currently in development
	return (
		<div>
			<UnstyledButton>
				<Group
					color="red"
				>
					<p>{title}</p>
				</Group>
			</UnstyledButton>
		</div>
	)
}

export default DrawerButton
