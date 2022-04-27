import { PageWithLayoutType } from '../types/types'
import { FC } from 'react'
import LandingLayout from '../components/Layouts/LandingLayout'

const Home: FC = () => {


  return (
    <div className="h-screen w-full flex justify-center bg-[#1c54a8]">
			<h1 className="text-white font-raleway mt-[20vh] mx-5 text-[5rem] leading-none">
				Dont mess your ticket sales anymore.
			</h1>
    </div>
  )
}

;(Home as PageWithLayoutType).layout = LandingLayout

export default Home

