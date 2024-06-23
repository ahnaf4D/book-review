import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navOptions = (
    <>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'hover:text-white text-black btn btn-outline text-xl border-[#23BE0A] font-medium btn-success'
            : 'font-medium text-xl'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/listed-books'
        className={({ isActive }) =>
          isActive
            ? 'hover:text-white text-black btn btn-outline text-xl border-[#23BE0A] font-medium btn-success'
            : 'font-medium text-xl'
        }
      >
        Listed Books
      </NavLink>
      <NavLink
        to='/pages-to-read'
        className={({ isActive }) =>
          isActive
            ? 'hover:text-white text-black btn btn-outline text-xl border-[#23BE0A] font-medium btn-success'
            : 'font-medium text-xl'
        }
      >
        Pages to Read
      </NavLink>
      <NavLink
        to='/blogs'
        className={({ isActive }) =>
          isActive
            ? 'hover:text-white text-black btn btn-outline text-xl border-[#23BE0A] font-medium btn-success'
            : 'font-medium text-xl'
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to='/contribute'
        className={({ isActive }) =>
          isActive
            ? 'hover:text-white text-black btn btn-outline text-xl border-[#23BE0A] font-medium btn-success'
            : 'font-medium text-xl'
        }
      >
        Contribute
      </NavLink>
    </>
  );

  return (
    <div>
      <nav className='font-workSans px-2 flex justify-between mx-auto container my-6'>
        <Link to='/'>
          <h1 className='text-3xl font-bold'>Book Vibe</h1>
        </Link>
        <div className='hidden lg:flex gap-4 items-center'>{navOptions}</div>
        <div className='hidden lg:flex gap-2'>
          <button className='btn text-xl text-white bg-[#23BE0A] btn-success'>
            Sign In
          </button>
          <button className='btn text-xl text-white bg-[#59C6D2] btn-accent'>
            Sign Up
          </button>
        </div>
        <button
          className='lg:hidden text-3xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </nav>
      {isOpen && (
        <div className='flex flex-col items-center lg:hidden bg-white  p-4'>
          {navOptions}
          <button className='btn w-full my-2 text-xl text-white bg-[#23BE0A] btn-success'>
            Sign In
          </button>
          <button className='btn w-full my-2 text-xl text-white bg-[#59C6D2] btn-accent'>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
