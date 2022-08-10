import { Dispatch } from 'redux'
import { FirebaseError } from '@firebase/util'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'

import { SignInFormValues, SignUpFormValues } from '../../utils/types/index'
import { auth } from '../../utils/firebase/index'
import { UserActionTypes, UserAction } from '../../utils/types/index'
import { deleteCookie, setCookie } from '../../utils/helpers/cookie'
import { AUTH_COOKIE, AUTH_USER_EMAIL_COOKIE, AUTH_USER_NAME_COOKIE } from '../../utils/constants/cookie'

export const SignInWithEmailAndPassword = (userForm: SignInFormValues, setErrorSignIn: React.Dispatch<React.SetStateAction<string | null>>) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, userForm.email, userForm.password)
			console.log(user)
			setCookie(AUTH_COOKIE, user.uid)
			setCookie(AUTH_USER_NAME_COOKIE, user.displayName)
			setCookie(AUTH_USER_EMAIL_COOKIE, user.email)
      dispatch({
				type: UserActionTypes.LOG_IN,
				payload: {
					uid: user.uid,
					name: user.displayName || user.email,
					email: user.email
				}
			})
		} catch (error) {
			if (error instanceof FirebaseError) {
				setErrorSignIn(error.code)
				console.log(error.code)
			}
		}
	}
}

export const SignUpWithEmailAndPassword = (userForm: SignUpFormValues, setErrorSignUp: React.Dispatch<React.SetStateAction<string | null>>) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, userForm.email, userForm.password)
			updateProfile(user, {
				displayName: userForm.name
			})
					/*await addDoc(collection(db, 'users'), {
					uid: response.user.uid,
					...user,
					authProvider: 'local'
					})
					*/
			console.log(user)
			setCookie(AUTH_COOKIE, user.uid)
			setCookie(AUTH_USER_NAME_COOKIE, user.displayName)
			setCookie(AUTH_USER_EMAIL_COOKIE, user.email)
			dispatch({
				type: UserActionTypes.LOG_IN,
				payload: {
					uid: user.uid,
					name: user.displayName,
					email: user.email
				}
			})
		} catch (error) {
			if (error instanceof FirebaseError) {
				setErrorSignUp(error.code)
				console.log(error.code)
			}
		}
	}
}

export const LogOut = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({type: UserActionTypes.LOG_OUT})
		signOut(auth)
		deleteCookie(AUTH_COOKIE)
	}
}