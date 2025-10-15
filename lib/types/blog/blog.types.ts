import { BlogPostsQuery } from "@lib/__generated__/graphql";

export type BlogItem = NonNullable<
  NonNullable<BlogPostsQuery["awBlogPosts"]>["items"]
>[number];
