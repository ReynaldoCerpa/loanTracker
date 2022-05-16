import { FC } from "react";
import AddLoan from "../components/AddLoan/AddLoan";
import { LoanCard } from "../components/LoanCard";

const Home : FC = () => {

	const loan = {
		debtorName: "Reynaldo Cerpa Tinajero",
		debtorCellphone: "616-105-8671",
		dueDate: "5-16-2022",
		amount: "$560",
		payments: "",
		loanDate: "5-15-2022"
	}
	return (
		<div className="h-screen ">
		<div className="bg-primary h-[5rem]">
		</div>
			<LoanCard loan={loan}/>
			<LoanCard loan={loan}/>
			<LoanCard loan={loan}/>
			<LoanCard loan={loan}/>
			<AddLoan/>
		</div>
	)
}

export default Home
