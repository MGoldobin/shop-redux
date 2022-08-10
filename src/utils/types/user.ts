import { UserCredential, } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

export enum UserActionTypes {
	LOG_IN = "LOG_IN",
	LOG_OUT = "LOG_OUT",
}

interface LogInAction {
	type: UserActionTypes.LOG_IN
	payload: UserState
}

interface LogOutAction {
	type: UserActionTypes.LOG_OUT
}

export type UserAction = LogInAction | LogOutAction

export interface UserState {
	uid: string|null,
	name: string|null,
	email: string|null
}

export type RequestDataType = {
	data: UserCredential['user'] | null,
	error: FirebaseError['code'] | null
}