import { UserState, UserAction, UserActionTypes } from '../../utils/types/index'

const initialState: UserState = {
	isLogin: false,
	uid: '',
	name: '',
	email: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch(action.type) {
		case UserActionTypes.LOG_IN:
			return {isLogin: true, uid: action.payload.uid, name: action.payload.name, email: action.payload.email}
		case UserActionTypes.LOG_OUT:
			return {isLogin: false, uid: '', name: '', email: ''}
		default:
			return state
	}
}