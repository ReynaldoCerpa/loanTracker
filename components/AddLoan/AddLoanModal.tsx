import { Modal } from "@mantine/core"
import { AddLoanModalProps } from "../../types/AddLoan"
import Button from "../Button"

export const AddLoanModal = ({opened, onClickCancelButton} : AddLoanModalProps) => {

	
	return (
		<Modal
			transition="slide-up"
			transitionDuration={300}
			opened={opened}
			onClose={()=>{}}
			withCloseButton={false}
			closeOnEscape={false}
			closeOnClickOutside={false}
		>
			<h1>Modal para agregar prestamo</h1>
			<Button
				className="base-button text-white bg-primary"
				title="Cancelar"
				onClick={onClickCancelButton}
			/>
		</Modal>
	)
}
