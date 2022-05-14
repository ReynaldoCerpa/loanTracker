import { ValidateLoginProps, ValidateRegisterProps} from "../types/validateinputs"

export function validateLoginInputs({
	username,
	password,
	setUsernameMessage,
	setPasswordMessage
} : ValidateLoginProps ) : boolean 
{
	let valid = true

	if(username.length > 20){
		setUsernameMessage("Nombre de usuario invalido")
		valid = false
	}

	if(username.length <= 0){
		setUsernameMessage("Rellene este campo")
		valid = false
	}

	if(password.length > 255){
		setPasswordMessage("Contraseña invalida")
		valid = false
	}

	if(password.length <= 0){
		setPasswordMessage("Rellene este campo")
		valid = false
	}

	return valid	
}

export function validateRegisterInputs({
	username,
	email,
	password,
	confirmPassword,
	setUsernameMessage,
	setPasswordMessage,
	setEmailMessage,
	setConfirmPasswordMessage,
} : ValidateRegisterProps ) : boolean 
{
	let valid = true

	if(username.length > 20){
		setUsernameMessage("Nombre de usuario invalido")
		valid = false
	}

	if(username.length <= 0){
		setUsernameMessage("Rellene este campo")
		valid = false
	}

	if(password.length > 255){
		setPasswordMessage("Contraseña invalida")
		valid = false
	}

	if(password.length <= 0){
		setPasswordMessage("Rellene este campo")
		valid = false
	}

	if(email.length <= 0){
		setEmailMessage("Rellene este campo")
		valid = false
	}

	if(confirmPassword.length <= 0) {
		setConfirmPasswordMessage("Rellene este campo")
		valid = false
	}

	if(confirmPassword !== password) {
		setConfirmPasswordMessage("Las contraseñas no coinciden")
		valid = false
	}

	return valid	
}
