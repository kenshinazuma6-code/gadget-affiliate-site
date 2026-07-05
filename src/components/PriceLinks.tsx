import type { ProductLinks } from "@/lib/products";

const LABELS: Record<keyof ProductLinks, string> = {
  amazon: "Amazonで見る",
  rakuten: "楽天で見る",
  yahoo: "Yahoo!で見る",
  a8: "詳細を見る",
};

export default function PriceLinks({ links }: { links: ProductLinks }) {
  const entries = (Object.keys(LABELS) as (keyof ProductLinks)[]).filter(
    (key) => links[key],
  );

  if (entries.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {entries.map((key) => (
        <a
          key={key}
          href={links[key]}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          {LABELS[key]}
        </a>
      ))}
    </div>
  );
}
