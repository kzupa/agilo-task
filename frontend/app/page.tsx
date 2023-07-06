import Image from 'next/image'
import { fetchProducts } from '@/utils';


export default async function Home() {
  const allProducts = await fetchProducts();

  return (
    <p>{ JSON.stringify(allProducts)}</p>
  )
}
