import type { Product, ProductsSearch } from "./interfaces";

export async function getAllProducts(query?: string | null) {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${query ?? ""}&limit=100`
  );
  if (!res.ok) throw new Error("Failed to load products");
  return (await res.json()) as ProductsSearch;
}

export async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to load product " + res.status);
  return (await res.json()) as Product;
}
