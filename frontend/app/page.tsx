import Image from 'next/image'
import { fetchProducts, fetchCollections } from '@/utils';
import { ProductList } from '@/components';

  export default async function Home() {
    const allProducts = await fetchProducts();
    const allCollections = await fetchCollections();
  
    const renderProductList = () => {
      if (allProducts.length === 0) {
        return <p>Loading...</p>;
      }
  
      return <ProductList products={allProducts} collections={allCollections} />
    };
    
    return (
      <div>
        {renderProductList()}
      </div>
    );
  }
