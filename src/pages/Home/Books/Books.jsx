import axios from 'axios';
import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE}`).then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading && (
        <div className='flex justify-center items-center my-12'>
          <span className='loading mx-auto loading-infinity loading-lg'></span>
        </div>
      )}
      <h1 className='text-center font-playFairDisplay text-4xl font-bold my-8'>
        Books
      </h1>
      <div className='grid grid-cols-1 gap-6 m-12 md:grid-cols-2 lg:grid-cols-3'>
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
