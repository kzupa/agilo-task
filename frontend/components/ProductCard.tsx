'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
    product: {
      description: string;
      thumbnail: string;
      title: string;
    };
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-500 duration-300 border border-solid border-border'>
        <img className='flex w-full justify-center items-center '
          src={product.thumbnail}
          alt={product.title}
          width={150}
          height={150}
        />
        <div className='bg-white border-t-solid border-t border-midnight'>
          <h2 className='text-midnight font-mono text-center p-5'>{product.title}</h2>
        </div>
      </div>
    );
  };
  
  export default ProductCard;