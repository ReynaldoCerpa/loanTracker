type optionsArray = {
	Icon?: any,
	href?: any,
	title: string
}
	// Drawer types
export interface DrawerProps {
	opened: boolean
	setOpened: React.Dispatch<React.SetStateAction<boolean>>,
	options: Array<optionsArray>
}


	// Drawer Button types
export interface DrawerButtonProps {
	Icon?: React.FunctionComponent<any>,
	href?: any,
	title: string
}
