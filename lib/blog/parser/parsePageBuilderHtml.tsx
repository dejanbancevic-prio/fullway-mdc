import { load } from 'cheerio'
import generateBlogHeaderId from './handlers/generateBlogHeaderId'
import { type HeadingLevel, type TocItem } from './handlers/tagHandlers'
import parseChildren from './parseChildren'

export function parsePageBuilderHtml(html: string) {
  const $ = load(html)

  const tocItems: TocItem[] = []
  $('h1, h2, h3, h4').each((_, el) => {
    const $el = $(el)
    const label = $el.text().trim()
    const href = generateBlogHeaderId(label)
    $el.attr('id', href)

    tocItems.push({
      label,
      href: `#${href}`,
      level: Number(el.tagName[1]) as HeadingLevel,
    })
  })

  let tocFound = false
  const setTocFound = () => {
    tocFound = true
  }

  const bodyNodes = $('body').length > 0 ? $('body').contents() : $.root().contents()
  const parsedContent = <div>{parseChildren(bodyNodes, $, { tocItems, setTocFound })}</div>

  return { tocFound, tocItems, parsedContent }
}
