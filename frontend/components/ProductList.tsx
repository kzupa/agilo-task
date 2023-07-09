'use client';

import React, { useState } from 'react'
import { ProductCard, ProductShow } from '@/components'

const ProductList = ({products}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState('');
	
	return (
		<div className='homepage'>
			<div className='bg-light-gray relative items-center grid lg:grid-cols-4 md:grid-cols-2 gap-20 p-20'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} setIsModalOpen={setIsModalOpen} setSelectedProduct={setSelectedProduct}/>
				))}
			</div>
			{isModalOpen &&
			<div className='bg-white show-product' >
				<ProductShow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} product={selectedProduct}/>
			</div>
			}
		</div>
	)
}

export default ProductList