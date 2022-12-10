// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman
// ============================================================================
// -->

import React from "react";
// import EmailIcon from '../../assets/Email.svg'
import { useLocation, Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Navbar() {
  let title = "";
  const { pathname } = useLocation();
  const cookies = new Cookies();
  let navigate = useNavigate();

  switch (pathname) {
    case "/day-sheets":
      title = "Day Sheets";
      break;
    case "/reports":
      title = "Reports";
      break;
    case "/invoicing":
      title = "Invoicing";
      break;
    case "/pending":
      title = "Payment Pending";
      break;
    case "/find-jobs":
      title = "Jobs";
      break;
    case "/add-jobs":
      title = "Jobs";
      break;
    case "/find-customers":
      title = "Customer";
      break;
    case "/add-customers":
      title = "Customer";
      break;
    case "/find-employee":
      title = "Employee";
      break;
    case "/add-employee":
      title = "Employee";
      break;
    case "/profile":
      title = "Profile";
      break;
    case "/settings":
      title = "Settings";
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center">
      <h3 className=" text-xl font-bold">{title}</h3>
      <div className="ml-auto">
        {/* <input type="search" placeholder='search...' className="mr-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 placeholder:font-semibold"
                /> */}
      </div>
      {/* Notifications */}
      {/* <button className='border border-gray-300 rounded-xl p-[0.65rem] mr-4 w-10 h-10 hover:border-2'>
                <img src={NotificationIcon} className='w-full' alt="" />
            </button> */}
      {/* Messages */}
      {/* <Link to='/'> */}
      <button
        className="border border-gray-300 rounded-xl p-[0.65rem] mr-4 w-10 h-10 hover:border-2"
        onClick={() => {
          cookies.set("user_token", "");
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-full text-[#a7bbca]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </button>
      {/* </Link> */}

      {/* Eclipse */}
      <div className=" rounded-full w-12 h-12 bg-black"></div>
    </div>
  );
}
