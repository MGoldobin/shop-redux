import { useTypesSelector } from './useTypesSelector'

export const useAuth = () => {
	const { isLogin, ...userStore } = useTypesSelector(state => state.user)

	return {
		isLogin,
		user: {
			...userStore
		}
	}
}