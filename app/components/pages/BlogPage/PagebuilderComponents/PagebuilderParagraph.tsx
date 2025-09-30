import type { PropsWithChildren } from 'react'

type PagebuilderParagraphProps = PropsWithChildren

const PagebuilderParagraph = ({ children }: PagebuilderParagraphProps) => {
  const content = Array.isArray(children)
    ? children.map((child, index) => <div key={index}>{child}</div>)
    : children

  return <div className="text-base text-justify mb-[0.5rem]">{content}</div>
}

export default PagebuilderParagraph
