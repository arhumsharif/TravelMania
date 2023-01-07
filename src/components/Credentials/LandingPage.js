import React from 'react';
import { Link } from 'react-router-dom';

import abdullahpic from '../../assets/abdullahpic.jpg';
import arhumpic from '../../assets/arhumpic.jpg';
import azeempic from '../../assets/azeempic.jpg';
import LandingPageFooter from '../Footer/LandingPageFooter';
import Logo from '../../assets/realLogo.png';

export default function Login() {
  return (
    <div>
      <main>
        <div
          className='relative pt-16 pb-32 flex content-center items-center justify-center'
          style={{
            minHeight: '75vh',
          }}
        >
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage:
                "url('https://nomadparadise.com/wp-content/uploads/2021/04/pakistan-places-13-1024x683.jpg')",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-75 bg-black'
            ></span>
          </div>
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                <div className='pr-12'>
                  <img src={Logo} alt='' className='mx-auto mb-10 pl-20' />
                  <h1 className='text-white font-semibold text-5xl'>
                    &nbsp;&nbsp;&nbsp;TRAVEL MANIA
                  </h1>
                  <p className='mt-4 sm:text-xl sm:leading-relaxed'>
                    <span className='text-[#FFFFFF]'>
                      {' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Journey Starts
                      with Us
                    </span>
                  </p>
                </div>

                <div className='mt-8 flex flex-wrap justify-center gap-4'>
                  <button className='bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'>
                    <Link to='/signup'>Get Started</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='pb-20 bg-gray-300 -mt-24'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
              <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                      <i className='fas fa-globe'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>
                      For Every Traveller
                    </h6>
                    <p className='mt-2 mb-4 text-gray-600'>
                      TravelMania is buit for every traveller that wants to
                      visit Pakistan.
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                      <i className='fas fa-lock'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>Safe & Secure</h6>
                    <p className='mt-2 mb-4 text-gray-600'>
                      TravelMania provides complete security to its users and
                      verify all the tour guides and tour organizations before
                      registeration.
                    </p>
                  </div>
                </div>
              </div>

              <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                      <i className='fas fa-fingerprint'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>Verified Company</h6>
                    <p className='mt-2 mb-4 text-gray-600'>
                      TravelMania is first verified platform for the travellers
                      and tour guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pt-20 pb-48 bg-gray-300'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center text-center mb-24'>
              <div className='w-full lg:w-6/12 px-4'>
                <h2 className='text-4xl font-semibold'>Here are our team</h2>
              </div>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={abdullahpic}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: '120px' }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Abdullah Tariq</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Web Developer
                    </p>
                    <div className='mt-6'>
                      <button
                        className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </button>
                      <button
                        className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-github'></i>
                      </button>
                      <button
                        className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-linkedin'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={arhumpic}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: '120px' }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Arhum Shareef</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Web Developer
                    </p>
                    <div className='mt-6'>
                      <button
                        className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </button>
                      <button
                        className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-github'></i>
                      </button>
                      <button
                        className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-linkedin'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={azeempic}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: '120px' }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Muhammad Azeem</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Web Developer
                    </p>
                    <div className='mt-6'>
                      <button
                        className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </button>
                      <button
                        className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-github'></i>
                      </button>
                      <button
                        className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-linkedin'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingPageFooter />
    </div>
  );
}
