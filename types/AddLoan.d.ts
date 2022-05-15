export interface AddLoanButtonProps {
	onClick: React.MouseEventHandler<HTMLElement>,
}

export interface AddLoanModalProps {
	opened: boolean,
	onClickCancelButton : React.MouseEventHandler<HTMLElement>
}
