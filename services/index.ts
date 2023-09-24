import {
  ApiResponse,
  Comment,
  GraphQLCategories,
  GraphQLComments,
  GraphQLFeaturedPosts,
  GraphQLPostDetail,
  GraphQLPosts,
  GraphQLWidget,
  PostDetail,
} from '@/interfaces';
import { request } from 'graphql-request';
import {
  queryCategories,
  queryCategoryPosts,
  queryComments,
  queryFeaturedPosts,
  queryPostDetails,
  queryPosts,
  queryRecentPosts,
  querySimilarPosts,
} from './gql';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (): Promise<ApiResponse[]> => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLPosts = await request(graphqlAPI, queryPosts);

  return result.postsConnection.edges;
};

export const getCategoryPosts = async (
  slug: string
): Promise<ApiResponse[]> => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLPosts = await request(
    graphqlAPI,
    queryCategoryPosts(slug),
    { slug }
  );

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string): Promise<PostDetail> => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLPostDetail = await request(
    graphqlAPI,
    queryPostDetails(slug),
    { slug }
  );

  return result.post;
};

export const getRecentPosts = async () => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLWidget = await request(graphqlAPI, queryRecentPosts);

  return result.posts;
};

export const getSimilarPosts = async (categories: string[], slug: string) => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLWidget = await request(
    graphqlAPI,
    querySimilarPosts(categories, slug),
    { slug, categories }
  );

  return result.posts;
};

export const getCategories = async () => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLCategories = await request(graphqlAPI, queryCategories);

  return result.categories;
};

export const getComments = async (slug: string) => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLComments = await request(
    graphqlAPI,
    queryComments(slug),
    { slug }
  );

  return result.comments;
};

export const submitComment = async (obj: Comment) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getFeaturedPosts = async () => {
  if (!graphqlAPI) throw new Error('ENDPOINT is not available');
  const result: GraphQLFeaturedPosts = await request(
    graphqlAPI,
    queryFeaturedPosts
  );
  return result.posts;
};
