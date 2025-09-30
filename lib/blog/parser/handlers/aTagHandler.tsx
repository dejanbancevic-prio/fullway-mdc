
import Link from 'next/link'
import type { HandlerProps } from './tagHandlers'

const aTagHandler = ({ $el }: HandlerProps) => (
  // <Link className='underline hover:text-fullwayRed' href={$el.attr('href') ?? '#'} >
  //   {$el.text()}
  // </Link>
  <div></div>
)

export default aTagHandler
