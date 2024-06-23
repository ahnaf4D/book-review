import Home from '../pages/Home/Home';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import BookDetails from '../pages/BookDetails/BookDetails';
import PagesToRead from '../pages/PagesToRead/PagesToRead';
import Blogs from '../pages/Blogs/Blogs';
import BlogDetails from '../pages/Blogs/BlogDetails';
import Contribute from '../pages/Contribute/Contribute';
import Error from '../pages/Error/Error';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/books/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE}/${params.id}`),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch(`${import.meta.env.VITE_API_BASE}/blogs`),
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE}/blog/${params.id}`),
      },
      {
        path: '/contribute',
        element: <Contribute></Contribute>,
      },
    ],
  },
]);
export default routes;
