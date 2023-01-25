import React, { useState } from 'react';
import Logo from '../../assets/realLogo.png';
import { Select, Option } from '@material-tailwind/react';
// import EmailIcon from '../../assets/Email.svg'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import DropdownRender from './DropDown Button';

export default function TourGuideNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let title = '';
  const { pathname } = useLocation();
  const cookies = new Cookies();
  let navigate = useNavigate();

  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative shadow-lg bg-gray-300 shadow-lg') +
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
            <img src={Logo} alt='' className='w-7 inline mr-2' />
            TravelMania
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' fas fa-bars'
              }
            ></i>
          </button>
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
                to='/traveler'
              >
                Home
              </Link>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#pablo'
              >
                Destinations
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#pablo'
              >
                Packages
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#pablo'
              >
                Tour Guides
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#pablo'
              >
                Organizations
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-00') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#pablo'
              >
                Contact Us
              </a>
            </li>

            <li className='flex items-center'>
              <Menu>
                <MenuHandler>
                  <Button
                    variant='gradient'
                    className={
                      (props.transparent
                        ? 'bg-white text-gray-800 active:bg-gray-100'
                        : 'bg-gray-800 text-white active:bg-blue-600') +
                      'dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap'
                    }
                  >
                    Profile
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='caret-down'
                      class='w-2 ml-2'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                    >
                      <path
                        fill='currentColor'
                        d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                      ></path>
                    </svg>
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>
                    <Link
                      to='/traveler-portfolio'
                      className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-gray-800 hover:text-white'
                    >
                      Portfolio
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to='#'
                      className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-gray-800 hover:text-white'
                    >
                      Inbox
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to='#'
                      className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-gray-800 hover:text-white'
                    >
                      Setting
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {
                        cookies.set('token', '');
                        navigate('/login');
                      }}
                      type='button'
                      class='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-gray-800 hover:text-white'
                    >
                      Log Out
                    </button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
