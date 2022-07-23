export enum ProductActionTypes {
	FETCH_PRODUCTS = "FETCH_PRODUCTS",
	FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
	FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR"
}

interface FetchProductsAction {
	type: ProductActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction {
	type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
	payload: any[]
}

interface FetchProductsErrorAction {
	type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
	payload: string
}

export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction

export interface Product {
	id: number,
	title: string,
	price: number,
	category: string,
	description: string,
	image: string,
	rating: [
		avg: number, 
		count: number
	]
}

export interface ProductState {
	products: Product[],
	loading: boolean,
	error: null | string
}