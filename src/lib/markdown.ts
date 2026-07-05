import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { renderCompareTableHtml, renderProductCardHtml } from "@/lib/product-html";

// 記事本文内で商品を参照するためのショートコード:
//   [compare:id1,id2,id3]  … 複数商品の比較表を挿入
//   [product:id]           … 単品の商品カードを挿入
function replaceShortcodes(html: string): string {
  let result = html.replace(
    /<p>\[compare:([a-z0-9,-]+)\]<\/p>/gi,
    (_match, ids: string) =>
      renderCompareTableHtml(ids.split(",").map((id) => id.trim())),
  );

  result = result.replace(
    /<p>\[product:([a-z0-9-]+)\]<\/p>/gi,
    (_match, id: string) => renderProductCardHtml(id.trim()),
  );

  return result;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);

  return replaceShortcodes(processed.toString());
}
