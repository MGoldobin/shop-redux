export const validateEmail = (value: string) => {
	let error
	if (!value) {
		error = 'Обязательное поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Введен не email'
	}
	return error
}

export const validateName = (value: string) => {
	let error
	if (!value) {
		error = 'Обязательное поле'
	} else if (!/^(?=.{3,50}$)[^\s\d]*(\s[^\s\d]*)?$/i.test(value)) {
		error = value.length<3 ? 'Мало знаков' : 'Введен неправильный символ'
	}
	return error
}

export const validatePassword = (value: string) => {
	let error
	if (!value) {
		error = 'Обязательное поле'
	} else if (!/(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z]{6,16}/i.test(value)) {
		error = value.length<6 ? 'Пароль должен содержать не менее 6 символов' 
		:  value.length>16 ? 'Пароль должен содержать не более 16 символов' 
		: 'Пароль должен содержать хотя бы одну цифру и букву'
	}
	return error
}

export const errorTranslate = (value : string) => {
	switch (value) {
		case 'auth/email-already-in-use':
			return 'Данный email уже используется'
		case 'auth/user-not-found':
			return 'Пользователь с таким email не найден'
		case 'auth/wrong-password':
			return 'Неправильный email или пароль'
		case 'auth/too-many-requests':
			return 'Много попыток, попробуйте войти позже'
		default: 
			return value
	}
}