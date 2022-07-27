import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { productReducer, themeReducer, userReducer } from './reducers/index'

const rootReducer = combineReducers({
	products: productReducer,
	theme: themeReducer,
	user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))