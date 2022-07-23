import * as ProductActionCreators from './product'
import * as ThemeActionCreators from './theme'

export const ActionCreators = {
	...ProductActionCreators,
	...ThemeActionCreators
}