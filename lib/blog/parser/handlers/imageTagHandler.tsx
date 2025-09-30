import type { HandlerProps } from './tagHandlers'
import Image from "next/image";


const imageTagHandler = ({ $el }: HandlerProps) => (
  <Image src={$el.attr('src') ?? ''} alt={$el.attr('alt') ?? ''} layout='fill' />
)

export default imageTagHandler
