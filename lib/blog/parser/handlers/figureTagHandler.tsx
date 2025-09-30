import Image from "next/image";

import type { HandlerProps } from './tagHandlers'
import PagebuilderTable from '@/app/components/pages/BlogPage/PagebuilderComponents/PagebuilderTable'

const figureTagHandler = ({ $el, $cheerio, opts, parseNodes }: HandlerProps) => {
  if ($el.hasClass('table')) {
    const table = $el.find('table').first()
    if (!table.length) return null

    const headers: string[] = []
    table.find('thead tr th').each((_, th) => {
      headers.push($cheerio(th).text().trim())
    })

    const rows: React.ReactNode[][] = []
    table.find('tbody tr').each((rowIndex, tr) => {
      const row: React.ReactNode[] = []
      $cheerio(tr)
        .find('td')
        .each((cellIndex, td) => {
          const tdContent = parseNodes($cheerio(td).contents(), $cheerio, opts)
          row.push(<div key={`td-${rowIndex}-${cellIndex}`}>{tdContent}</div>)
        })
      rows.push(row)
    })

    return <PagebuilderTable headers={headers} rows={rows} />
  }

  const img = $el.find('img').first()
  if (img.length) {
    return (
      <Image
        src={img.attr('src') ?? ''}
        alt={img.attr('alt') ?? ''}
        layout='fill'
       
      />
    )
  }
  return null
}

export default figureTagHandler
