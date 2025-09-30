type Tag = {
  id: string | number;
  url_key: string;
};

type TagsData = {
  awBlogTags?: {
    items?: Tag[];
  };
};

type BlogPostsParams = {
  url: string;
  currentPage?: number;
  filter?: {
    tag_id?: { eq: string };
    title?: { like: string };
  };
};

type ParseBlogParams = {
  query?: string[];
  url?: string;
  tags: TagsData;
};

const parseBlogParams = ({
  query,
  url,
  tags,
}: ParseBlogParams): BlogPostsParams | undefined => {
  const blogPostsParams: BlogPostsParams = { url: url || "" };

  let error = false;

  query?.map(decodeURIComponent).reduce<string | undefined>((param, value) => {
    if (!param || param === "q") return value;

    if (param === "page") {
      blogPostsParams.currentPage = Number(value);
      return undefined;
    }

    if (param === "tag") {
      const tagId = tags.awBlogTags?.items?.find(
        (tag) => tag.url_key.toLowerCase() === `${value.toLowerCase()}/`
      )?.id;

      if (!tagId) return undefined;

      if (!blogPostsParams.filter) blogPostsParams.filter = {};

      blogPostsParams.filter.tag_id = { eq: String(tagId) };
      return undefined;
    }

    if (param === "search") {
      if (!blogPostsParams.filter) blogPostsParams.filter = {};

      blogPostsParams.filter.title = { like: `%${value}%` };
      return undefined;
    }

    error = true;
    return undefined;
  }, undefined);

  return error ? undefined : blogPostsParams;
};

export default parseBlogParams;
