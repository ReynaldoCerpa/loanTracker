import { NextPage } from 'next'
import internal from 'stream'
import LandingLayout from '../components/Layouts/LandingLayout'


// Layout types
type LayoutType = NextPage & { layout: typeof LandingLayout}

export type PageWithLayoutType  = LayoutType

export interface AppLayoutProps {
	Component: PageWithLayoutType
	pageProps: any
}


// Base types

export interface HeadProps {
	children: ReactElement,
}
