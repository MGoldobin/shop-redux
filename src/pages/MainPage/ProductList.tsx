import React, { useEffect } from 'react'
import styled from 'styled-components'

import { ProductCard } from '../../components/index'

import { useActions } from '../../hooks/useActions'
import { useTypesSelector } from '../../hooks/useTypesSelector'

const StyledProductList = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
`

const ProductList = () => {
	const { products, loading, error } = useTypesSelector(state => state.products)
	const { fetchProducts } = useActions()

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<StyledProductList>
			{
				products.map(product => <ProductCard key={product.id} product={product} />)
			}
		</StyledProductList>
	)
}

export default ProductList