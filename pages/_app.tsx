import '../styles/globals.css'

function LoanTracker({ Component, pageProps }: AppLayoutProps) {
	
	const Layout = Component.layout || ((children) => <>{children}</>)

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
}

export default LoanTracker
