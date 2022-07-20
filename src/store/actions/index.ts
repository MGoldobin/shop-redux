import * as UserActionCreators from './user'
import * as ThemeActionCreators from './theme'

export const ActionCreators = {
	...UserActionCreators,
	...ThemeActionCreators
}