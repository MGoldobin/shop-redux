import React from 'react'
import styled from 'styled-components'

import UserList from './UserList'
import { ToggleTheme } from '../../components/index'

const StyledMainPage = styled.div`
	color: ${props => props.theme.color};
	background-color: ${props => props.theme.backgroundColor};
`

export const MainPage = () => {
	return (
		<StyledMainPage>
			<header>123</header>
			<UserList />
			<ToggleTheme />
		</StyledMainPage>
	)
}