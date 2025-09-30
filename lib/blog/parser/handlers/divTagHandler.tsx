
import PageBuilderMihoCard from '@/app/components/pages/BlogPage/PagebuilderComponents/PageBuilderMihoCard'
import type { HandlerProps } from './tagHandlers'
import { Button } from '@/components/ui/button'
import React from 'react'

const divTagHandler = ({ $el, parseNodes, $cheerio, opts }: HandlerProps) => {
  const type = $el.attr('data-content-type');

  if (type === 'row' || type === 'column-line' || type === 'column') {
    const nodes = parseNodes($el.contents(), $cheerio, opts);

    return nodes.map((child, index) => (
      <React.Fragment key={index}>{child}</React.Fragment>
    ));
  }

  if ($el.hasClass('miho-container')) {
    const title = $el.find('.miho-title').text().trim();
    const descHtml = $el.find('.miho-desc').contents();
    const description = parseNodes(descHtml, $cheerio, opts);

    const image = $el.find('.miho-image img');
    const imageSrc = image.attr('src') || '';
    const imageAlt = image.attr('alt') || '';
    const imageHref = $el.find('.miho-image').attr('href') || '#';

    const button = $el.find('.miho-button');
    const buttonHref = button.attr('href') || '#';
    const buttonLabel = button.text().trim() || 'Shop Now';

    return (
      <div key={title || imageSrc}>
        <PageBuilderMihoCard
          title={title}
          description={description}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imageHref={imageHref}
          buttonHref={buttonHref}
          buttonLabel={buttonLabel}
        />
      </div>
    );
  }

  if ($el.hasClass('mless_button')) {
    const link = $el.find('a').first();
    return (
      <div key={link.text().trim()}>
        <Button>{link.text().trim()}</Button>
      </div>
    );
  }

const children = parseNodes($el.contents(), $cheerio, opts);

return children.map((child, idx) => (
  <div key={idx}>{child}</div>
));
};



export default divTagHandler
