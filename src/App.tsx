import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux' 

import { Layout, MainPage, CartPage, ProductPage, PageNotFound } from './pages/index'
import { CustomThemeProvider } from './components/index'

import { store } from './store/index'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<CustomThemeProvider>
				<BrowserRouter>
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route index element={<MainPage />}/>
								<Route path='Cart' element={<CartPage />}/>
								<Route path='Product'>
									<Route index element={<PageNotFound />}/>
									<Route path=':productId' element={<ProductPage />} />
								</Route>
								<Route path='*' element={<PageNotFound />}/>
							</Route>
						</Routes>
				</BrowserRouter>
			</CustomThemeProvider>
		</Provider>
	)
}

export default App