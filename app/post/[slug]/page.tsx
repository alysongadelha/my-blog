import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '@/components';
import { getPostDetails } from '@/services';

type Props = {
  params: { slug: string };
};

const PostDetails = async ({ params: { slug } }: Props) => {
  const post = await getPostDetails(slug);

  return (
    <div className='container mx-auto mb-8 px-10'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget
              categories={post.categories.map((category) => category.slug)}
              slug={post.slug}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
