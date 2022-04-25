import '../styles/globals.css'
import { AppPropsWithLayout } from "../types/types"

function LoanTracker({ Component, pageProps }: AppPropsWithLayout) {
	
	const getLayout = Component.getLayout ?? ((page) => page)

	return getLayout(<Component {...pageProps} />)
}

export default LoanTracker
