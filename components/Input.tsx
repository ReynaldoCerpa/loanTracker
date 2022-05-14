import { Input as MantineInput, InputWrapper } from '@mantine/core';
import { InputProps } from '../types/input';

const Input = ({className, placeholder, type, errorMessage, value, setValue}: InputProps) => {

	return (
			<InputWrapper
				error={errorMessage}
				className={className}
			>
				<MantineInput
					value={value}
					onInput={(e:any)=>setValue(e.target.value)}
					placeholder={placeholder}
					type={type}
				/>
			</InputWrapper>
	)
}

export default Input
