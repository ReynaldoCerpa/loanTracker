import { Group, UnstyledButton } from "@mantine/core"
import { FiUserPlus, FiUser } from "react-icons/fi";

const DrawerButton = ({Icon, title}) => {

	return (
		<div>
			<UnstyledButton>
				<Group>
					<Icon/>
					<p>{title}</p>
				</Group>
			</UnstyledButton>
		</div>
	)
}

export default DrawerButton
