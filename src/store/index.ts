import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

import { productReducer } from './reducers/productReducer'
import { themeReducer } from "./reducers/themeReducer"

const rootReducer = combineReducers({
	products: productReducer,
	theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))