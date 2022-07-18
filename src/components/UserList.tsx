import axios from 'axios'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypesSelector } from '../hooks/useTypesSelector'

const UserList: React.FC = () => {
	const { users, loading, error } = useTypesSelector(state => state.users)
	const { fetchUsers } = useActions()

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
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
				users.map(user => <p key={user.id}>{user.name}</p>)
			}
		</div>
	)
}

export default UserList