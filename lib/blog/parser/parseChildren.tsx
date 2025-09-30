/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import type { Cheerio, CheerioAPI } from 'cheerio'
import type { AnyNode } from 'domhandler'
import React from 'react'
import type { ParseOptions } from './handlers/tagHandlers'
import { defaultHandler, tagHandlers } from './handlers/tagHandlers'

const parseChildren = (
  nodes: Cheerio<AnyNode>,
  $cheerio: CheerioAPI,
  opts: ParseOptions,
): React.ReactNode[] => {
  const elements: React.ReactNode[] = []

  nodes.each((_, el) => {
    if (el.type === 'text') {
      const cleaned = el.data.replace(/\s+/g, ' ')
      if (cleaned) elements.push(cleaned)
    } else if (el.type === 'tag') {
      const $el = $cheerio(el)
      const handler = tagHandlers?.[el.tagName] ?? defaultHandler

      const renderedElement = handler({ el, $el, $cheerio, opts, parseNodes: parseChildren })
      if (renderedElement) elements.push(renderedElement)
    }
  })

  return React.Children.toArray(elements)
}

export default parseChildren
