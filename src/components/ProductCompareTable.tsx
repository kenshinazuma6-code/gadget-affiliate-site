import Image from "next/image";
import { formatPrice, getProductsByIds } from "@/lib/products";
import PriceLinks from "@/components/PriceLinks";

export default function ProductCompareTable({
  productIds,
}: {
  productIds: string[];
}) {
  const products = getProductsByIds(productIds);

  if (products.length === 0) return null;

  return (
    <div className="not-prose my-8 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="w-40 p-3"></th>
            {products.map((product) => (
              <th key={product.id} className="p-3 align-top">
                <div className="relative mx-auto mb-2 aspect-square w-24 bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <p className="font-bold text-gray-900">{product.name}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <th className="p-3 font-semibold text-gray-500">価格</th>
            {products.map((product) => (
              <td key={product.id} className="p-3 font-bold text-gray-900">
                {formatPrice(product.priceMin, product.priceMax)}
              </td>
            ))}
          </tr>
          <tr>
            <th className="p-3 font-semibold text-gray-500">評価</th>
            {products.map((product) => (
              <td key={product.id} className="p-3">
                {product.rating ? (
                  <span className="text-amber-500">
                    ★ {product.rating.toFixed(1)}
                  </span>
                ) : (
                  "-"
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th className="p-3 font-semibold text-gray-500">おすすめポイント</th>
            {products.map((product) => (
              <td key={product.id} className="p-3">
                <ul className="list-disc space-y-1 pl-4">
                  {product.pros?.map((pro) => <li key={pro}>{pro}</li>)}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th className="p-3 font-semibold text-gray-500">購入先</th>
            {products.map((product) => (
              <td key={product.id} className="p-3">
                <PriceLinks
                  links={product.links}
                  productId={product.id}
                  productName={product.name}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
