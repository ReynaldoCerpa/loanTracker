import { FC } from 'react'
import LandingNavbar from '../components/Navbars/LandingNavbar';

const Landing: FC = () => {

  return (
		<>
			<LandingNavbar />
			<div className="screen-height w-full flex justify-center bg-primary">
				<div className="flex-col">
					<h2 className="text-white mx-5">*Actualmente desarrollado principalmente para celulares</h2>
					<h1 className="text-white font-raleway  mx-5 text-[5rem] leading-none
												mt-10 sm:mt-15 md:mt-[5rem]">
												Venda sus boletos de manera <u>efectiva</u>
					</h1>
				</div>
			</div>
		</>
  )
}

export default Landing

