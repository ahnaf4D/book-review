import { ToastContainer } from 'react-toastify';
import Banner from './Banner/Banner';
import Books from './Books/Books';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
