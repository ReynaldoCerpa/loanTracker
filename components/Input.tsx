import { Input as MantineInput, InputWrapper } from '@mantine/core';
import { InputProps } from '../types/input';

const Input = ({className, placeholder, type, errorMessage, value, setValue}: InputProps) => {

	const newClassname = `base-input ${className}`
	return (
			<InputWrapper
				error={errorMessage}
				className={newClassname}
			>
				<MantineInput
					value={value}
					onChange={(e:any)=>setValue(e.target.value)}
					placeholder={placeholder}
					type={type}
				/>
			</InputWrapper>
	)
}

export default Input
