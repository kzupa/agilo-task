'use client';

import React, { useState, useEffect } from 'react';
import { Counter } from '@/components';

const ProductShow = ({ isModalOpen, setIsModalOpen, product }) => {
	const closeModal = () => {
		setIsModalOpen(false);
	}

	useEffect(() =>{
		const bodyElement = document.body;
    bodyElement.style.overflow = 'hidden'; /* Highlighted change: Apply overflow: hidden style to prevent scrolling */
    bodyElement.classList.add('modal-open'); /* Highlighted change: Add the CSS class to the body element */

    return () => {
      bodyElement.style.overflow = 'unset'; /* Highlighted change: Reset the overflow style */
      bodyElement.classList.remove('modal-open'); /* Highlighted change: Remove the CSS class when the modal is closed */
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
						<div className='col-span-2'>
							<img
								src={product.thumbnail}
								alt={product.title}
								width={320}
								height={320}
							/>
						</div>
						<div className='col-span-3'>
							<h2 className='font-bold text-[18px] border-b border-b-solid border-midnight mb-2'>{product.title}</h2>
							<p>{product.description}</p>
							<select className="block w-full py-2 my-5 border border-midnight rounded-md focus:outline-none focus:border-midnight">
								{product.variants.map((variant) => (
									<option value={variant.title}>{variant.title}</option>
								))}
							</select>
							<Counter />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default ProductShow
