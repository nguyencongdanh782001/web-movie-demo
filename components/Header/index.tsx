import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='flex items-center justify-start py-10'>
        <div className='w-[130px]'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold font-sans'>The Movie Tracker</h1>
          </Link>
        </div>
        <div className='w-full flex items-center justify-center'>
          <form className='h-[57px] w-[600px] relative'>
            <input
              type='text'
              className='absolute top-0 right-0 bottom-0 left-0 rounded-full bg-gray-custom-1 px-4 text-xl placeholder:text-black placeholder:text-center placeholder:text-xl placeholder:font-normal focus:outline-none'
              placeholder='🔍 Search a movie or a series'
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
