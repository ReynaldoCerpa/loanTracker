import NextHead from "next/head";
import { HeadProps } from "../../types/layout";

const Head = ({ children }: HeadProps) => {
	return (
				<>
					<NextHead >
						<link rel="icon" href="/logo.png"	/>
					</NextHead >
					{children}
				</>
	)
}

export default Head
