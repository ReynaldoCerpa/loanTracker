import { ReactElement } from "react";
import LandingNavbar from "../Navbars/LandingNavbar";

function LandingLayout({ children }: {children: ReactElement}) {
	return (
				<>
					<LandingNavbar/>
					{children}
				</>
	)
}

export default LandingLayout
