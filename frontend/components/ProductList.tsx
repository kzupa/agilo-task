'use client';

import React, { useState, useEffect } from 'react'
import { ProductCard, ProductShow, Filter } from '@/components'

const ProductList = ({products, collections}) => {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState('');
	const [selectedCollections, setSelectedCollections] = useState('');

	useEffect(() => {
		if (selectedCollections.length === 0) {
			setFilteredProducts(products);
		} else {
			const includedProducts = products.filter((product) =>
				selectedCollections.includes(product.collection_id)
			);
			setFilteredProducts(includedProducts);
		}
	}, [selectedCollections])

	return (
		<div>
			<div className='bg-light-gray relative items-center md:px-20 max-md:px-5 pt-10'>
				<Filter collections={collections} selectedCollections={selectedCollections} setSelectedCollections={setSelectedCollections} />
			</div>
			<div className='homepage'>
				<div className='bg-light-gray relative items-center grid lg:grid-cols-4 md:grid-cols-2 gap-20 p-20 max-md:px-5'>
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} setIsModalOpen={setIsModalOpen} setSelectedProduct={setSelectedProduct}/>
					))}
				</div>
				{isModalOpen &&
				<div className='bg-white show-product' >
					<ProductShow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} product={selectedProduct}/>
				</div>
				}
			</div>
		</div>
	)
}

export default ProductList