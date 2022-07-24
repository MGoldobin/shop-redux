import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Header, Content, Footer } from '../../components/index'

const StyledLayout = styled.div`
	color: ${props => props.theme.color};
	background-color: ${props => props.theme.backgroundColor};
	padding: 0 20px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

export const Layout: React.FC = () => {
	return (
		<StyledLayout>
			<Header />
			<Content>
				<Outlet />
			</Content>
			<Footer />
		</StyledLayout>
	)
}