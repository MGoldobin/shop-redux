export enum UserActionTypes {
	LOG_IN = "LOG_IN",
	LOG_OUT = "LOG_OUT",
}

interface LogInThemeAction {
	type: UserActionTypes.LOG_IN
	payload: UserState
}

interface LogOutThemeAction {
	type: UserActionTypes.LOG_OUT
}

export type UserAction = LogInThemeAction | LogOutThemeAction

export interface UserState {
	isLogin: boolean,
	uid: string,
	name: string,
	email: string
}