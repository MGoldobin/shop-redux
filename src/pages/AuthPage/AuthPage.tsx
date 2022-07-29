import React, { useState } from 'react'
import styled from 'styled-components'

import { Footer } from '../../components'
import { SignInForm } from './components/SignInForm'
import { SignUpForm } from './components/SignUpForm'

const StyledAuthPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${props => props.theme.backgroundColor};
`

const Button = styled.button`
	padding: 5px 10px;
	cursor: pointer;

	&:disabled {
		cursor: default;
	}
`

export const AuthPage: React.FC = () => {
	const [isSignUp, setIsSignUp] = useState(false)
	
	return (
		<StyledAuthPage>
			{ !isSignUp && <SignInForm />}
			{ isSignUp && <SignUpForm /> /* доделать переход на другую страницу после login'a и регистрации*/} 
			<Button onClick={() => setIsSignUp(prev => !prev)}>{isSignUp ? 'Перейти к входу' : 'Перейти к регистрации'}</Button>
			<Footer />
		</StyledAuthPage>
	)
}