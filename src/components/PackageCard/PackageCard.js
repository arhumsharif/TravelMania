import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/packagebg.jpg';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
export default function PackageCard(props) {
  const { user_guid, guid, title, description, price, capacity, place, hotel } =
    props;

  return (
    <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
      <div class='relative'>
        <img src={bg} alt='' />
      </div>

      <div class='p-6'>
        <div class='pb-3'>{title}</div>

        <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
          <li class='flex items-center mr-4'>
            <i class='text-2xl mr-2 text-indigo-600'>
              <Icon icon='material-symbols:location-on' color='#006' />
            </i>

            <span>{place}</span>
          </li>

          <li class='flex items-center mr-4'>
            <i class='text-2xl mr-2 text-indigo-600'>
              <Icon icon='material-symbols:hotel' color='#006' />
            </i>
            <span>{hotel}</span>
          </li>

          <li class='flex items-center'>
            <i class='text-2xl mr-2 text-indigo-600'>
              <Icon icon='mdi:people-group' color='#006' />
            </i>
            <span>{capacity} Person</span>
          </li>
        </ul>

        <ul class='pt-6 flex justify-between items-center list-none'>
          <li>
            <span class='text-slate-400'>Price</span>
            <p class='text-lg font-medium'>Rs. {price}</p>
          </li>

          <li>
            <span class='text-slate-400'>Rating</span>
            <ul class='text-lg font-medium text-amber-400 list-none'>
              <li class='inline text-black'>4.6(8)</li>
            </ul>
          </li>
          <li>
            <Link
              to='/login'
              class='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
              style={{ transition: 'all .15s ease' }}
              onClick={() => props.setAlert('You need to Login First', 'red')}
            >
              Edit
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
