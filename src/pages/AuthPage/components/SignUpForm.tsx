import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik, Form, FormikHelpers } from 'formik'

import { InputBlock } from './InputBlock'

import { registrationWithEmailAndPassword } from '../../../firebase'
import { validateName, validateEmail, validatePassword, errorTranslate } from '../../../vendor/functions/validateForm'
import { SignUpFormValues } from '../../../utils/types/index'

const StyledForm = styled(Form)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	width: 300px;
	margin: 15vh 0 0 0;
`

const Title = styled.h1`
	margin: 0;
	color: ${props => props.theme.color};
`

const ErrorLabel = styled.p`
	color: ${props => props.theme.errorColor};
	margin: 0;
`

const Button = styled.button`
	padding: 5px 10px;
	cursor: pointer;

	&:disabled {
		cursor: default;
	}
`

export const SignUpForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [errorSignUp, setErrorSignUp] = useState<string | undefined>('')

	const handleSubmit = async (values: SignUpFormValues, actions: FormikHelpers<SignUpFormValues>) => {
		setIsLoading(true)
		const result = await registrationWithEmailAndPassword(values)
		setErrorSignUp(result && result.status === 'success' ? '' : result&&result.code)
		actions.setSubmitting(false)
		/*actions.resetForm()*/
		setIsLoading(false)
	}

	const initialValues: SignUpFormValues = { 
		name: '' ,
		company: '',
		city: '',
		email: '',
		password: ''
	}

	return (
		<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
				>
					{({ errors, touched, isValidating }) => (
						<StyledForm>

							<Title>Регистрация</Title>

							<InputBlock 
								inputId="name"
								inputPlaceholder="Имя*"
								validateFunction={validateName}
								errors={errors.name}
								touched={touched.name}
							/>

							<InputBlock 
								inputId="email"
								inputPlaceholder="Email*"
								validateFunction={validateEmail}
								errors={errors.email}
								touched={touched.email}
							/>

							<InputBlock 
								type="password"
								inputId="password"
								inputPlaceholder="Пароль*"
								validateFunction={validatePassword}
								errors={errors.password}
								touched={touched.password}
							/>

							<InputBlock 
								inputId="company"
								inputPlaceholder="Компания"
							/>

							<InputBlock 
								inputId="city"
								inputPlaceholder="Город (Москва или МО)"
							/>
							
							<Button disabled={isLoading || !!errors.city || !!errors.email || !!errors.password} type="submit">Зарегистроваться</Button>
							{ errorSignUp ? <ErrorLabel>{errorTranslate(errorSignUp)}</ErrorLabel> : null }
						</StyledForm>
					)}
				</Formik>
	)
}