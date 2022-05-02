import { FC } from "react"
import LandingLayout from '../components/Layouts/LandingLayout'
import { PageWithLayoutType } from '../types/layout';

const Register : FC = () => {
	return (
				<h1>Register page</h1>
			)
}

;(Register as PageWithLayoutType).layout = LandingLayout

export default Register
