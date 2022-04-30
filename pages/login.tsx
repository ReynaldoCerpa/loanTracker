import { FC } from 'react';
import LandingLayout from '../components/Layouts/LandingLayout'
import { PageWithLayoutType } from '../types/layout';

const Login : FC = () => {
	return (
		<div>
			<h1>asjklhdsajkldadsjklads</h1>
		</div>
	)
}

;(Login as PageWithLayoutType).layout = LandingLayout
export default Login
