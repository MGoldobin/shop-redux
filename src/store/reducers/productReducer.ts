import { ProductAction, ProductState, ProductActionTypes } from '../../utils/types/index'

const initialState: ProductState = {
	products: [],
	loading: false,
	error: null
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCTS: 
			return {...state, loading: true}

		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS: 
			return {products: action.payload, loading: false, error: null}

		case ProductActionTypes.FETCH_PRODUCTS_ERROR: 
			return {products: [], loading: false, error: action.payload}
			
		default:
			return state
	}
}