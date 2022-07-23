import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h1`
	font-family: 'SovMod';
`

const NavigationLink = styled(NavLink)`
	&:link {
		color: ${props => props.theme.color};
	}

	&:visited {
		color: ${props => props.theme.color};
	}

	&:hover {
		color: ${props => props.theme.color};
		opacity: .8;
	}

	&:active {
		color: ${props => props.theme.color};
	}
`

const Navigation = styled.nav`
	display: flex;
	gap: 10px;
`

export const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Title>УНИВЕРСАМ</Title>
			<Navigation>
				<NavigationLink to={'/'}>Главная</NavigationLink>
				<NavigationLink to={'Catalog'}>Каталог</NavigationLink>
				<NavigationLink to={'Info'}>Информация</NavigationLink>
				<NavigationLink to={'Cart'}>Корзина</NavigationLink>
			</Navigation>
		</StyledHeader>
	)
}