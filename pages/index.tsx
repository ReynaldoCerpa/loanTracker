import { FC } from 'react'
import LandingLayout from '../components/Layouts/LandingLayout'
import { PageWithLayoutType } from '../types/layout';

const Landing: FC = () => {

  return (
    <div className="h-screen w-full flex justify-center bg-primary">
			<h1 className="text-white font-raleway mt-[20vh] mx-5 text-[5rem] leading-none">
				Dont mess up your ticket sales anymore.
			</h1>
    </div>
  )
}

;(Landing as PageWithLayoutType).layout = LandingLayout

export default Landing

