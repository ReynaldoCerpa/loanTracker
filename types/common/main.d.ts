import { NextPage } from 'next'
import internal from 'stream'
import LandingLayout from '../components/Layouts/LandingLayout'


	// Layout types
	type LandingLayoutType = NextPage & { layout: typeof LandingLayout }

	type PageWithLayoutType  = LandingLayoutType

	type AppLayoutProps = {
		Component: PageWithLayoutType
		pageProps: any
	}


	// Drawer types
	type DrawerProps = {
		opened: boolean
		setOpened: React.Dispatch<React.SetStateAction<boolean>>
	}

	// Logo types
	type LogoProps = {
		width: string
		height: string
	}

	// Drawer Button types
	type DrawerButtonProps = {
		width: string
		height: string
	}
