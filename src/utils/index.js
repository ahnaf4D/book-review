import { toast } from 'react-toastify';

export const getBooks = () => {
  try {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  } catch (error) {
    console.error('Error retrieving books from localStorage:', error);
    return [];
  }
};

export const saveBooks = (book) => {
  try {
    const books = getBooks();
    const isExists = books.find((b) => b.bookId === book.bookId);
    if (isExists) {
      toast.error('Book Already Added to Reading');
      return;
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('Added Successfully to the Reading list');
  } catch (error) {
    console.error('Error saving book to localStorage:', error);
    toast.error('Failed to add book to the Reading list');
  }
};

export const getWishlistBooks = () => {
  try {
    const storedBooks = localStorage.getItem('wishlist');
    return storedBooks ? JSON.parse(storedBooks) : [];
  } catch (error) {
    console.error('Error retrieving books from localStorage:', error);
    return [];
  }
};
export const saveBooksToWishlist = (book) => {
  try {
    const books = getBooks(); // reading list array
    const wishlistBooks = getWishlistBooks(); // wishlist array
    const isExists = books.find((b) => b.bookId === book.bookId);
    if (isExists) {
      toast.error('Book Already Added to Reading');
      return;
    }
    wishlistBooks.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlistBooks));
    toast.success('Added Successfully to the Wishlist');
  } catch (error) {
    console.error('Error saving book to localStorage:', error);
    toast.error('Failed to add book to the Wishlist');
  }
};
