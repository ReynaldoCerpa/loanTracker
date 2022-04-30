import Link from "next/link"
import React from "react"
import { ButtonProps } from "../types/button"

const Button = ({title, className, href}: ButtonProps) => {
	return (
	<Link href={href}>
					<button
						className={className}
					>
					{title}
					</button>
					</Link>
			)
}

Button.defaultProps = {
	title: "",
	className: ""
}

export default Button
