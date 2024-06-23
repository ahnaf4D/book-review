import { useLoaderData } from 'react-router-dom';
import { getWishlistBooks, saveBooks, saveBooksToWishlist } from '../../utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const handleAddBooksToRead = (book) => {
    const wishlistBooks = getWishlistBooks();
    const updatedWishlistBooks = wishlistBooks.filter(
      (b) => b.bookId !== book.bookId
    ); // Remove the book from wishlist
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlistBooks));
    saveBooks(book);
  };
  const handleAddBooksToWishlist = (book) => {
    saveBooksToWishlist(book);
  };
  const loadSingleBook = useLoaderData();
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = loadSingleBook;

  return (
    <div>
      <div className='hero flex items-center justify-center gap-6 bg-base-200'>
        <div className='hero-content flex-col gap-12 my-10 lg:flex-row'>
          <img
            src={image}
            className='w-2/4 rounded-lg shadow-2xl'
            alt={bookName}
          />
          <div>
            <h1 className='text-4xl font-bold font-playFairDisplay'>
              {bookName}
            </h1>
            <p className='py-2'>By : {author}</p>
            <div className='border-t-2 border-b-2 border-gray-400 border-dashed py-2 font-workSans'>
              {category}
            </div>
            <p className='max-w-xl font-workSans py-4'>
              <span className='font-bold'>Review:</span> {review}
            </p>
            <div>
              <span className='font-bold font-workSans'> Tags :</span>
              {tags.map((item, index) => (
                <span
                  key={index}
                  className='bg-gray-200 mx-4 p-2 rounded text-[#23BE0A] font-medium font-workSans'
                >
                  #{item}
                </span>
              ))}
            </div>
            <div className='font-workSans my-4'>
              <p>Number of Pages : {totalPages}</p>
              <p>Publisher : {publisher}</p>
              <p>Year of Publishing : {yearOfPublishing}</p>
            </div>
            <div className='flex gap-4 items-center font-workSans'>
              <button
                className='btn btn-outline px-6 text-xl'
                onClick={() => handleAddBooksToRead(loadSingleBook)}
              >
                Read
              </button>
              <button
                className='btn my-2 text-xl text-white bg-[#59C6D2] btn-accent'
                onClick={() => handleAddBooksToWishlist(loadSingleBook)}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
