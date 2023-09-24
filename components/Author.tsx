import { IAuthor } from '@/interfaces';
import Image from 'next/image';

type Props = {
  author: IAuthor;
};

const Author = ({ author }: Props) => {
  if (author?.name === undefined) {
    console.error('Please provide a valid Author', { author });
    return;
  }

  return (
    <div
      data-testid='author-component'
      className='relative mb-8 mt-20 rounded-lg bg-black bg-opacity-20 p-12 text-center'
    >
      <div className='absolute -top-14 left-0 right-0 flex justify-center'>
        <Image
          alt={author.name}
          height={90}
          width={90}
          className='rounded-full align-middle'
          src={author.photo.url}
        />
      </div>
      <h3 className='my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
