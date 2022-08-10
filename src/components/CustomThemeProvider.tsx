import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useTypesSelector } from '../utils/hooks/useTypesSelector'

import { themeLight, themeDark } from '../utils/helpers/theme/theme'

interface CustomThemeProviderProps {
	children?: React.ReactNode
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = (props) => {
	const { isLight } = useTypesSelector(state => state.theme)

	return (
		<ThemeProvider theme={isLight ? themeLight : themeDark}>
			{props.children}
		</ThemeProvider>
	)
}
