export type Theme = {
	color: string,
	backgroundColor: string,
	borderColor: string,
	varColors: {
		
	},
	toggle: {
		backgroundColor: string
		backgroundColorDisabled: string
	},
}

export * from './themeLight'
export * from './themeDark'