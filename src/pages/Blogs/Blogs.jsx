import { useLoaderData, useNavigation } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
  const loadData = useLoaderData();
  const { state } = useNavigation();

  return (
    <div>
      {state === 'loading' && (
        <span className='loading loading-infinity loading-lg text-success'></span>
      )}
      <h1 className='text-center font-workSans bg-gray-300 py-8 text-3xl'>
        Total Blogs : <u>{loadData.length}</u>
      </h1>
      <div className='grid grid-cols-1 gap-4 p-9 md:grid-cols-2 lg:grid-cols-3'>
        {loadData.map((item) => (
          <Blog key={item.id} item={item}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
