import { Loader } from "@mantine/core"
import Link from "next/link"
import React from "react"
import { ButtonProps } from "../types/button"

const Button = ({title, className, href, onClick, loading}: ButtonProps) => {
	return (
		<Link href={href}>
			<button
				disabled={loading}
				className={className}
				onClick={onClick}
			>
			{
			 loading ?
				<div className="flex w-[70%] m-auto items-center justify-around">
					{loading ? <Loader className="h-6" color="white"/> : title}
				</div> 
				: title
			}
			</button>
		</Link>
)
}

Button.defaultProps = {
	title: "",
	className: "",
	href: "",
	loading: false
}

export default Button
