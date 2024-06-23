import ContributeImage from '../../assets/contribute.jpg';
const Contribute = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-10'>
      <h1 className='text-center font-workSans bg-gray-300 py-8 text-3xl shadow-lg'>
        Total <u>100</u> Contributors
      </h1>
      <div className='hero my-10 bg-white shadow-md rounded-lg'>
        <div className='hero-content flex-col lg:flex-row-reverse p-10'>
          <div className='lg:w-1/2 lg:pl-10'>
            <h1 className='text-5xl font-bold text-center text-gray-800 mb-6'>
              How to Contribute
            </h1>
            <p className='py-6 max-w-xl mx-auto text-gray-600 text-lg'>
              Contributing to the book vibe fosters community, enhances literary
              appreciation, and encourages shared experiences and deeper
              connections among readers.
            </p>
            <div className='flex items-center justify-center'>
              <ul className='list-disc space-y-2 text-gray-700 text-lg'>
                <li>Contribute with Publishing Books</li>
                <li>Contribute with Donation</li>
                <li>Contribute with Enhance Community</li>
              </ul>
            </div>
            <div className='flex justify-center items-center my-8 text-gray-600'>
              Email us at{' '}
              <span className='link link-primary mx-2 font-medium text-blue-600'>
                book@vibe.com
              </span>
            </div>
          </div>
          <div className='lg:w-1/2 lg:pr-10'>
            <img
              src={ContributeImage}
              alt='Contribute'
              className='rounded-lg shadow-lg mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
