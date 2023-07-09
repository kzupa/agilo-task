import Image from 'next/image'
import { fetchProducts } from '@/utils';
import { ProductList } from '@/components';

  export default async function Home() {
    const allProducts = await fetchProducts();
  
    const renderProductList = () => {
      if (allProducts.length === 0) {
        return <p>Loading...</p>;
      }
  
      return <ProductList products={allProducts} />
    };
    
    return (
      <div>
        {renderProductList()}
      </div>
    );
  }
