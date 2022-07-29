import { Product, ProductAction, ProductActionTypes } from "../../utils/types/product"
import { Dispatch } from "redux"
import axios from "axios"

import { fetchFakeData } from '../../utils/helpers/DATA'

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const prom = await fetchFakeData() //axios.get('https://fakestoreapi.com/products')
            setTimeout(() => {
                dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: prom.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}