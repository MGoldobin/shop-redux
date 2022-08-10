import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { useTypesSelector } from '../utils/hooks/useTypesSelector'

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h1`
	font-family: 'SovMod';
`

const NavigationLink = styled(NavLink)`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	color: ${props => props.theme.color};
	font-size: 14px;
	line-height: 20px;
	margin: 0;
	padding: 0;
	text-decoration: none;
	transition: all .2s ease-in-out;

	&:link {
		color: ${props => props.theme.color};
	}

	&:visited {
		color: ${props => props.theme.color};
	}

	&:hover {
		color: ${props => props.theme.color};
		opacity: .8;
		transform: scale(1.1);
	}

	&:active {
		color: ${props => props.theme.color};
	}
`

const Navigation = styled.nav`
	display: flex;
	gap: 15px;
`

export const Header: React.FC = () => {
	const { name } = useTypesSelector(state => state.user)

	return (
		<StyledHeader>
			<Title>УНИВЕРСАМ</Title>
			<Navigation>
				<NavigationLink to={'/'}>Главная</NavigationLink>
				<NavigationLink to={'Catalog'}>Каталог</NavigationLink>
				<NavigationLink to={'Info'}>Информация</NavigationLink>
				<NavigationLink to={'Cart'}>Корзина</NavigationLink>
				<NavigationLink to={name ? 'Profile' : 'Auth'}>
					<img src='./images/profile.svg'/>
					{name ? name : 'Войти'}
				</NavigationLink>
			</Navigation>
		</StyledHeader>
	)
}