import React, { useState, useRef } from 'react';
import { addUser } from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo2.png';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';

export default function Signup() {
  let navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [userType, setUserType] = useState('');
  const [message, setMessage] = useState('hidden');

  const register = async () => {
    if (
      password.current.value === confirmPassword.current.value &&
      password.current.value > 0
    ) {
      if (validateEmail(email.current.value)) {
        let response = await addUser(
          email.current.value,
          password.current.value,
          'Traveler'
        );
        if (response == 404) {
          setMessage('block');
        } else {
          navigate('/login');
        }
      } else {
        alert('Invalid Email');
      }
    } else {
      alert('Password Does not matches');
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <>
      <LandingPageNavbar transparent />
      <main>
        <section className='absolute w-full h-full pt-12'>
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
                    <div className='text-center'>
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
                          className='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
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
                          className='border-0 px-3 font-bold py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          style={{ transition: 'all .15s ease' }}
                          ref={password}
                        />
                      </div>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Confirm Password
                        </label>
                        <input
                          type='password'
                          placeholder='Confirm Password'
                          autoComplete='given-name'
                          className='border-0 px-3 py-3 font-bold placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          style={{ transition: 'all .15s ease' }}
                          ref={confirmPassword}
                        />
                      </div>

                      <div className='text-center mt-6'>
                        <button
                          onClick={register}
                          type='button'
                          style={{ transition: 'all .15s ease' }}
                          className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                        >
                          Signup
                        </button>
                        <h6 className='justify-center items-center text-sm font-semibold text-gray-700 pt-3'>
                          Already have an account
                        </h6>
                        <Link to='/login'>
                          <span className='underline decoration-solid'>
                            Log in
                          </span>
                        </Link>
                        <h6 className='justify-center items-center text-sm font-semibold text-gray-700 pt-3'>
                          <Link to='/login'>
                            <span className='underline decoration-solid'>
                              Register
                            </span>
                          </Link>
                          &nbsp;as Tour Guide or Tour Organization
                        </h6>
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
