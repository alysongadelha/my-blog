'use client';
import { submitComment } from '@/services';
import { useEffect, useRef, useState } from 'react';
import { Comment } from '@/interfaces';

type Props = {
  slug: string;
};

const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);

  const commentElement = useRef<HTMLTextAreaElement>(null);
  const nameElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const storeDataElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //@ts-ignore
    nameElement.current.value = window.localStorage.getItem('name');
    //@ts-ignore
    emailElement.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const comment = commentElement.current?.value;
    const name = nameElement.current?.value;
    const email = emailElement.current?.value;
    const storeData = storeDataElement.current?.value;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj: Comment = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.remove('name', name);
      window.localStorage.remove('email', email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold text-primary'>
        Leave a reply to this post
      </h3>
      <div className='mb-4 grid grid-cols-1 gap-4'>
        <textarea
          ref={commentElement}
          placeholder='Comment'
          name='comment'
          className='w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200'
        />
      </div>
      <div className='mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <input
          type='text'
          ref={nameElement}
          placeholder='Name'
          name='name'
          className='w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200'
        />
        <input
          type='text'
          ref={emailElement}
          placeholder='Email'
          name='email'
          className='w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200'
        />
      </div>
      <div className='mb-4 grid grid-cols-1 gap-4'>
        <div className=''>
          <input
            type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
            ref={storeDataElement}
          />
          <label
            htmlFor='storeData'
            className='ml-2 cursor-pointer text-gray-500'
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className='text-xs text-red-500'>All fields are required.</p>
      )}
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='ease btn inline-block cursor-pointer  rounded-full px-8 py-3 text-lg transition duration-500'
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className='float-right mt-3 text-xl font-semibold text-green-500'>
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
