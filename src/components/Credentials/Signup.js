import React, { useState, useRef } from 'react';
import { addUser } from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo2.png';

export default function Signup() {
  let navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [userType, setUserType] = useState('');
  const [message, setMessage] = useState('hidden');

  const register = async () => {
    if (password.current.value === confirmPassword.current.value && password.current.value > 0)
    {  
      if (validateEmail(email.current.value))
      {
        let response = await addUser(
          email.current.value,
          password.current.value,
          userType
        );
        if (response == 404) {
          setMessage('block');
        } else {
          navigate('/login');
        }
      }
      else
      {
        alert("Invalid Email")
      }
    }
    else
    {
      alert("Password Does not matches")
    }
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  

  return (
    <div
      className='flex min-h-screen justify-center items-center'
      style={{
        backgroundImage:
          "url('https://images.wallpaperscraft.com/image/single/mountain_peaks_sky_beautiful_scenery_93221_1920x1080.jpg')",
      }}
    >
      <div className='w-full shadow-lg max-w-lg'>
        <div className='rounded-2xl p-10 bg-white text-center font-semibold text-xs bg-opacity-80'>
          {/* Logo */}
          <img src={Logo} alt='' className='mx-auto mb-10 pl-3' />
          {/* Message */}
          {/* Message */}
          <div className={`mb-4 ${message}`}>
            <label className='border border-solid border-[#FF0000] px-6 py-2 text-center font-semibold text-lg rounded-xl'>
              Email Exists Already!
            </label>
          </div>
          <input
            type='email'
            placeholder='Email'
            autoComplete='given-name'
            className='my-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold'
            ref={email}
          />
          <input
            type='password'
            placeholder='Password'
            autoComplete='given-name'
            className='mt-3 mb-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold'
            ref={password}
          />

          <input
            type='password'
            placeholder='Confirm Password'
            autoComplete='given-name'
            className='mt-3 mb-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold'
            ref={confirmPassword}
          />
          {/* <div className="w-full relative">
                        <label className="absolute left-24">Select Account Type:</label>
                    </div> */}
          <select
            name=''
            className='mt-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold'
            onChange={(e) => setUserType(e.target.value)}
            value={userType}
          >
            <option value='Organization'>{'Organization'}</option>
            <option value='Tour Guide'>{'Tour Guide'}</option>
            <option value='Traveler'>{'Traveler'}</option>
          </select>
          <div className='flex space-x-2 justify-center'>
            <button
              onClick={register}
              type='button'
              className={`inline-block px-6 py-2.5 mt-5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out`}
            >
              Signup
            </button>
          </div>
          <h6 className='mt-7 mb-5'>Forgot Password?</h6>
          <h6>Already have an account</h6>
          <Link to='/login'>
            Log in <span className='underline decoration-solid'>here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
