type Props = {};

const NoContent = (props: Props) => {
  return (
    <div className='container mx-auto px-10' data-testid='post-not-found'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-12'>
          <div className='flex items-center justify-center rounded-lg bg-white p-8 shadow-lg '>
            <h1 className='text-4xl font-bold text-gray-900 '>
              No posts found
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoContent;
