import { AddLoanButton } from "./AddLoanButton"
import { AddLoanModal } from "./AddLoanModal"
import { useState } from "react"

const AddLoan = () => {

	const [opened, setOpened] = useState(false)

	return (
		<>
			<AddLoanButton 
			onClick={()=>{
				setOpened(!opened)
			}}
			/>
			<AddLoanModal 
				opened={opened}
				setOpened={setOpened}
				onClickCancelButton={()=>{
					setOpened(false)
				}}
			/>
		</>
	)
}

export default AddLoan
