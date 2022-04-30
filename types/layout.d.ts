import { NextPage } from 'next'
import internal from 'stream'
import LandingLayout from '../components/Layouts/LandingLayout'


// Layout types
type LandingLayoutType = NextPage & { layout: typeof LandingLayout }

export type PageWithLayoutType  = LandingLayoutType

export interface AppLayoutProps {
	Component: PageWithLayoutType
	pageProps: any
}

