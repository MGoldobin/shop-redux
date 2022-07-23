import React from 'react'
import styled from 'styled-components'

import { ToggleTheme } from './index'

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	padding: 10px 0;
`

export const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<ToggleTheme />
		</StyledFooter>
	)
}
