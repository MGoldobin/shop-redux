import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

import { userReducer } from './reducers/userReducer'
import { themeReducer } from "./reducers/themeReducer"

const rootReducer = combineReducers({
	users: userReducer,
	theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))