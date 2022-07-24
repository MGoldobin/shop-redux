import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useTypesSelector } from '../hooks/useTypesSelector'

import { themeLight, themeDark } from '../vendor/theme/theme'

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
