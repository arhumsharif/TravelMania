import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';
import { viewAllPackages } from '../../api/index';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bg from '../../assets/packagebg.jpg';
import { Icon } from '@iconify/react';

export const ShowPackage = () => {
  let navigate = useNavigate();

  // / UseEffect
  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async () => {
    let response = await viewAllPackages();
    if (response == 404) {
      navigate('/');
    }
    setProjects(response.data);
  };

  const [projects, setProjects] = useState([]);
  return (
    <>
      <LandingPageNavbar />
      <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-gray-8 items-center content-center m-auto text-center pt-6'>
        Tour Packages
      </h3>

      <section class='relative lg:py-24 py-16 px-16'>
        <div class='container'>
          <div class='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
            <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
              <div class='relative'>
                <img src={bg} alt='' />
              </div>

              <div class='p-6'>
                <div class='pb-6'>
                  <a
                    href='#'
                    class='text-lg hover:text-indigo-600 font-medium ease-in-out duration-500'
                  >
                    Delux Plus
                  </a>
                </div>

                <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:location-on' color='#006' />
                    </i>

                    <span>Murree</span>
                  </li>

                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:hotel' color='#006' />
                    </i>
                    <span>Taj Hotel</span>
                  </li>

                  <li class='flex items-center'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='mdi:people-group' color='#006' />
                    </i>
                    <span>4 People</span>
                  </li>
                </ul>

                <ul class='pt-6 flex justify-between items-center list-none'>
                  <li>
                    <span class='text-slate-400'>Price</span>
                    <p class='text-lg font-medium'>Rs. 15,000</p>
                  </li>

                  <li>
                    <span class='text-slate-400'>Rating</span>
                    <ul class='text-lg font-medium text-amber-400 list-none'>
                      <li class='inline text-black'>4.6(8)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
              <div class='relative'>
                <img src={bg} alt='' />
              </div>

              <div class='p-6'>
                <div class='pb-6'>
                  <a
                    href='#'
                    class='text-lg hover:text-indigo-600 font-medium ease-in-out duration-500'
                  >
                    Delux Plus
                  </a>
                </div>

                <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:location-on' color='#006' />
                    </i>

                    <span>Murree</span>
                  </li>

                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:hotel' color='#006' />
                    </i>
                    <span>Taj Hotel</span>
                  </li>

                  <li class='flex items-center'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='mdi:people-group' color='#006' />
                    </i>
                    <span>4 People</span>
                  </li>
                </ul>

                <ul class='pt-6 flex justify-between items-center list-none'>
                  <li>
                    <span class='text-slate-400'>Price</span>
                    <p class='text-lg font-medium'>Rs. 15,000</p>
                  </li>

                  <li>
                    <span class='text-slate-400'>Rating</span>
                    <ul class='text-lg font-medium text-amber-400 list-none'>
                      <li class='inline text-black'>4.6(8)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
              <div class='relative'>
                <img src={bg} alt='' />
              </div>

              <div class='p-6'>
                <div class='pb-6'>
                  <a
                    href='#'
                    class='text-lg hover:text-indigo-600 font-medium ease-in-out duration-500'
                  >
                    Delux Plus
                  </a>
                </div>

                <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:location-on' color='#006' />
                    </i>

                    <span>Murree</span>
                  </li>

                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:hotel' color='#006' />
                    </i>
                    <span>Taj Hotel</span>
                  </li>

                  <li class='flex items-center'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='mdi:people-group' color='#006' />
                    </i>
                    <span>4 People</span>
                  </li>
                </ul>

                <ul class='pt-6 flex justify-between items-center list-none'>
                  <li>
                    <span class='text-slate-400'>Price</span>
                    <p class='text-lg font-medium'>Rs. 15,000</p>
                  </li>

                  <li>
                    <span class='text-slate-400'>Rating</span>
                    <ul class='text-lg font-medium text-amber-400 list-none'>
                      <li class='inline text-black'>4.6(8)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
              <div class='relative'>
                <img src={bg} alt='' />
              </div>

              <div class='p-6'>
                <div class='pb-6'>
                  <a
                    href='#'
                    class='text-lg hover:text-indigo-600 font-medium ease-in-out duration-500'
                  >
                    Delux Plus
                  </a>
                </div>

                <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:location-on' color='#006' />
                    </i>

                    <span>Murree</span>
                  </li>

                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:hotel' color='#006' />
                    </i>
                    <span>Taj Hotel</span>
                  </li>

                  <li class='flex items-center'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='mdi:people-group' color='#006' />
                    </i>
                    <span>4 People</span>
                  </li>
                </ul>

                <ul class='pt-6 flex justify-between items-center list-none'>
                  <li>
                    <span class='text-slate-400'>Price</span>
                    <p class='text-lg font-medium'>Rs. 15,000</p>
                  </li>

                  <li>
                    <span class='text-slate-400'>Rating</span>
                    <ul class='text-lg font-medium text-amber-400 list-none'>
                      <li class='inline text-black'>4.6(8)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
              <div class='relative'>
                <img src={bg} alt='' />
              </div>

              <div class='p-6'>
                <div class='pb-6'>
                  <a
                    href='#'
                    class='text-lg hover:text-indigo-600 font-medium ease-in-out duration-500'
                  >
                    Delux Plus
                  </a>
                </div>

                <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:location-on' color='#006' />
                    </i>

                    <span>Murree</span>
                  </li>

                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:hotel' color='#006' />
                    </i>
                    <span>Taj Hotel</span>
                  </li>

                  <li class='flex items-center'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='mdi:people-group' color='#006' />
                    </i>
                    <span>4 People</span>
                  </li>
                </ul>

                <ul class='pt-6 flex justify-between items-center list-none'>
                  <li>
                    <span class='text-slate-400'>Price</span>
                    <p class='text-lg font-medium'>Rs. 15,000</p>
                  </li>

                  <li>
                    <span class='text-slate-400'>Rating</span>
                    <ul class='text-lg font-medium text-amber-400 list-none'>
                      <li class='inline text-black'>4.6(8)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
              <div class='relative'>
                <img src={bg} alt='' />
              </div>

              <div class='p-6'>
                <div class='pb-6'>
                  <a
                    href='#'
                    class='text-lg hover:text-indigo-600 font-medium ease-in-out duration-500'
                  >
                    Delux Plus
                  </a>
                </div>

                <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:location-on' color='#006' />
                    </i>

                    <span>Murree</span>
                  </li>

                  <li class='flex items-center mr-4'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='material-symbols:hotel' color='#006' />
                    </i>
                    <span>Taj Hotel</span>
                  </li>

                  <li class='flex items-center'>
                    <i class='text-2xl mr-2 text-indigo-600'>
                      <Icon icon='mdi:people-group' color='#006' />
                    </i>
                    <span>4 People</span>
                  </li>
                </ul>

                <ul class='pt-6 flex justify-between items-center list-none'>
                  <li>
                    <span class='text-slate-400'>Price</span>
                    <p class='text-lg font-medium'>Rs. 15,000</p>
                  </li>

                  <li>
                    <span class='text-slate-400'>Rating</span>
                    <ul class='text-lg font-medium text-amber-400 list-none'>
                      <li class='inline text-black'>4.6(8)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class='grid md:grid-cols-12 grid-cols-1 mt-8'>
            <div class='md:col-span-12 text-center'>
              <nav>
                <ul class='inline-flex items-center -space-x-px'>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-l-lg hover:text-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      <i class='uil uil-angle-left text-[20px]'>
                        <Icon icon='material-symbols:arrow-left' color='#006' />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      aria-current='page'
                      class='z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-gray-800 border border-gray-800'
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-r-lg hover:text-white border border-gray-100 hover:border-gray-800  hover:bg-gray-800 '
                    >
                      <i class='uil uil-angle-right text-[20px]'>
                        <Icon
                          icon='material-symbols:arrow-right'
                          color='#006'
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

{
  /* <div>
      <LandingPageNavbar />
      <div className='flex justify-between'>
        <h3 className='text-xl font-medium mb-10'>My Packages</h3>
        <div>
          <button
            className='bg-[#28282b] uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1'
            type='button'
            style={{ transition: 'all .15s ease' }}
          >
            Add a Package
          </button>
        </div>
      </div>

      <hr className='mb-5'></hr>

      <div className='flex flex-wrap'>
        {projects?.map((obj, index) => (
          <PackageCard
            key={index}
            title={obj?.title}
            description={obj?.description}
            price={obj?.price}
            capacity={obj?.capacity}
            place={obj?.place}
            hotel={obj?.hotel}
          />
        ))}
      </div>
    </div> */
}
