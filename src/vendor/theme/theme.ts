export type Theme = {
	color: string,
	errorColor: string,
	backgroundColor: string,
	errorBackgroundColor: string,
	borderColor: string,
	errorBorderColor: string,
	varColors: {
		
	},
	toggle: {
		backgroundColor: string
		backgroundColorDisabled: string
	},
}

export * from './themeLight'
export * from './themeDark'