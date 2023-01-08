import React from 'react';
import { Link } from 'react-router-dom';

function LandingPageNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative shadow-lg bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            }
            to='/'
          >
            TravelMania
          </Link>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='flex items-center'>
              <Link
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to='/'
              >
                <i
                  className={
                    props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500'
                  }
                />{' '}
                Home
              </Link>
            </li>
            <li className='flex items-center'>
              <Link
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to='#'
              >
                <i
                  className={
                    props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500'
                  }
                />{' '}
                Destinations
              </Link>
            </li>
            <li className='flex items-center'>
              <Link
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to='#'
              >
                <i
                  className={
                    props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500'
                  }
                />{' '}
                Tour Guides
              </Link>
            </li>
            <li className='flex items-center'>
              <Link
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to='#'
              >
                <i
                  className={
                    props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500'
                  }
                />{' '}
                Tour Organizations
              </Link>
            </li>
            <li className='flex items-center'>
              <Link
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to='#'
              >
                <i
                  className={
                    props.transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500'
                  }
                />{' '}
                Tour Packages
              </Link>
            </li>
            <li className='flex items-center'>
              <button
                className={
                  (props.transparent
                    ? 'bg-white text-gray-800 active:bg-gray-100'
                    : 'bg-pink-500 text-white active:bg-pink-600') +
                  ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                }
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                {' '}
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LandingPageNavbar;
