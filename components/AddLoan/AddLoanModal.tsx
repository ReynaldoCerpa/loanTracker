import { Input, Modal } from "@mantine/core"
import { useState, useEffect } from "react"
import { AddLoanModalProps } from "../../types/loan"
import Button from "../Button"

export const AddLoanModal = ({opened, onClickCancelButton} : AddLoanModalProps) => {

	const [input, setInput] = useState("")

	useEffect(()=>{
		if(opened === false){
			setInput("")
		}
	})
	
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
			<div className="flex flex-col items-center">
				<h1>Modal para agregar prestamo</h1>
				<Input
					value={input}
					onChange={(e:any)=>setInput(e.target.value)}
				/>
				<div className="mt-5">
					<Button
						className="base-button text-white bg-primary"
						title="Cancelar"
						onClick={onClickCancelButton}
					/>
				</div>
			</div>
		</Modal>
	)
}
