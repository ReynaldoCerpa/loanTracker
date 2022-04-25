import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

// Layout types
export type PageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
	Component: PageWithLayout
}
