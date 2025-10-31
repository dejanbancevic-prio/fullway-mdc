import { HandlerProps } from "./tagHandlers";
import Image from "next/image";

const imageTagHandler = ({ $el }: HandlerProps) => {
  const fallbackSrc =
    "/images/HomePage/FeaturedTires/fulllway-suv-bg-image-placeholder.jpg";
  const srcFromEl = $el.attr("src") ?? "";
  const src = srcFromEl.startsWith("http")
    ? srcFromEl
    : srcFromEl
    ? `https://www.prioritytire.com${srcFromEl}`
    : fallbackSrc;

  const alt = $el.attr("alt") || "Image";
  const title = $el.attr("title") || "";

  return (
    <div className="relative w-full h-[400px] my-4">
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        className="object-contain skew-x-[-3deg]"
      />
    </div>
  );
};

export default imageTagHandler;
