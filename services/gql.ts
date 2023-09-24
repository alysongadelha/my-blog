import { gql } from 'graphql-request';

export const queryPosts = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;

export const queryPostDetails = (slug: string) => gql`
  query GetPostDetails($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        bio
        id
        name
        photo {
          url
        }
      }
      createdAt
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
      content {
        raw
      }
    }
  }
`;

export const queryRecentPosts = gql`
  query GetRecentPosts {
    posts(orderBy: createdAt_ASC, last: 3) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;

export const querySimilarPosts = (categories: string[], slug: string) => gql`
  query GetSimilarPosts($slug: String!, $categories: [String!]) {
    posts(
      where: {
        slug_not: $slug
        AND: { categories_some: { slug_in: $categories } }
      }
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;

export const queryCategories = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`;

export const queryComments = (slug: string) => gql`
  query GetComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      createdAt
      comment
    }
  }
`;

export const queryPostComment = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export const queryFeaturedPosts = gql`
  query GetPostDetails {
    posts(where: { featuredPost: true }) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
      author {
        name
        photo {
          url
        }
      }
    }
  }
`;

export const queryCategoryPosts = (slug: string) => gql`
  query GetCategoryPosts($slug: String!) {
    postsConnection(where: { categories_every: { slug: $slug } }) {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;
