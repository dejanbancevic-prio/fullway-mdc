import PagebuilderHeader from '@/app/components/pages/BlogPage/PagebuilderComponents/PagebuilderHeader'
import generateBlogHeaderId from './generateBlogHeaderId'
import type { HandlerProps, HeadingLevel } from './tagHandlers'

const hTagsHandler = ({ $el, el, $cheerio, opts, parseNodes }: HandlerProps) => {
  const id = generateBlogHeaderId($el.text())
  const level = parseInt(el.tagName.replace('h', ''), 10) as HeadingLevel

  // Instead of using $el.text(), pass parsed children
  const children = parseNodes($el.contents(), $cheerio, opts)

  return (
    <PagebuilderHeader level={level} id={id}>
      {children}
    </PagebuilderHeader>
  )
}

export default hTagsHandler
