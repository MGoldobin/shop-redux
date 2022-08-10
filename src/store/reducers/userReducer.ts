import { AUTH_COOKIE, AUTH_USER_NAME_COOKIE } from '../../utils/constants/cookie'
import { getCookie } from '../../utils/helpers/cookie'
import { UserState, UserAction, UserActionTypes } from '../../utils/types/index'

const initialState: UserState = {
	uid: getCookie(AUTH_COOKIE) || null,
	name: getCookie(AUTH_USER_NAME_COOKIE) || null,
	email: getCookie(AUTH_USER_NAME_COOKIE) || null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch(action.type) {
		case UserActionTypes.LOG_IN:
			return {uid: action.payload.uid, name: action.payload.name, email: action.payload.email}
		case UserActionTypes.LOG_OUT:
			return {uid: null, name: null, email: null}
		default:
			return state
	}
}