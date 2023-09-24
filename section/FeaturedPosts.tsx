'use client';
import { FeaturedPostCard } from '@/components';
import { FeaturedPost } from '@/interfaces';
import { getFeaturedPosts } from '@/services';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {};

const FeaturedPosts = (props: Props) => {
  const [featuredPosts, setFeaturedPosts] = useState<FeaturedPost[]>();
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const customLeftArrow = (): React.ReactElement<any> => (
    <div className='arrow-btn btn absolute left-0 w-6 cursor-pointer rounded-full py-3 text-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 19l-7-7m0 0l7-7m-7 7h18'
        />
      </svg>
    </div>
  );

  const customRightArrow = (): React.ReactElement<any> => (
    <div className='arrow-btn btn absolute right-0 cursor-pointer rounded-full py-3 text-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
      </svg>
    </div>
  );

  const ArrowFix = (arrowProps: any) => {
    const { carouselState, children, ...restArrowProps } = arrowProps;
    return <span {...restArrowProps}> {children} </span>;
  };

  if (!dataLoaded) return;

  return (
    <div className='mb-8'>
      <Carousel
        customLeftArrow={<ArrowFix>{customLeftArrow()}</ArrowFix>}
        customRightArrow={<ArrowFix>{customRightArrow()}</ArrowFix>}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        itemClass='px-4'
        // @ts-ignore
        rtl='false'
      >
        {featuredPosts?.map((featuredPost, index) => (
          <FeaturedPostCard key={index} featuredPost={featuredPost} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
