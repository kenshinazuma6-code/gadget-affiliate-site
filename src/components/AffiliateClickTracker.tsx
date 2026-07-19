"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>(
        "a[data-affiliate-link]",
      );
      if (!link) return;

      sendGAEvent("event", "affiliate_click", {
        product_id: link.dataset.productId ?? "",
        product_name: link.dataset.productName ?? "",
        link_type: link.dataset.linkType ?? "",
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
