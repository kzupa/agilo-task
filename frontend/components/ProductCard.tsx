'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button, ProductShow } from '@/components';
  
  const ProductCard = ({ product, setIsModalOpen, setSelectedProduct }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [switchButton, setSwitchButton] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      setSelectedProduct(product);
      setTimeout(function(){
        setSwitchButton(true);
      }, 250);
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      setTimeout(function(){
        setSwitchButton(false);
      }, 250);
    };    
    
    useEffect(() => {
      return () => {
        setIsHovered(false);
        setSwitchButton(false);
      };
    }, []);

    return (
      <div className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-500 duration-300 border border-solid border-border' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img className='flex w-full justify-center items-center '
          src={product.thumbnail}
          alt={product.title}
          width={150}
          height={150}
        />
        <div className='bg-white border-t-solid border-t border-midnight p-3'>
          <div className={`rotating-div ${isHovered ? 'rotate-div' : ''}`}>
            {!switchButton && 
              <h4 className='text-midnight rotating-text font-mono'>{product.title} €{parseFloat(product.variants[0].prices[0].amount)/100}</h4>
            }
            {switchButton && <Button setIsModalOpen={setIsModalOpen}/>}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard