import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux' 

import App from './App'
import './assets/css/global.css'

import { store } from './store/index'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)