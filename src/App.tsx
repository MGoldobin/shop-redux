import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux' 

import { MainPage } from './pages/index'
import { CustomThemeProvider } from './components/index'

import { store } from './store/index'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<CustomThemeProvider>
				<BrowserRouter>
						<Routes>
							<Route path='*' element={<MainPage />}/>
						</Routes>
				</BrowserRouter>
			</CustomThemeProvider>
		</Provider>
	)
}

export default App