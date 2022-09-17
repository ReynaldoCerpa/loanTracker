import { UnstyledButton } from "@mantine/core"
import { LoanCardProps } from "../types/loan"

export const LoanCard = ({id, loan, setOpened} : LoanCardProps) => {

	let labelAlertColor = colorAlert(loan.dueDate)
	let labelColor = `${labelAlertColor} h-full w-[1rem] rounded-l-xl`

	function shrinkText( text : string ) : string {
		const dots = " ..."
		let newText = (text.length > 47) ? text.slice(0, 47)+dots : text
		return newText
	}

	function colorAlert(date: string) : string{
	  const currentDate = new Date()
	  const dueDate = new Date(date)
	  console.log(dueDate.getMonth())
	  console.log(currentDate.getMonth())
	  let color = ""
	  if(dueDate.getMonth() < currentDate.getMonth() || 
		  (dueDate.getMonth() === currentDate.getMonth() && 
		((dueDate.getDate() - currentDate.getDate()) < 11))){
		  color = "bg-red-600"
	  } else if (dueDate.getMonth() - currentDate.getMonth() <= 0) {
		  color = "bg-yellow-400"
	  } else {
		color = "bg-green-400"
	  }

	  return color
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
					<div className={labelColor}>
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

