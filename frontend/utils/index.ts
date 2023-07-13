export async function fetchProducts() {
  const response = await fetch ('http://localhost:9000/store/products', {});

  const result = await response.json();

  return result.products;
}

export async function fetchCollections() {
  const response = await fetch ('http://localhost:9000/store/collections', {});

  const result = await response.json();

  return result.collections;
}
