import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { useActions } from '../../utils/hooks/useActions'
import { useTypesSelector } from '../../utils/hooks/useTypesSelector'

const StyledProfilePage = styled.div`

`

export const ProfilePage = () => {
	const { user } = useTypesSelector(store => store)
	const { LogOut } = useActions()
	const navigate = useNavigate()

	const handleClick = () => {
		LogOut()
		navigate('/')
	}

	return (
		<StyledProfilePage>
			<div>
				<div>name: {user.name}</div>
				<div>uid: {user.uid}</div>
				<div>email: {user.email}</div>
			</div>
			<button onClick={handleClick}>Выйти из системы</button>
		</StyledProfilePage>
	)
}