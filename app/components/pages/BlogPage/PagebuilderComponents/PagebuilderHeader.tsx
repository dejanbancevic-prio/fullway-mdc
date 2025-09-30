import React from "react"

export type HeaderLevels = 1 | 2 | 3 | 4

type PagebuilderHeaderProps = {
  level: HeaderLevels
  id: string
  children: React.ReactNode
}

const spacingByLevel: Record<number, string> = {
  1: "mt-[1rem] mb-[1rem]",
  2: "mt-[2.75rem] mb-[1.25rem]",
  3: "mt-[2.25rem] mb-[1.75rem]",
  4: "mt-[1.5rem] mb-[1rem]",
}

const fontSizeByLevel: Record<number, string> = {
  1: "text-4xl md:text-6xl",
  2: "text-3xl md:text-5xl",
  3: "text-2xl md:text-4xl",
  4: "text-xl md:text-2xl",
}

const PagebuilderHeader = ({ level, id, children }: PagebuilderHeaderProps) => {
  const spacing = spacingByLevel[level]
  const fontSize = fontSizeByLevel[level]

  return (
    <h2 id={id} className={`${fontSize} font-bold ${spacing} scroll-mt-[4rem]`}>
      {children}
    </h2>
  )
}

export default PagebuilderHeader
