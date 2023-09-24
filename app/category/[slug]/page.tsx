import { Categories, NoContent, PostCard } from '@/components';
import { getCategoryPosts } from '@/services';

type Props = {
  params: { slug: string };
};

const CategoryDetails = async ({ params: { slug } }: Props) => {
  const posts = (await getCategoryPosts(slug)) || [];

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className='container mx-auto mb-8 px-10'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
