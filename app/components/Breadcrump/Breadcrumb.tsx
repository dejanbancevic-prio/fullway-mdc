import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbCompProps = {
  bgColor: string;
  color: string;
  nestedFirst: string;
  nestedSecond?: string;
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
  return (
    <div className={`${bgColor} w-full`}>
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
