import React from 'react'
import styled from 'styled-components'
import { useTypesSelector } from '../../utils/hooks/useTypesSelector'

const StyledProfilePage = styled.div`

`

export const ProfilePage = () => {
	const { uid } = useTypesSelector(store => store.user)

	return (
		<StyledProfilePage>
			
		</StyledProfilePage>
	)
}