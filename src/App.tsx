import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout, MainPage, CartPage, ProductPage, PageNotFound, AuthPage } from './pages/index'
import { CustomThemeProvider } from './components/index'

import { useAuth } from './utils/hooks/useAuth'

export const NotAuthApp = () => (
	<>
		<Route path='Auth' element={<AuthPage />} />
	</>
)

export const AuthApp = () => (
	<>
		<Route path='Cart' element={<CartPage />}/>
		<Route path='Profile' element={<CartPage />}/>
	</>
)

const App: React.FC = () => {
	const { isLogin } = useAuth()
	
	return (
		<CustomThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<MainPage />}/>
						<Route path='Product/:productId' element={<ProductPage />} />
						<Route path='*' element={<PageNotFound />}/>
						{isLogin && AuthApp() /* я сделяль */} 
						{!isLogin && NotAuthApp()}
					</Route>
				</Routes>
			</BrowserRouter>
		</CustomThemeProvider>
	)
}

export default App