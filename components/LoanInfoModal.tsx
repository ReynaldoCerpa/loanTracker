import { Modal } from "@mantine/core"

export const LoanInfoModal = ({opened, setOpened, loanInfo} : any) => {
	
	return (
		<Modal
			opened={opened}
			onClose={setOpened}
			closeOnClickOutside={false}
			title={loanInfo.debtorName}
		>
			<h1>{loanInfo.id}</h1>
			<h1>{loanInfo.dueDate}</h1>
			<h1>{loanInfo.amount}</h1>
		</Modal>
	)
}

