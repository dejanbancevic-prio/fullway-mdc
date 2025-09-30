import type { Cheerio, CheerioAPI } from 'cheerio'
import type { AnyNode, Element } from 'domhandler'
import aTagHandler from './aTagHandler'
import divTagHandler from './divTagHandler'
import figureTagHandler from './figureTagHandler'
import hTagsHandler from './hTagHandler'
import imageTagHandler from './imageTagHandler'
import pTagHandler from './pTagHandler'
import strongTagHandler from './strongTagHandler'
import ulTagHandler from './ulTagHandler'
import React from 'react'

export enum HeadingLevel {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
}

export type TocItem = {
  label: string
  href: string
  level: HeadingLevel
}

export type ParseOptions = {
  tocItems: TocItem[]
  setTocFound: () => void
}

export type HandlerProps = {
  el: Element
  $el: Cheerio<AnyNode>
  $cheerio: CheerioAPI
  opts: ParseOptions
  parseNodes: (
    nodes: Cheerio<AnyNode>,
    $cheerio: CheerioAPI,
    opts: ParseOptions,
  ) => React.ReactNode[]
}

export function defaultHandler({ $el, $cheerio, opts, parseNodes }: HandlerProps): React.ReactNode {
  const children = parseNodes($el.contents(), $cheerio, opts)

  return (
    <>
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </>
  )
}

export const tagHandlers: Record<string, (props: HandlerProps) => React.ReactNode> = {
  p: pTagHandler,
  figure: figureTagHandler,
  image: imageTagHandler,
  h2: hTagsHandler,
  h3: hTagsHandler,
  h4: hTagsHandler,
  a: aTagHandler,
  strong: strongTagHandler,
  ul: ulTagHandler,
  div: divTagHandler,
}
