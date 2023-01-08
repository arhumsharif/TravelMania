import {  useState } from 'react'
import { useNavigate } from 'react-router-dom';


import Cookies from 'universal-cookie';
export default function PackageCard(props) {
    let cookies = new Cookies()
    let token =  cookies.get('token')

    let navigate = useNavigate()

    const [modalDisplay, setmodalDisplay] = useState('hidden')
    const { 
        title,
        description,
        price,
        capacity,
        place, 
        hotel
     } = props;

    return (
        <>
            <article className="rounded-xl bg-white  ring ring-indigo-50 w-92 mr-5 mb-5">
                <div className="flex items-start p-6">
                    <div
                        className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                        aria-hidden="true"
                    >
                        <div className="flex items-center gap-1">
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                        </div>
                    </div>

                    <div className="sm:ml-8">
                        <strong
                            className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                        >
                            {hotel}, {place}
                        </strong>

                        <h3 className="mt-4 text-lg font-medium sm:text-xl">
                            Title: 
                            <span className='ml-1 hover:cursor-pointer'>
                                {title}
                            </span>
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                            {description}
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center text-gray-500">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <p className="ml-1 text-xs font-medium">{price} Ruppee</p>
                            </div>

                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                Maximum Capacity of {capacity} Person
                            </p>
                        </div>
                    </div>
                </div>
                            </article>
        </>
    )
}
