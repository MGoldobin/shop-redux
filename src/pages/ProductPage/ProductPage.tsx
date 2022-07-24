import React, { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

export const ProductPage: React.FC = () => {
	const { productId }  = useParams()

	return (
		<>
			{ Number(productId) !== Number(productId) ? <Navigate to='*'/> : productId }
		</>
	)
}