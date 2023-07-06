export async function fetchProducts() {
    const response = await fetch ('http://localhost:9000/store/products', {});

    const result = await response.json();

    return result.products;
}