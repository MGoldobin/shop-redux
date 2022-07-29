export enum ThemeActionTypes {
	TOGGLE_THEME = "TOGGLE_THEME"
}

interface ToggleThemeAction {
	type: ThemeActionTypes.TOGGLE_THEME
}
export type ThemeAction = ToggleThemeAction

export interface ThemeState {
	isLight: boolean
}