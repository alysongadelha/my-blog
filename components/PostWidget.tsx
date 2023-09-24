'use client';
import { PostWidget } from '@/interfaces';
import { getRecentPosts, getSimilarPosts } from '@/services';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  categories?: string[];
  slug?: string;
};

const PostWidget = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<PostWidget[]>([]);

  useEffect(() => {
    if (slug && categories?.length) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

  if (relatedPosts.length === 0) return;

  return (
    <div className='mb-8 rounded-lg bg-white p-8 text-gray-700 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='mb-4 flex w-full items-center'>
          <div className='w16 flex-none'>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
              className='h-14 w-14 rounded-full align-middle'
            />
          </div>
          <div className='ml-4 flex-grow'>
            <p className='text-xs text-gray-500'>
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
