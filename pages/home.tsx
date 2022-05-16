import { FC, useState } from "react";
import AddLoan from "../components/AddLoan/AddLoan";
import { LoanCard } from "../components/LoanCard";
import { LoanInfoModal } from "../components/LoanInfoModal";

const Home : FC = () => {
	
	const [infoModalOpened, setInfoModalOpened] = useState(false)
	const loan = {
		debtorName: "Reynaldo Cerpa Tinajero",
		debtorCellphone: "616-105-8671",
		dueDate: "5-16-2022",
		amount: "$560",
		payments: "$200",
		loanDate: "5-15-2022"
	}
	return (
		<div className="h-screen bg-gray-100">
			<LoanInfoModal opened={infoModalOpened} setOpened={()=>{setInfoModalOpened(!infoModalOpened)}}/>
		<div className="bg-primary h-[5rem] drop-shadow-md mb-2">
		</div>
		<div className="flex flex-col p-5 justify-center">
			<LoanCard loan={loan} opened={infoModalOpened} setOpened={()=>{setInfoModalOpened(!infoModalOpened)}}/>
		</div>
			<AddLoan/>
		</div>
	)
}

export default Home
