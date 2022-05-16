import { FiPlus } from "react-icons/fi";
import { AddLoanButtonProps } from "../../types/AddLoan";

export const AddLoanButton = ({onClick} : AddLoanButtonProps) => {

	return (
		<>
			<button 
				className="bg-primary h-20 w-20 
				flex items-center justify-center 
				rounded-[50%] drop-shadow-xl
				fixed bottom-3 right-3
				sm:hidden"
				onClick={onClick}
			>
				<FiPlus className="text-white text-5xl"/>
			</button>
		</>
	)
}

