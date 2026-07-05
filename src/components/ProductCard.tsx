import Image from "next/image";
import { formatPrice, type Product } from "@/lib/products";
import PriceLinks from "@/components/PriceLinks";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-square w-full bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        {product.brand && (
          <span className="text-xs text-gray-500">{product.brand}</span>
        )}
        <h3 className="text-base font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.priceMin, product.priceMax)}
          </span>
          {product.rating && (
            <span className="text-sm text-amber-500">
              ★ {product.rating.toFixed(1)}
            </span>
          )}
        </div>
        <PriceLinks links={product.links} />
      </div>
    </div>
  );
}
