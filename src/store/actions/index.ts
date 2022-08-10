import * as ProductActionCreators from './product'
import * as ThemeActionCreators from './theme'
import * as UsersActionCreators from './user'

export const ActionCreators = {
	...ProductActionCreators,
	...ThemeActionCreators,
	...UsersActionCreators
}