import { PageWithLayout } from '../types/types'
import { ReactElement } from 'react'
import LandingLayout from '../components/Layouts/LandingLayout'

const Home: PageWithLayout = () => {


  return (
    <div className="h-full w-full flex">
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<LandingLayout>
			{page}
		</LandingLayout>
			)
}
