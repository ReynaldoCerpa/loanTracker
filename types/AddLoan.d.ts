export interface AddLoanButtonProps {
	onClick: React.MouseEventHandler<HTMLElement>,
}

export interface AddLoanModalProps {
	opened: boolean,
	setOpened: React.Dispatch<React.SetStateAction<boolean>>,
	onClickCancelButton : React.MouseEventHandler<HTMLElement>
}
