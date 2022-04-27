import { NextPage } from 'next'
import LandingLayout from '../components/Layouts/LandingLayout'

// Layout types

type LandingLayoutType = NextPage & { layout: typeof LandingLayout }

export type PageWithLayoutType  = LandingLayoutType

export type AppLayoutProps = {
	Component: PageWithLayoutType
	pageProps: any
}


// Drawer types

export type DrawerProps = {
	opened: boolean
	setOpened: React.Dispatch<React.SetStateAction<boolean>>
}
