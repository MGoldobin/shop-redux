import React from 'react'
import styled from 'styled-components'

import { useActions } from '../hooks/useActions'
import { useTypesSelector } from '../hooks/useTypesSelector'

const ToggleForm = styled.div`
`

const ToggleButtons = styled.div`
	display: inline-flex;
	border-radius: 20px;
	background-color: ${props => props.theme.toggle.backgroundColor};
	padding: 2px;
`

const ToggleSpan = styled.span`
	color: ${props => props.theme.color}
`

const Button = styled.button`
	border-radius: 20px;
	padding: 5px 15px;
	border: none;
	background-color: ${props => props.theme.toggle.backgroundColor};
	opacity: 0.3;
	color: ${props => props.theme.color};

	&:hover {
		cursor: pointer;
		opacity: 1;
	}

	&:disabled{
		background-color: ${props => props.theme.toggle.backgroundColorDisabled};
		opacity: 1;
		cursor: default;
	}
`

export const ToggleTheme: React.FC = () => {
	const { changeTheme } = useActions()
	const { isLight } = useTypesSelector(state => state.theme)

	return (
		<ToggleForm>
			<ToggleSpan>Тема: </ToggleSpan>
			<ToggleButtons>
				<Button onClick={() => changeTheme()} disabled={isLight}>Светлая</Button>
				<Button onClick={() => changeTheme()} disabled={!isLight}>Темная</Button>
			</ToggleButtons>
		</ToggleForm>
	)
}