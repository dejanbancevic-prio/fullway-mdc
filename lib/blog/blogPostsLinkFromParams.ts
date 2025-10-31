type BlogPostsLinkParams = {
  filter?: Record<string, unknown>;
  search?: string;
  tags?: string[] | Record<string, unknown>;
  currentPage?: number;
};

const blogPostsLinkFromParams = ({
  search,
  currentPage,
}: BlogPostsLinkParams): string => {
  const urlBase = "blog";

  let query = "";

  if (search) query += `/search/${search}`;

  if (currentPage && currentPage > 1) query += `/page/${currentPage}`;

  return query ? `/${urlBase}/q${query}` : `/${urlBase}`;
};

export default blogPostsLinkFromParams;
