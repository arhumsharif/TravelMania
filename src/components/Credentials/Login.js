import React, { useState, useRef } from 'react';
import { authenticateUser } from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Logo from '../../assets/Logo2.png';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';

export default function Login() {
  let navigate = useNavigate();

  const cookies = new Cookies();
  const email = useRef();
  const password = useRef();
  const [message, setMessage] = useState('hidden');

  const login = async () => {
    let response = await authenticateUser(
      email.current.value,
      password.current.value
    );
    if (response === 404) {
      setMessage('block');
      setTimeout(() => {
        setMessage('hidden');
      }, 3000);
    } else {
      console.log(response);
      cookies.set('token', response.token);
      if (response.role == 1) {
        navigate('/tour-guide');
      } else if (response.role == 0) {
        navigate('/traveler');
      } else {
        navigate('/tour-org');
      }
    }
  };

  return (
    <>
      <LandingPageNavbar transparent />
      <main>
        <section className='absolute w-full h-full'>
          <div
            className='absolute top-0 w-full h-full bg-gray-900'
            style={{
              backgroundImage:
                "url('https://images.wallpaperscraft.com/image/single/mountain_peaks_sky_beautiful_scenery_93221_1920x1080.jpg')",
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className='container mx-auto px-4 h-full'>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                  <div className='rounded-t mb-0 px-6 py-6'>
                    <div className='text-center mb-3'>
                      <img src={Logo} alt='' className='mx-auto mb-10 pl-3' />
                    </div>
                  </div>
                  <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                    <form>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Email
                        </label>
                        <input
                          type='email'
                          placeholder='Email'
                          autoComplete='given-name'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-900 font-bold bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          style={{ transition: 'all .15s ease' }}
                          ref={email}
                        />
                      </div>

                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          placeholder='Password'
                          autoComplete='given-name'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-900 font-bold bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          style={{ transition: 'all .15s ease' }}
                          ref={password}
                        />
                      </div>
                      <div>
                        <label className='inline-flex items-center cursor-pointer'>
                          <Link
                            to='#'
                            className='text-sm font-semibold text-gray-700 underline decoration-solid'
                          >
                            Forget Password
                          </Link>
                        </label>
                      </div>

                      <div className='text-center mt-6'>
                        <button
                          onClick={login}
                          type='button'
                          style={{ transition: 'all .15s ease' }}
                          className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                        >
                          Login
                        </button>
                        <h6 className='justify-center items-center text-sm font-semibold text-gray-700 pt-3'>
                          Wanna make an Account
                        </h6>
                        <Link to='/signup'>
                          <span className='underline decoration-solid'>
                            Sign up
                          </span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
