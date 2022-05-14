import { ValidateLoginProps } from "../types/validateinputs"

export function validateLoginInputs({username, password, setUsernameMessage, setPasswordMessage} : ValidateLoginProps ) : boolean {
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
