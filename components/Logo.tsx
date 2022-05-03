import { LogoProps } from "../types/logo"
import Image from "next/image"
import Link from "next/link"

const Logo = ({size, onClick, className}: LogoProps) => {
	
	return (
				<div className={`${className}`}>
						<div className="flex items-center cursor-pointer">
							<Link href="/" >
								<Image
									src="/logo.png"
									width={size}
									height={size}
									onClick={onClick}
								/>
							</Link>
							<Link href="/" >
								<h1 className="hidden md:block ml-5 text-white font-raleway text-4xl">LoanTracker</h1>
							</Link>
						</div>
				</div>
	)
}

Logo.defaultProps = {
	size: 50
}

export default Logo
