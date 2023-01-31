import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';
import { viewAllPackages } from '../../api/index';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bg from '../../assets/arhumpic.jpg';
import { Icon } from '@iconify/react';

export const TourGuideCard = (props) => {
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();

  const { name, age, city } = props;
  return (
    <div class='group relative p-6 rounded-md shadow  hover:shadow-md bg-white transition duration-500 text-center'>
      <div class='mt-8'>
        <img
          src={bg}
          class='rounded-full shadow-md h-20 w-20 mx-auto block'
          alt=''
        />

        <div class='mt-3'>
          <a
            href='page-job-candidate-detail.html'
            class='text-lg font-medium hover:text-indigo-600 transition duration-500 block'
          >
            {name}
          </a>
          <span class='block text-sm text-slate-400'>Tour Guide</span>
        </div>
      </div>

      <div class='flex items-center justify-around my-4'>
        <span class='text-slate-400 flex'>
          <i class='uil uil-map-marker mr-1 pt-1'>
            <Icon icon='material-symbols:location-on' color='#006' />
          </i>
          {city}
        </span>
        <span class='text-slate-400 flex'>
          <i class='uil uil-map-marker mr-1 pt-1'>
            <Icon icon='material-symbols:date-range' color='#006'></Icon>
          </i>
          {age} years old
        </span>
      </div>

      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        PHP
      </a>
      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        HTML
      </a>
      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        CSS
      </a>
      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        WordPress
      </a>
      <div className='mt-6'>
        <Link
          to='#'
          class='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
          style={{ transition: 'all .15s ease' }}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
