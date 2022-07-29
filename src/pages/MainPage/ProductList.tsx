import React, { useEffect } from 'react'
import styled from 'styled-components'

import { ProductCard } from '../../components/index'

import { useActions } from '../../utils/hooks/useActions'
import { useTypesSelector } from '../../utils/hooks/useTypesSelector'

const StyledProductList = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(1, 1fr);
	gap: 10px;

	@media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

	@media (min-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProductList: React.FC = () => {
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