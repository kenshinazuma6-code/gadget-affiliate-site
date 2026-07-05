import {
  formatPrice,
  getProductById,
  getProductsByIds,
  type ProductLinks,
} from "@/lib/products";

// 記事Markdown内のショートコード（[compare:...] [product:...]）を
// 静的HTML文字列に変換するための関数群。
// React Server Componentからreact-dom/serverを使うことはできないため、
// UIコンポーネント（ProductCard/ProductCompareTable）とはクラス構成のみ揃えた
// 素のHTML文字列として出力する。

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const LINK_LABELS: Record<string, string> = {
  amazon: "Amazonで見る",
  rakuten: "楽天で見る",
  yahoo: "Yahoo!で見る",
  a8: "詳細を見る",
};

function renderLinksHtml(links: ProductLinks): string {
  const buttons = (Object.entries(links) as [string, string | undefined][])
    .filter(([, url]) => url)
    .map(
      ([key, url]) =>
        `<a href="${escapeHtml(url!)}" target="_blank" rel="nofollow sponsored noopener noreferrer" class="inline-block rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white no-underline">${LINK_LABELS[key] ?? "詳細を見る"}</a>`,
    )
    .join("");

  if (!buttons) return "";
  return `<div class="flex flex-wrap gap-2">${buttons}</div>`;
}

export function renderProductCardHtml(id: string): string {
  const product = getProductById(id);
  if (!product) return "";

  const rating = product.rating
    ? `<span class="text-sm text-amber-500">★ ${product.rating.toFixed(1)}</span>`
    : "";

  return `
<div class="not-prose my-8 max-w-sm flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="relative aspect-square w-full bg-gray-50">
    <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="h-full w-full object-contain p-4" />
  </div>
  <div class="flex flex-1 flex-col gap-2 p-4">
    ${product.brand ? `<span class="text-xs text-gray-500">${escapeHtml(product.brand)}</span>` : ""}
    <h3 class="text-base font-bold text-gray-900">${escapeHtml(product.name)}</h3>
    <p class="text-sm text-gray-600">${escapeHtml(product.description)}</p>
    <div class="mt-auto flex items-center justify-between pt-2">
      <span class="text-lg font-bold text-gray-900">${formatPrice(product.priceMin, product.priceMax)}</span>
      ${rating}
    </div>
    ${renderLinksHtml(product.links)}
  </div>
</div>`.trim();
}

export function renderCompareTableHtml(ids: string[]): string {
  const products = getProductsByIds(ids);
  if (products.length === 0) return "";

  const headerCells = products
    .map(
      (product) => `
      <th class="p-3 align-top">
        <div class="relative mx-auto mb-2 aspect-square w-24 bg-white">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="h-full w-full object-contain" />
        </div>
        <p class="font-bold text-gray-900">${escapeHtml(product.name)}</p>
      </th>`,
    )
    .join("");

  const priceCells = products
    .map(
      (product) =>
        `<td class="p-3 font-bold text-gray-900">${formatPrice(product.priceMin, product.priceMax)}</td>`,
    )
    .join("");

  const ratingCells = products
    .map(
      (product) =>
        `<td class="p-3">${product.rating ? `<span class="text-amber-500">★ ${product.rating.toFixed(1)}</span>` : "-"}</td>`,
    )
    .join("");

  const prosCells = products
    .map(
      (product) =>
        `<td class="p-3"><ul class="list-disc space-y-1 pl-4">${(product.pros ?? [])
          .map((pro) => `<li>${escapeHtml(pro)}</li>`)
          .join("")}</ul></td>`,
    )
    .join("");

  const linkCells = products
    .map((product) => `<td class="p-3">${renderLinksHtml(product.links)}</td>`)
    .join("");

  return `
<div class="not-prose my-8 overflow-x-auto rounded-lg border border-gray-200">
  <table class="w-full min-w-[640px] border-collapse text-left text-sm">
    <thead>
      <tr class="bg-gray-50">
        <th class="w-40 p-3"></th>
        ${headerCells}
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr><th class="p-3 font-semibold text-gray-500">価格</th>${priceCells}</tr>
      <tr><th class="p-3 font-semibold text-gray-500">評価</th>${ratingCells}</tr>
      <tr><th class="p-3 font-semibold text-gray-500">おすすめポイント</th>${prosCells}</tr>
      <tr><th class="p-3 font-semibold text-gray-500">購入先</th>${linkCells}</tr>
    </tbody>
  </table>
</div>`.trim();
}
