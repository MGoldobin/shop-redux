export interface SignUpFormValues extends FormUser {
	password: string
}

export interface SignInFormValues {
	email: FormUser['email'],
	password: string
}

export type FormUser = {
	name: string,
	company: string,
	city: string,
	email: string
}