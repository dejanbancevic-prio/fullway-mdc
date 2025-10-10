import Link from 'next/link'
import type { HandlerProps } from './tagHandlers'

const aTagHandler = ({ $el }: HandlerProps) => {
  const href = $el.attr('href') ?? '#'
  const text = $el.text()

  return (
    <Link className='hover:underline' href={href}>
      {text}
    </Link>
  )
}


export default aTagHandler
