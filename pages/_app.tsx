import '../styles/globals.css'
import Head from '../components/Layouts/Head'
import { AppProps } from 'next/app'

const LoanTracker = ({ Component, pageProps }: AppProps) => {
	
		return (
			<Head>
				<Component {...pageProps} />
			</Head>
		)
}

export default LoanTracker
