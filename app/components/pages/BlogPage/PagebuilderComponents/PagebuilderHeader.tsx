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
  1: "text-[2.25rem]",
  2: "text-[2.25rem]",
  3: "text-[1.75rem]",
  4: "text-[2.25rem]",
}

const PagebuilderHeader = ({ level, id, children }: PagebuilderHeaderProps) => {
  const spacing = spacingByLevel[level]
  const fontSize = fontSizeByLevel[level]

  return (
    <h2 id={id} className={`${fontSize} font-[700] ${spacing} uppercase text-start scroll-mt-[4rem] italic`}>
      {children}
    </h2>
  )
}

export default PagebuilderHeader
