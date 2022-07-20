import { ThemeAction, ThemeState, ThemeActionTypes } from '../../types/index'

const initialState: ThemeState = {
	isLight: !localStorage.getItem('isLight') ? true : (localStorage.getItem('isLight') === "true" ? true : false)
}

export const themeReducer = (state = initialState, action: ThemeAction): ThemeState => {
	switch(action.type) {
		case ThemeActionTypes.TOGGLE_THEME: {
			return { isLight: !state.isLight }
		}
		default: {
			return state
		}
	}
}