import { ReactElement } from "react";
import LandingNavbar from "../LandingNavbar";

function LandingLayout({ children }: {children: ReactElement}) {
	return (
				<div>
					<LandingNavbar/>
					<main>{children}</main>
				</div>
	)
}

export default LandingLayout
