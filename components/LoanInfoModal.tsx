import { Modal } from "@mantine/core"

export const LoanInfoModal = ({opened, setOpened} : any) => {
	
	return (
		<Modal
			opened={opened}
			onClose={setOpened}
		>
			<h1>Card info</h1>
		</Modal>
	)
}

