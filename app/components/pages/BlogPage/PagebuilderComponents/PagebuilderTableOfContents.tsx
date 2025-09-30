type PagebuilderTableOfContentsItem = {
  label: string
  href: string
  level: number
}

const PagebuilderTableOfContents = ({ items }: { items: PagebuilderTableOfContentsItem[] }) => (
  <div className="flex flex-col justify-center items-center gap-[1rem] my-[1rem] bg-[#1a1a1a] rounded-lg p-[1rem]  ">
    <h2 className="text-2xl font-semibold">Table of Contents:</h2>

    <div className="py-[1rem] my-[1rem] pr-[1rem] bg-neutral-800 rounded-lg ">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2"
          style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
        >
          <span className="text-fullwayRed text-base leading-none">•</span>
          <a
            href={item.href}
            className="text-gray-400 underline hover:text-fullwayRed transition-colors"
          >
            {item.label}
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default PagebuilderTableOfContents
