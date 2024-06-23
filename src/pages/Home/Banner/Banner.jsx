import { Link } from 'react-router-dom';
import BannerBook from '../../../assets/banner_book.png';
const Banner = () => {
  return (
    <div>
      <div className='hero container mx-auto rounded-lg  bg-base-200'>
        <div className='hero-content flex-col gap-4 lg:flex-row-reverse'>
          <img src={BannerBook} className='max-w-sm rounded-lg' />
          <div>
            <h1 className='text-4xl font-bold max-w-sm font-playFairDisplay leading-relaxed'>
              The Timeless Allure of Books: More Than Just Pages
            </h1>
            <Link to='/listed-books'>
              <button className='btn my-4 text-xl text-white bg-[#23BE0A] btn-success'>
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
