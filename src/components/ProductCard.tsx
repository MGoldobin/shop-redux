import React from 'react'
import styled from 'styled-components'

import { Product } from '../types/index'

interface ProductCardProps {
	product: Product
}

const StyledProductCard = styled.div`
	color: ${props => props.theme.color};
  margin: 0 auto;
  border-radius: 7px 7px 7px 7px;
	border: 1px solid ${props => props.theme.borderColor};
	width: 250px;
	height: 350px;
`

const Image = styled.img`
	width: 100%;
	height: 300px;
  border-radius: 7px 7px 0 0;
	object-fit: contain;
	background-color: #fff;
`

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
	return (
		<StyledProductCard>
			<Image src={product.image} alt={product.title}/>
			{product.title}
  	</StyledProductCard>
	)
}