import { load } from "cheerio";
import generateBlogHeaderId from "./handlers/generateBlogHeaderId";
import { HeadingLevel, TocItem } from "./handlers/tagHandlers";
import parseChildren from "./parseChildren";
import React from "react";

export function parsePageBuilderHtml(html: string) {
  const $ = load(html);

  const tocItems: TocItem[] = [];
  $("h1, h2, h3, h4").each((_, el) => {
    const $el = $(el);
    const label = $el.text().trim();
    const href = generateBlogHeaderId(label);
    $el.attr("id", href);

    tocItems.push({
      label,
      href: `#${href}`,
      level: Number(el.tagName[1]) as HeadingLevel,
    });
  });

  let tocFound = false;
  const setTocFound = () => {
    tocFound = true;
  };

  // const headings: React.ReactNode[] = [];
  // $("h2").each((idx, h2El) => {
  //   const $h2 = $(h2El);
  //   const parsedChildren = parseChildren($h2.contents(), $, {
  //     tocItems,
  //     setTocFound,
  //   });

  //   headings.push(
  //     <h2
  //       key={`h2-${idx}`}
  //       id={$h2.attr("id")}
  //       className="text-[2.25rem] italic font-bold mb-4 text-start uppercase w-full"
  //     >
  //       {parsedChildren}
  //     </h2>
  //   );
  // });

  // const lists: React.ReactNode[] = [];
  // $("ul").each((idx, ulEl) => {
  //   const $ul = $(ulEl);
  //   const parsedChildren = parseChildren($ul.contents(), $, {
  //     tocItems,
  //     setTocFound,
  //   });

  //   lists.push(
  //     <ul key={idx} className="list-disc ml-6 mb-4 text-start">
  //       {parsedChildren
  //         .filter((child) => {
  //           if (child == null) return false;
  //           if (typeof child === "string" && !child.trim()) return false;
  //           return true;
  //         })
  //         .map((child, i) => (
  //           <li key={i}>{child}</li>
  //         ))}
  //     </ul>
  //   );
  // });

  const bodyNodesFull =
    $("body").length > 0 ? $("body").contents() : $.root().contents();
    
  const parsedFullContent = (
    <div>{parseChildren(bodyNodesFull, $, { tocItems, setTocFound })}</div>
  );

  // const quickReviewNodes = [];
  // const quickReviewHeader = $("h2")
  //   .filter((_, el) => $(el).text().trim().toLowerCase() === "quick review")
  //   .first();

  // if (quickReviewHeader.length) {
  //   let next = quickReviewHeader.next();
  //   quickReviewNodes.push(quickReviewHeader[0]);

  //   while (next.length && !/^h[2-4]$/i.test(next[0].tagName || "")) {
  //     quickReviewNodes.push(next[0]);
  //     const temp = next.next();
  //     next.remove();
  //     next = temp;
  //   }

  //   quickReviewHeader.remove();
  // }

  // const bodyNodesClean =
  //   $("body").length > 0 ? $("body").contents() : $.root().contents();

  // const parsedContent = (
  //   <div>{parseChildren(bodyNodesClean, $, { tocItems, setTocFound })}</div>
  // );

  return {
    tocFound,
    tocItems,
    parsedFullContent,
  };
}
