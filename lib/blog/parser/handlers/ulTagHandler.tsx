import type { HandlerProps } from './tagHandlers'
import type { Element } from 'domhandler'
import React from 'react'

const ulTagHandler = ({ $el, $cheerio, opts, parseNodes }: HandlerProps) => {
  const prevText = $el.prev()?.text()?.trim().toLowerCase()
  if (prevText?.includes('table of contents')) return null

  const listItems = $el
    .children('li')
    .map((i, liNode) => {
      const liEl = liNode as Element
      const children = parseNodes($cheerio(liEl).contents(), $cheerio, opts)
      
      const keyedChildren = React.Children.map(children, (child, idx) => (
        <React.Fragment key={idx}>{child}</React.Fragment>
      ))

      return (
        <li key={`li-${i}`} className="mb-1">
          {keyedChildren}
        </li>
      )
    })
    .get() as React.ReactNode[]

  return <ul className="list-disc ml-6 mb-4">{listItems}</ul>
}

export default ulTagHandler
