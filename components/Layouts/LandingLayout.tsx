import { ReactElement } from "react";
import Head from "next/head";
import LandingNavbar from "../Navbars/LandingNavbar";

function LandingLayout({ children }: {children: ReactElement}) {
	return (
				<>
					<Head>
						<link rel="icon" href="/logo.png"	/>
					</Head>
					<LandingNavbar/>
					{children}
				</>
	)
}

export default LandingLayout
