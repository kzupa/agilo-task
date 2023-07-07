import Image from 'next/image'
import { fetchProducts } from '@/utils';
import { ProductCard } from '@/components';

  export default async function Home() {
    const allProducts = await fetchProducts();
  
    const renderProductCards = () => {
      if (allProducts.length === 0) {
        return <p>Loading...</p>;
      }
  
      return allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ));
    };
    
    return (
      <div className='bg-light-gray relative items-center grid lg:grid-cols-4 md:grid-cols-2 gap-20 p-20'>
        {renderProductCards()}
      </div>
    );
  }
