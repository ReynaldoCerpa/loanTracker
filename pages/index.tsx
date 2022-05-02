import { FC } from 'react'
import LandingLayout from '../components/Layouts/LandingLayout'
import { PageWithLayoutType } from '../types/layout';

const Landing: FC = () => {

  return (
    <div className="screen-height w-full flex justify-center bg-primary">
			<h1 className="text-white font-raleway  mx-5 text-[5rem] leading-none
										mt-10 sm:mt-15 md:mt-[5rem]">
										Vende tus boletos de manera <u>efectiva.</u>
			</h1>
    </div>
  )
}

;(Landing as PageWithLayoutType).layout = LandingLayout

export default Landing

