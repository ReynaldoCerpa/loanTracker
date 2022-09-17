import { Input, Modal } from "@mantine/core"
import { useState, useEffect } from "react"
import { AddLoanModalProps } from "../../types/loan"
import Button from "../Button"
import { DatePicker } from "@mantine/dates"
import { formatDate } from "../../utils/dateFormatter"
import "dayjs/locale/es-mx"

export const AddLoanModal = ({opened, onClickCancelButton} : AddLoanModalProps) => {

	const inputStyling = "my-2 max-w-[14rem] w-full"

	const [nombre, setNombre] = useState("")
	const [celular, setCelular] = useState("")
	const [fechaPago, setFechaPago] = useState<Date | null>(null)
	const [totalPrestamo, setTotalPrestamo] = useState("")
	const [cantidadBoletos, setCantidadBoletos] = useState("")
	const [abono, setAbono] = useState("")

	function clearInputs() : void {
		setNombre("")
		setCelular("")
		setFechaPago(null)
		setTotalPrestamo("")
		setCantidadBoletos("")
		setAbono("")
	}

	useEffect(()=>{
		if(opened){
			setNombre("")
			setCelular("")
			setFechaPago(null)
			setTotalPrestamo("")
			setCantidadBoletos("")
			setAbono("")
		}
	}, [])
	
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
				<h1>Agregar préstamo</h1>
				<Input
					placeholder="Nombre"
					value={nombre}
					className={inputStyling}
					onChange={(e:any)=>setNombre(e.target.value)}
				/>
				<Input
					placeholder="Celular"
					type="number"
					value={celular}
					className={inputStyling}
					onChange={(e:any)=>setCelular(e.target.value)}
				/>
				<DatePicker
				  placeholder="Fecha limite de pago"
				  locale="es-mx"
				  value={fechaPago}
				  className={inputStyling}
				  clearable={false}
				  onChange={(e:any)=>{
					if ( e && e.toString().indexOf("1969") == -1 ) {
					  setFechaPago(new Date(e))
					}
				  }}
				/>
				<Input
					placeholder="Cantidad de boletos"
					type="number"
					value={cantidadBoletos}
					className={inputStyling}
					onChange={(e:any)=>setCantidadBoletos(e.target.value)}
				/>
				<Input
					placeholder="Precio por boleto"
					type="number"
					value={totalPrestamo}
					className={inputStyling}
					onChange={(e:any)=>setTotalPrestamo(e.target.value)}
				/>
				<Input
					placeholder="Abono"
					type="number"
					value={abono}
					className={inputStyling}
					onChange={(e:any)=>setAbono(e.target.value)}
				/>
				<div className="mt-5 flex justify-center w-[70%]">
					<Button
						className="base-button text-white bg-primary mx-1"
						title="Agregar"
						onClick={()=>{
						  console.log("In development")
						}}
					/>
					<Button
						className="base-button text-white bg-primary mx-1"
						title="Cancelar"
						onClick={()=>{
							console.log(fechaPago)
							onClickCancelButton()
							clearInputs()
						  }
						}
					/>
				</div>
			</div>
		</Modal>
	)
}
