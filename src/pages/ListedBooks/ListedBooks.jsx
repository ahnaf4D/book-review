import SortComponent from './SortComponent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from '../../components/TabCard';
import { useEffect, useState } from 'react';
import { getBooks, getWishlistBooks } from '../../utils';

const ListedBooks = () => {
  const [readingBooks, setReadingBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const savedBooks = getBooks();
    setReadingBooks(savedBooks);
    const savedWishlistBooks = getWishlistBooks();
    setWishlistBooks(savedWishlistBooks);
  }, []);

  useEffect(() => {
    const sortBooks = (books) => {
      let sortedBooks = [...books];
      if (sortOrder === 'ascending') {
        sortedBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
      } else if (sortOrder === 'descending') {
        sortedBooks.sort((a, b) => b.bookName.localeCompare(a.bookName));
      }
      return sortedBooks;
    };

    setReadingBooks((books) => sortBooks(books));
    setWishlistBooks((books) => sortBooks(books));
  }, [sortOrder]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div>
      <h2 className='text-4xl bg-gray-200 text-center py-4 font-workSans font-medium'>
        Books
      </h2>
      <SortComponent onSortChange={handleSortChange}></SortComponent>
      <Tabs className='mx-auto container text-xl font-workSans'>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readingBooks.map((book) => (
            <TabCard key={book.bookId} book={book}></TabCard>
          ))}
        </TabPanel>
        <TabPanel>
          {wishlistBooks.map((book) => (
            <TabCard key={book.bookId} book={book}></TabCard>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
