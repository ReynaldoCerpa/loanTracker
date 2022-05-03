import Head from "next/head";
import { HeadProps } from "../../types/layout";

function BaseLayout({ children }: HeadProps) {
	return (
				<>
					<Head>
						<link rel="icon" href="/logo.png"	/>
					</Head>
					{children}
				</>
	)
}

export default BaseLayout
