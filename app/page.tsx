import { Categories, NoContent, PostCard, PostWidget } from '@/components';
import { FeaturedPosts } from '@/section';
import { getPosts } from '@/services';

export default async function Home() {
  const posts = (await getPosts()) || [];

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className='container mx-auto mb-8 px-10'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
