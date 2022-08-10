import { useTypesSelector } from './useTypesSelector'

export const useAuth = () => {
	const { ...userStore } = useTypesSelector(state => state.user)

	return {
		isLogin: !!userStore.uid,
		user: {
			...userStore
		}
	}
}