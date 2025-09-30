import type { HandlerProps } from './tagHandlers'

const ulTagHandler = ({ $el, $cheerio }: HandlerProps) => {
  const prevText = $el.prev().text()?.trim().toLowerCase()
  if (prevText?.includes('table of contents')) return null

  const listItems = $el
    .children('li')
    .map((i, li) => (
      <div  key={`li-${i}`}>
        {$cheerio(li).text()}
      </div>
    ))
    .get() as React.ReactNode[]

  return (
    <div>
      {listItems}
    </div>
  )
}

export default ulTagHandler
