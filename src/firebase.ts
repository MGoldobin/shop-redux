import { initializeApp } from 'firebase/app'
import { FirebaseError } from '@firebase/util'
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { SignUpFormValues, SignInFormValues } from './utils/types/index'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

export const firebase_app = initializeApp(firebaseConfig)
export const db = getFirestore(firebase_app)
export const auth = getAuth(firebase_app)

export const logInWithEmailAndPassword = async (user: SignInFormValues) => {
	try {
		const response =  await signInWithEmailAndPassword(auth, user.email, user.password)
		return {
			status: 'success',
			data: await response.user.getIdToken()
		}
	} catch (error: unknown) {
		if (error instanceof FirebaseError) {
			return {
				status: 'error',
				code: error.code
			}
		}
	}
}

export const registrationWithEmailAndPassword = async (user: SignUpFormValues) => {
	try {
		const response = await createUserWithEmailAndPassword(auth, user.email, user.password)

		await addDoc(collection(db, 'users'), {
			uid: response.user.uid,
			...user,
			authProvider: 'local'
		})
		
		return {
			status: 'success',
			uid: response.user.uid
		}
	} catch (error: unknown) {
		if (error instanceof FirebaseError) {
      return { 
				status: 'error',
				code: error.code
			}
   }
	}
}