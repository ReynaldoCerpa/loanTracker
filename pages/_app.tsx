import '../styles/globals.css'
import { AppLayoutProps } from "../types/types"

function LoanTracker({ Component, pageProps }: AppLayoutProps) {
	
	const Layout = Component.layout || ((children) => <>{children}</>)

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
}

export default LoanTracker
