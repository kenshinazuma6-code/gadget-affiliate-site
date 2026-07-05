import productsData from "../../data/products.json";

export interface ProductLinks {
  amazon?: string;
  rakuten?: string;
  yahoo?: string;
  a8?: string;
}

export interface Product {
  id: string;
  name: string;
  brand?: string;
  category: string;
  image: string;
  priceMin: number;
  priceMax?: number;
  rating?: number;
  description: string;
  pros?: string[];
  cons?: string[];
  links: ProductLinks;
}

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByIds(ids: string[]): Product[] {
  return ids
    .map((id) => getProductById(id))
    .filter((p): p is Product => Boolean(p));
}

export function formatPrice(priceMin: number, priceMax?: number): string {
  if (priceMax && priceMax !== priceMin) {
    return `${priceMin.toLocaleString()}円〜${priceMax.toLocaleString()}円`;
  }
  return `${priceMin.toLocaleString()}円`;
}
