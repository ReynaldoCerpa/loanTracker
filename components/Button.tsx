import Link from "next/link"
import React from "react"
import { ButtonProps } from "../types/button"

const Button = ({title, className, href, onClick}: ButtonProps) => {
	return (
	<Link href={href}>
					<button
						className={className}
						onClick={onClick}
					>
					{title}
					</button>
					</Link>
			)
}

Button.defaultProps = {
	title: "",
	className: "",
	href: "/"
}

export default Button
