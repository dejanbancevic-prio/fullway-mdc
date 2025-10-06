import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Script from "next/script";

type BreadcrumbCompProps = {
  bgColor: string;
  color: string;
  nestedFirst: string;
  nestedSecond?: string | null;
  pathFirst: string;
  pathSecond?: string;
};

export function BreadcrumbComp({
  bgColor,
  color,
  nestedFirst,
  nestedSecond,
  pathFirst,
  pathSecond,
}: BreadcrumbCompProps) {
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.fullwaytires.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: nestedFirst,
      item: `https://www.fullwaytires.com${pathFirst}`,
    },
  ];

  if (nestedSecond && pathSecond) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: nestedSecond,
      item: `https://www.fullwaytires.com${pathSecond}`,
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <div className={`${bgColor} w-full`}>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full">
        <Breadcrumb className="my-[0.5rem]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className={`${color} hover:!text-fullwayRed`}
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className={`${color} hover:!text-fullwayRed`}
                href={pathFirst}
              >
                {nestedFirst}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {nestedSecond && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className={`${color} hover:!text-fullwayRed`}
                    href={pathSecond}
                  >
                    {nestedSecond}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
