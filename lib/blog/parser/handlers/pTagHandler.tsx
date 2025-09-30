import React from 'react'
import PagebuilderTableOfContents from '@/app/components/pages/BlogPage/PagebuilderComponents/PagebuilderTableOfContents'
import PagebuilderParagraph from '@/app/components/pages/BlogPage/PagebuilderComponents/PagebuilderParagraph'
import type { HandlerProps } from './tagHandlers'

const pTagHandler = ({ $el, $cheerio, opts, parseNodes }: HandlerProps) => {
  const { setTocFound, tocItems } = opts
  const pText = $el.text().trim().toLowerCase()

  if (pText.includes('table of contents:')) {
    setTocFound()
    return <PagebuilderTableOfContents items={tocItems} />
  }

  const children = parseNodes($el.contents(), $cheerio, opts)

  return (
    <PagebuilderParagraph>
      {children}
    </PagebuilderParagraph>
  )
}

export default pTagHandler
