import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../store/actions'
import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(ActionCreators, dispatch)
}