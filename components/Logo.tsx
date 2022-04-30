import Image from "next/image"

const Logo = ({size}: LogoProps) => {

	return (
				<Image
					src="/logo.png"
					width={size}
					height={size}
				/>
	)
}

Logo.defaultProps = {
	size: 50
}

export default Logo
