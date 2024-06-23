import { FaLocationDot, FaUsers } from 'react-icons/fa6';
import { IoNewspaper } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const TabCard = ({ book }) => {
  const {
    image,
    tags,
    yearOfPublishing,
    publisher,
    bookName,
    author,
    category,
    rating,
    bookId,
    totalPages,
  } = book;
  return (
    <div className='max-w-3xl my-8 mx-auto font-workSans  bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='flex flex-col lg:flex-row'>
        <img
          src={image}
          alt='The Catcher in the Rye'
          className='w-2/4 lg:w-1/3 '
        />
        <div className='p-6 flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-2 font-playFairDisplay'>
              {bookName}
            </h1>
            <p className='text-gray-600 mb-4 font-workSans'>By {author}</p>
            <div className='flex flex-wrap mb-4 font-bold font-workSans'>
              Tags :
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-gray-200 text-green-600 px-3 py-1 rounded-full text-sm mr-2 ml-2 mb-2'
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className='flex items-center text-gray-600 mb-2'>
              <FaLocationDot className='mr-2 text-green-600' />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
            <div className='flex items-center text-gray-600 mb-2 font-workSans'>
              <FaUsers className='mr-2 text-green-600' />
              <p>Publisher: {publisher}</p>
            </div>
            <div className='flex items-center text-gray-600 mb-4'>
              <IoNewspaper className='mr-2 text-green-600' />
              <p>Page: {totalPages}</p>
            </div>
            <div className='flex flex-wrap mb-4'>
              <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2'>
                Category: {category}
              </span>
              <span className='bg-orange-300 text-orange-800 px-3 py-1 rounded-full text-sm mr-2 mb-2'>
                Rating: {rating}
              </span>
            </div>
          </div>
          <Link to={`/books/${bookId}`}>
            <button className='mt-4 btn bg-[#23BE0A] text-white px-4 py-2 rounded-2xl text-2xl hover:bg-[#23BE0A] transition duration-300'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
