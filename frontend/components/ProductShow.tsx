'use client';

import React, { useState, useEffect } from 'react';
import { Counter, ProductPrice } from '@/components';

const ProductShow = ({ isModalOpen, setIsModalOpen, product }) => {
	const closeModal = () => {
		setIsModalOpen(false);
	}

	useEffect(() =>{
		const bodyElement = document.body;
    bodyElement.style.overflow = 'hidden';
    bodyElement.classList.add('modal-open');

    return () => {
      bodyElement.style.overflow = 'unset';
      bodyElement.classList.remove('modal-open');
    };
  }, [isModalOpen]);

	if (!isModalOpen) return null;

	return (
		<div className="modal-wrapper text-midnight fixed inset-0 flex items-center justify-center z-50">
			<div className="bg-white  overflow-y-auto p-5 pt-3 rounded shadow-lg lg:w-7/12 md:w-11/12 max-h-screen">
				<div>
					<div className='grid place-content-end mb-3'>
						<span onClick={closeModal} className='cursor-pointer text-[20px] font-bold text-midnight'>x</span>
					</div>
					<div className='md:grid md:grid-cols-5'>
						<div className='col-span-2 max-sm:mb-5'>
							<img
								className='max-sm:mx-auto'
								src={product.thumbnail}
								alt={product.title}
								width={320}
								height={320}
							/>
						</div>
						<div className='col-span-3'>
							<h2 className='font-bold text-[18px] border-b border-b-solid border-midnight mb-2'>{product.title}</h2>
							<div className='py-1 font-bold text-[18px]'>
								<ProductPrice product={product} showIcon={true} />
							</div>
							<p>{product.description}</p>
							<div>
								<p className='mt-3'>Size</p>
								<select className="block w-full py-2 border border-midnight rounded-md focus:outline-none focus:border-midnight">
									{[...new Set(product.options[0].values.map(size => size.value))].map((size) => (
										<option value={size}>{size}</option>
									))}
								</select>
							</div>
							{product.options.length == 2 ?
								<div>
									<p className='mt-3'>Color</p>
									<select className="block w-full py-2 border border-midnight rounded-md focus:outline-none focus:border-midnight">
										{[...new Set(product.options[1].values.map(color => color.value))].map((color) => (
											<option value={color}>{color}</option>
										))}
									</select>
								</div> : ''
							}
							<Counter />
							<div className='grid mt-5'>
								<button
									className="bg-midnight text-light-gray p-2 items-center rounded">
										Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default ProductShow;
