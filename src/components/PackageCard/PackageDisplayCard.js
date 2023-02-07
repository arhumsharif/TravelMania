import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/bgImagePackage.jpg';
import { Icon } from '@iconify/react';
import bg from '../../assets/packagebg.jpg';
function PackageDisplayCard({ obj, person }) {
  return (
    <>
      <div
        className='bg-center bg-no-repeat w-full h-full'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <div>
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32'>
              {obj.title}
            </h3>
            <h4 className=' md:leading-normal leading-normal font-small text-white items-center content-center text-center pb-32'>
              by&nbsp;
              <Link
                to={`/tour-guide-portfolio/${person.user_guid}`}
                class='hover:text-orange-600 transition duration-500'
              >
                {person.name}
              </Link>
            </h4>
            <div class='relative text-center z-10 bottom-5 right-0 left-0 mx-3'>
              <ul class='breadcrumb tracking-[1px] breadcrumb-light mb-0 inline-block'>
                <li class='inline-block items-center mt-2 mx-3'>
                  <Icon
                    icon='material-symbols:location-on'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white font-semibold inline-block ml-1'>
                    {obj.place}
                  </span>
                </li>

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='material-symbols:hotel'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>{obj.hotel}</span>
                </li>

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='mdi:people-group'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>
                    {obj.capacity} Person
                  </span>
                </li>

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='material-symbols:star-rate-half'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>4.6(8)</span>
                </li>

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='ion:pricetag-sharp'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>
                    Rs.{obj.price}
                  </span>
                </li>

                <li class='inline-block items-center mt-2 mx-3'>
                  <i class='uil uil-shopping-cart text-white align-middle'></i>
                  <Link
                    to='#'
                    class='px-3 pt-3 pb-3 mb-1 text-white no-underline  rounded hover:bg-orange-600 font-bold hover:text-white'
                    style={{ transition: 'all .15s ease' }}
                  >
                    Book
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class='relative md:py-6 md:px-6 py-8 overflow-hidde0n flex justify-center'>
        <div class='container'>
          <div class='grid grid-cols-1'>
            <h5 class='text-2xl font-semibold mb-5'>Description</h5>

            <p class='text-slate-400 mb-3'>{obj.description}</p>
          </div>

          <div class='grid grid-cols-1 mt-8'>
            <h5 class='text-2xl font-semibold mb-5'>Timeline</h5>
          </div>

          <div class='grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]'>
            <div>
              <h5 class='text-lg font-semibold mb-5'>Day 1</h5>

              <div class='relative overflow-x-auto block w-full bg-white shadow rounded-md'>
                <table class='w-full text-left'>
                  <thead>
                    <tr>
                      <th class='px-4 py-5'>Time</th>
                      <th class='px-4 py-5 text-right'>Event</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Morning</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Breakfast at KallerKahar
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>After Noon</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Lunch in Murree
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Evening</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Reach Neelum Valley
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Night</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Stay at Neelum Valley
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 class='text-lg font-semibold mb-5'>Day 2</h5>

              <div class='relative overflow-x-auto block w-full bg-white shadow rounded-md'>
                <table class='w-full text-left'>
                  <thead>
                    <tr>
                      <th class='px-4 py-5'>Time</th>
                      <th class='px-4 py-5 text-right'>Event</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Morning</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Breakfast at KallerKahar
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>After Noon</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Lunch in Murree
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Evening</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Reach Neelum Valley
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Night</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Stay at Neelum Valley
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 class='text-lg font-semibold mb-5'>Day 3</h5>

              <div class='relative overflow-x-auto block w-full bg-white rounded-md'>
                <table class='w-full text-left'>
                  <thead>
                    <tr>
                      <th class='px-4 py-5'>Time</th>
                      <th class='px-4 py-5 text-right'>Event</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Morning</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Breakfast at KallerKahar
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>After Noon</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Lunch in Murree
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Evening</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Reach Neelum Valley
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Night</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Stay at Neelum Valley
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 class='text-lg font-semibold mb-5'>Day 4</h5>

              <div class='relative overflow-x-auto block w-full bg-white shadow rounded-md'>
                <table class='w-full text-left'>
                  <thead>
                    <tr>
                      <th class='px-4 py-5'>Time</th>
                      <th class='px-4 py-5 text-right'>Event</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Morning</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Breakfast at KallerKahar
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>After Noon</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Lunch in Murree
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Evening</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Reach Neelum Valley
                      </td>
                    </tr>

                    <tr class='border-t border-gray-100'>
                      <td class='p-4'>Night</td>
                      <td class='p-4 text-right text-orange-500 font-bold'>
                        Stay at Neelum Valley
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h5 class='text-2xl font-semibold mt-16 mb-5'>Some of the views</h5>

          <div class='grid md:grid-cols-2 grid-cols-1 mt-2 pb-16 gap-[30px]'>
            <img src={bg} class='rounded-md shadow' alt='' />

            <div class='relative'>
              <img src={bg} class='rounded-md shadow' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageDisplayCard;
