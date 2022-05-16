export const LoanCard = ({loan} : any) => {
	
	return (
		<div className="h-[8rem] w-[85%] mx-auto my-4
										drop-shadow-md
										flex">
			<div className="bg-red-500 h-full w-[1rem] rounded-l-xl">
			</div>
			<div className="bg-red-100 h-full w-full rounded-r-xl p-3 grid grid-cols-4 grid-rows-4">
				<p className="col-span-full">{loan.debtorName}</p>
				<p className="col-span-2">{loan.debtorCellphone}</p>
				<p className="col-span-2">{loan.dueDate}</p>
				<p className="col-span-2">{loan.amount}</p>
				<p className="col-span-2">{loan.loanDate}</p>
				<p className="col-span-2">{loan.payments}</p>
			</div>
		</div>
	)
}

