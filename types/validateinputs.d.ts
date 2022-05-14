export interface ValidateLoginProps {
	username: string,
	password: string,
	setUsernameMessage: React.Dispatch<React.SetStateAction<string>>,
	setPasswordMessage: React.Dispatch<React.SetStateAction<string>>,
}

export interface ValidateRegisterProps {
	username: string,
	email: string,
	password: string,
	confirmPassword: string,
	setUsernameMessage: React.Dispatch<React.SetStateAction<string>>,
	setEmailMessage: React.Dispatch<React.SetStateAction<string>>,
	setPasswordMessage: React.Dispatch<React.SetStateAction<string>>,
	setConfirmPasswordMessage: React.Dispatch<React.SetStateAction<string>>,
}

