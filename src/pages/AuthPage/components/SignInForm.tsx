import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik, Form, FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'

import { InputBlock } from './InputBlock'

import { validateEmail, validatePassword, errorTranslate } from '../../../utils/helpers/functions/validateForm'
import { SignInFormValues } from '../../../utils/types/index'
import { useActions } from '../../../utils/hooks/useActions'

const StyledForm = styled(Form)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	width: 300px;
	margin: 10vh 0 0 0;
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

export const SignInForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [errorSignIn, setErrorSignIn] = useState<string | null>(null)

	const { SignInWithEmailAndPassword } = useActions()
	const navigate = useNavigate()

	const initialValues: SignInFormValues = {
		email: '',
		password: ''
	}

	const handleSubmit = (values: SignInFormValues, actions: FormikHelpers<SignInFormValues>) => {
		setIsLoading(true)
		SignInWithEmailAndPassword(values, setErrorSignIn)
		setIsLoading(false)
		if (!errorSignIn) navigate('/Profile')
	}

	return (
		<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
				>
					{({ errors, touched, isValidating }) => (
						<StyledForm>

							<Title>Вход в аккаунт</Title>

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
							
							<Button disabled={ isLoading || !!errors.email || !!errors.password} type="submit">Войти</Button>
							{ errorSignIn ? <ErrorLabel>{errorTranslate(errorSignIn)}</ErrorLabel> : null }
						</StyledForm>
					)}
				</Formik>
	)
}