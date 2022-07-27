import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'

const StyledField = styled(Field)`
	display: block;
	width: 300px;
	box-sizing: border-box;
	padding: 5px;
	color: ${props => props.$iserror ? '#fff' : '#000'};
	background-color: ${props => props.$iserror ? props.theme.errorBackgroundColor : '#fff'};
	border: solid ${props => props.$iserror ? `2px ${props.theme.errorBorderColor}` : `1px ${props.theme.borderColor}`};
	outline: none;

	&::placeholder {
		color: ${props => props.$iserror ? '#fff' : '#000'};
		opacity: .5;
	}
`

const ErrorLabel = styled.p`
	color: ${props => props.theme.errorColor};
	margin: 0;
	word-wrap: break-word;
	width: 300px;
`

interface InputBlockProps {
	inputId: string | undefined,
	inputPlaceholder: string | undefined,
	validateFunction?: (value: string) => string | undefined,
	errors?: string | undefined,
	touched?: boolean | undefined,
	type?: string
}

export const InputBlock: React.FC<InputBlockProps> = ({ inputId, inputPlaceholder, validateFunction, errors, touched, type }) => {
	return (
		<div>
			<StyledField type={type} $iserror={errors && touched} id={inputId} name={inputId} placeholder={inputPlaceholder} validate={validateFunction}/>
			{ errors && touched && <ErrorLabel>{errors}</ErrorLabel>}
		</div>
	)
}