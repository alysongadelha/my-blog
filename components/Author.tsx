import { Author } from '@/interfaces';
import Image from 'next/image';

type Props = {
  author: Author;
};

const Author = ({ author }: Props) => {
  return (
    <div className='relative mb-8 mt-20 rounded-lg bg-black bg-opacity-20 p-12 text-center'>
      <div className='absolute -top-14 left-0 right-0'>
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className='h-24 w-24 rounded-full align-middle'
          src={author.photo.url}
        />
      </div>
      <h3 className='my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
