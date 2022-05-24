import { UnstyledButton } from "@mantine/core"

export const LoanCard = ({id, loan, opened, setOpened} : any) => {
	
	function shrinkText( text : string ) : string {
		const dots = " ..."
		let newText = (text.length > 47) ? text.slice(0, 47)+dots : text
		return newText
	}

	return (
		<div className="min-w-[320px] max-w-[600px] w-full mx-auto">
			<UnstyledButton
				key={id}
				onClick={setOpened}
				className="h-[8rem] w-full my-2
												drop-shadow-md
												flex"
			>
					<div className="bg-gray-400 h-full w-[1rem] rounded-l-xl">
					</div>
					<div className="bg-white h-full w-full rounded-r-xl p-3 grid grid-cols-4 ">
						<p className="col-span-1 font-raleway flex justify-start">Nombre: </p>
						<p className="col-span-3 overflow-hidden flex justify-items-start">{shrinkText(loan.debtorName)}</p>
						<p className="col-span-2 font-raleway flex justify-items-start">Fecha límite: </p>
						<p className="col-span-2">{loan.dueDate}</p>
						<p className="col-span-1 font-raleway">Total: </p>
						<p className="col-span-1">{loan.amount}</p>
						<p className="col-span-1 font-raleway">Abonado: </p>
						<p className="col-span-1">{loan.payments}</p>
					</div>
			</UnstyledButton>
		</div>
	)
}

