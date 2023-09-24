import { FeaturedPost } from '@/interfaces';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  featuredPost: FeaturedPost;
};

const FeaturedPostCard = ({ featuredPost }: Props) => {
  const {
    createdAt,
    slug,
    title,
    featuredImage: { url: postImage },
    author: {
      name,
      photo: { url: authorImage },
    },
  } = featuredPost;

  return (
    <div className='relative h-72'>
      <div
        className='absolute inline-block h-full w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md'
        style={{ backgroundImage: `url('${postImage}')` }}
      />
      <div className='absolute h-full w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50' />
      <div className='absolute flex h-full w-full flex-col items-center justify-center rounded-lg p-4'>
        <p>{moment(createdAt).format('DD MM, YYYY')}</p>
        <p>{title}</p>
        <div className='absolute bottom-5 flex w-full items-center justify-center'>
          <Image
            unoptimized
            src={authorImage}
            alt={name}
            width={30}
            height={30}
            className='rounded-full align-middle drop-shadow-lg'
          />
          <p className='text-shadow ml-2 inline align-middle font-medium'>
            {name}
          </p>
        </div>
      </div>
      <Link href={`/post/${slug}`}>
        <span className='absolute h-full w-full cursor-pointer' />
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
