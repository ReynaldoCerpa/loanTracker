import { LogoProps } from "../types/logo"
import Image from "next/image"
import Link from "next/link"

const Logo = ({size, onClick}: LogoProps) => {
	
	return (
		<Link href="/" >
				<Image
					className="cursor-pointer"
					src="/logo.png"
					width={size}
					height={size}
					onClick={onClick}
				/>
		</Link>
	)
}

Logo.defaultProps = {
	size: 50
}

export default Logo
