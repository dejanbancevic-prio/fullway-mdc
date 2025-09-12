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
  name: string;
  path: string;
};

export function BreadcrumbComp({
  bgColor,
  color,
  name,
  path,
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
                href={path}
              >
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
