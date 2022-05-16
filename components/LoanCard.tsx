import { UnstyledButton } from "@mantine/core"

export const LoanCard = ({loan, opened, setOpened} : any) => {
	
	function shrinkText( text : string ) : string {
		const dots = " ..."
		let newText = (text.length > 47) ? text.slice(0, 47)+dots : text
		return newText
	}

	return (
		<UnstyledButton
			onClick={setOpened}
		>
			<div className="h-[8rem] min-w-[320px]  max-w-[600px] w-full mx-auto my-2
											drop-shadow-md
											flex">
				<div className="bg-gray-400 h-full w-[1rem] rounded-l-xl">
				</div>
				<div className="bg-white h-full w-full rounded-r-xl p-3 grid grid-cols-4 ">
					<p className="col-span-1 font-raleway flex justify-start">Nombre: </p>
					<p className="col-span-3 overflow-hidden flex justify-items-start">{shrinkText(loan.debtorName)}</p>
					<p className="col-span-2 flex justify-items-start">Fecha límite: </p>
					<p className="col-span-2">{loan.dueDate}</p>
					<p className="col-span-1">Total: </p>
					<p className="col-span-1">{loan.amount}</p>
					<p className="col-span-1">Abonado: </p>
					<p className="col-span-1">{loan.payments}</p>
				</div>
			</div>
		</UnstyledButton>
	)
}

