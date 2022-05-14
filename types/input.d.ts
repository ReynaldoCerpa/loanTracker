export interface InputProps {
	className?: string,
	placeholder?: string,
	type?: string,
	errorMessage: string, 
	value: string | number, 
	setValue: React.Dispatch<React.SetStateAction<any>>
}
