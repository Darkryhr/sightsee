import React from 'react';
import logo from './sightsee-logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-gray-50 sm:flex sm:justify-between sm:px-4 sm:py-3'>
      <div className='flex items-center justify-between  px-4 py-3 sm:p-0'>
        <div>
          <img className='h-8' src={logo} alt='logo' />
        </div>
        <div className='sm:hidden'>
          <button
            type='button'
            className='block text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              {isOpen ? (
                <path
                  fill-rule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`px-2 pb-4 pt-2 sm:flex sm:p-0 sm:items-center ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href='#'
          className='block font-semibold hover:bg-gray-100 rounded px-2 py-1'
        >
          gsdgsdg
        </a>
        <a
          href='#'
          className='block font-semibold hover:bg-gray-100 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2'
        >
          sdgsdg
        </a>
        <a
          href='#'
          className='block font-semibold hover:bg-gray-100 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2'
        >
          sdgsdgd
        </a>
      </div>
    </header>
  );
};

export default Navbar;
