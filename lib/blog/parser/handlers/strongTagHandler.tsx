import type { HandlerProps } from './tagHandlers'

const strongTagHandler = ({ $el, $cheerio, opts, parseNodes }: HandlerProps) => {
  const children = parseNodes($el.contents(), $cheerio, opts)

   return <strong>{}</strong>
}
    
    //<strong>{$el.text()}</strong>

export default strongTagHandler