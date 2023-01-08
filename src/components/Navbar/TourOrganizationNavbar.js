// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman
// ============================================================================
// -->

import React from 'react';
import Logo from '../../assets/realLogo.png';
// import EmailIcon from '../../assets/Email.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
export default function TourGuideNavbar() {
  let title = '';
  const { pathname } = useLocation();
  const cookies = new Cookies();
  let navigate = useNavigate();

  return (
    <div>
      <nav className='fixed top-0 w-full z-50 bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <Link to='' className='flex items-center'>
            <img src={Logo} className='h-6 mr-3 sm:h-9' alt='Flowbite Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Travelmania
            </span>
          </Link>
          <div class='flex md:order-2'>
            <button
              onClick={() => {
                cookies.set('token', '');
                navigate('/login');
              }}
              type='button'
              class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Log Out
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-search'
          >
            <button
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='relative hidden md:block'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar end */}
    </div>
  );
}
