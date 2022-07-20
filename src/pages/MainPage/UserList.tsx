import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useActions } from '../../hooks/useActions'
import { useTypesSelector } from '../../hooks/useTypesSelector'

const StyledName = styled.p`
	color: ${props => props.theme.color};
`

const UserList: React.FC = () => {
	const { users, loading, error } = useTypesSelector(state => state.users)
	const { fetchUsers } = useActions()

	useEffect(() => {
		fetchUsers()
	}, [])

	if (loading) {
		return <h1>Загрузка!</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{
				users.map(user => <StyledName key={user.id}>{user.name}</StyledName>)
			}
		</div>
	)
}

export default UserList