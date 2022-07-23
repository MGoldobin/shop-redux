import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.main`
	flex: 1;
`

interface ContentProps {
	children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({children}) => {
	return (
		<StyledContent>
			{children}
		</StyledContent>
	)
}
