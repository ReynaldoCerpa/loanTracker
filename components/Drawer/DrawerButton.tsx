import { Group, UnstyledButton } from "@mantine/core"
import { DrawerButtonProps } from "../../types/drawer";

const DrawerButton = ({Icon, title}: DrawerButtonProps) => {

	// Custon icon prop currently in development
	
	return (
		<div>
			<UnstyledButton
				className="w-full my-1 py-[.5rem] px-3 rounded-md
									hover:bg-blue-100 focus:bg-blue-300
									transition-all"
			>
				<Group
					color="red"
				>
					<p className="font-raleway text-2xl">{title}</p>
				</Group>
			</UnstyledButton>
		</div>
	)
}

export default DrawerButton
