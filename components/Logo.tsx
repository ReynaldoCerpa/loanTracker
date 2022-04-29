import Image from "next/image"

const Logo = ({width, height}: LogoProps) => {

	return (
				<Image
					src="/logo.png"
					width={width}
					height={height}
				/>
	)
}

Logo.defaultProps = {
	width: 50,
	height: 50
}

export default Logo
