type PagebuilderTableOfContentsItem = {
  label: string;
  href: string;
  level: number;
};

const PagebuilderTableOfContents = ({
  items,
}: {
  items: PagebuilderTableOfContentsItem[];
}) => (
  <div className="flex flex-col justify-center items-center w-full ">
    <div className="py-[1.5rem] px-[3rem] w-full border ">
      <h2 className="text-2xl font-semibold text-start ">TABLE OF CONTENTS</h2>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 w-full"
          style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
        >
          <span className="text-base leading-none">•</span>
          <a href={item.href} className="text-white hover:underline">
            {item.label}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default PagebuilderTableOfContents;
