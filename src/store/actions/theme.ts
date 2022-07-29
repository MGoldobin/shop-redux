import { ThemeAction, ThemeActionTypes } from '../../utils/types'
import { Dispatch } from 'redux'

import { RootState } from '../index'

export const changeTheme = () => {
    return (dispatch: Dispatch<ThemeAction>, getState: () => RootState ) => {
			dispatch({ type: ThemeActionTypes.TOGGLE_THEME })
			localStorage.setItem('isLight', getState().theme.isLight.toString())
    }
}