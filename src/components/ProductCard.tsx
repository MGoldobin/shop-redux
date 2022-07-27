import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { Product } from '../types/index'

interface ProductCardProps {
	product: Product
}

const StyledProductCard = styled.div`
	display: flex;
	align-items: center;
	margin: 0px auto 0px;
	background: #fff;
	box-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.15);
	height: 350px;
	border-radius: 7px;
	width: 436px;
`

const Image = styled.img`
	height: 250px;
	width: 200px;
	object-fit: contain;
	background-color: #fff;
	margin: 0 10px;
`

const Info = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
  color: #777;
	background-color: #f7f5f6;
	height: 100%;
	flex: 1;
	border-radius: 0 7px 7px 0;
`

const Category = styled.h4`
	margin: 10px 0;
	font-size: 12pt;
	text-transform: uppercase;
	font-family: "Montserrat";
	font-weight: 300;
	color: #FF9800;
`

const Title = styled(NavLink)`
	font-size: 20pt;
	margin: 0;
	font-weight: 500;
	color: #333;
	text-decoration: none;
`

const TechList = styled.ul`
	padding: 0 0 0 20px;
	flex: 1;
`

const Price = styled.p`
	margin: 0;
	font-size: 20px;
	color: #000;
	display: inline-flex;
`

const BuyButton = styled.button`
	background-color: #ffa501;
	padding: 10px 20px;
	color: #fff;
	border-radius: 30px;
	text-transform: uppercase;
	font-weight: bold;
	transition: all .6s;
	border: 3px solid #ffa501;
	cursor: pointer;
	width: 100px;
	margin: 15px auto 5px;

	&:hover {
		color: #ffa501;
		background-color: #fff;
	}
`

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
	return (
		<StyledProductCard>
				<Image src={product.images[0]} />
				<Info>
					<Category>{product.category}</Category>
					<Title to={`product/${product.id}`}>{product.title}</Title>
					<TechList>
						{
							Boolean(product.characteristics.length)
							? <>
								<li>{product.characteristics[0]}</li>
								<li>{product.characteristics[1]}</li>
								<li>{product.characteristics[2]}</li>
							</>
							: []
						}
						<NavLink to={`product/${product.id}`}>Подробнее...</NavLink>
					</TechList>
					<Price>{product.price} руб</Price>
					<BuyButton>Купить</BuyButton>
				</Info>
		</StyledProductCard>
	)
}