import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-10 rounded-lg shadow-lg text-center'>
        <h1 className='text-6xl font-bold text-red-500 mb-4'>{error.status}</h1>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          {error.statusText}
        </h2>
        <p className='text-gray-600 mb-8'>{error.data}</p>
        <Link
          to='/'
          className='inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
