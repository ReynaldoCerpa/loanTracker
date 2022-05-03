import { ReactElement } from "react";
import Head from "./Head";

function NoLayout({children}:{children: ReactElement}) {
	return (
		<Head>
			<main>{children}</main>
		</Head>
	)
}

export default NoLayout
