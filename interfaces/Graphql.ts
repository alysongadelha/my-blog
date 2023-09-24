interface URL {
  url: string;
}

export interface IAuthor {
  bio: string;
  id: string;
  name: string;
  photo: URL;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Post {
  author: IAuthor;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: URL;
  categories: Category[];
}

export interface PostDetail extends Post {
  content: {
    raw: {
      children: any[];
    };
  };
}

export interface ApiResponse {
  node: Post;
}

export interface IPostWidget {
  title: string;
  featuredImage: URL;
  createdAt: string;
  slug: string;
}

export interface FeaturedPost {
  title: string;
  featuredImage: URL;
  createdAt: string;
  slug: string;
  author: {
    name: string;
    photo: URL;
  };
}

export interface CategoriesWidget {
  name: string;
  slug: string;
}

export interface CommentWidget {
  name: string;
  createdAt: string;
  comment: string;
}

export interface GraphQLWidget {
  posts: IPostWidget[];
}

export interface GraphQLFeaturedPosts {
  posts: FeaturedPost[];
}

export interface GraphQLPostDetail {
  post: PostDetail;
}

export interface GraphQLCategories {
  categories: CategoriesWidget[];
}

export interface GraphQLComments {
  comments: CommentWidget[];
}

export interface GraphQLPosts {
  postsConnection: {
    edges: ApiResponse[];
  };
}
