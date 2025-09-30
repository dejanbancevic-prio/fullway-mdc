function generateBlogHeaderId(text: string | undefined): string {
  if (!text) return ''

  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, '-')
}

export default generateBlogHeaderId
