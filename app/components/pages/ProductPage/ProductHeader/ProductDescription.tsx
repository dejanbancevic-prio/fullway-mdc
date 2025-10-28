"use client";

type TireDescriptionProps = {
  html?: string;
};

const ProductDescription = ({ html }: TireDescriptionProps) => {
  const fallbackText =
    "The tire offers excellent all weather traction. It combines its all season compound and directional tread design to boost the dry, wet and winter weather grip on the road surface.";

  let combinedText: string = `${fallbackText} `;

  if (html) {
    try {
      const temp = document.createElement("textarea");
      temp.innerHTML = html;
      const decodedHtml = temp.value;

      const doc = new DOMParser().parseFromString(decodedHtml, "text/html");

      const paragraphs = Array.from(doc.querySelectorAll("p"));

      const overviewIndex = paragraphs.findIndex(
        (p) =>
          p.querySelector("strong")?.textContent?.toUpperCase() === "OVERVIEW"
      );

      const overviewParagraph = paragraphs[
        overviewIndex + 1
      ]?.textContent?.trim();

      const nextParagraph = paragraphs[overviewIndex + 2]?.textContent?.trim();

      let nextTwoSentences: string | null = null;
      if (nextParagraph) {
        const sentences = nextParagraph
          .split(".")
          .map((s) => s.trim())
          .filter(Boolean);
        nextTwoSentences = sentences.slice(0, 2).join(". ") + ".";
      }

      combinedText = `${overviewParagraph || fallbackText} ${nextTwoSentences ||
        ""}`;
    } catch {
      combinedText = `${fallbackText}`;
    }
  }

  return <p>{combinedText}</p>;
};

export default ProductDescription;
