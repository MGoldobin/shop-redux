import { ThemeAction, ThemeActionTypes } from '../../types'
import { Dispatch } from 'redux'

import { RootState } from '../index'

export const changeTheme = () => {
    return (dispatch: Dispatch<ThemeAction>, getState: () => RootState ) => {
			dispatch({ type: ThemeActionTypes.TOGGLE_THEME })
			localStorage.setItem('isLight', getState().theme.isLight.toString())
    }
}