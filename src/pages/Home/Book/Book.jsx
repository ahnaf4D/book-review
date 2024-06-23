import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className='card card-compact bg-base-100 shadow-xl'>
        <figure className='bg-[#F3F3F3] bg-cover'>
          <img src={image} alt='Shoes' className='size-40 p-4' />
        </figure>
        <div>
          <div className='flex'>
            {tags.map((tag, index) => (
              <p
                className='mx-2 my-2 bg-[#F3F3F3] px-2 py-1 rounded text-[#23BE0A]
                font-medium font-workSans'
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>

          <div className='flex flex-col items-start px-6 my-2 border-dashed border-gray-400 border-b-2 pb-2 '>
            <h2 className='card-title text-center font-playFairDisplay'>
              {bookName}
            </h2>
            <p>By {author}</p>
          </div>
          <div className='flex justify-between px-6 pb-4'>
            <p>{category}</p>
            <p className='flex items-center gap-2'>
              {rating} <FaRegStar></FaRegStar>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
