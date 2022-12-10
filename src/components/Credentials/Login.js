// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman
// ============================================================================
// -->

import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authenticateUser } from "../../api";
import Cookies from "universal-cookie";
import Logo from "../../assets/Logo.png";
export default function Login() {
  let navigate = useNavigate();
  const cookies = new Cookies();
  const username = useRef();
  const password = useRef();
  const [login, setlogin] = useState("hidden");
  const [message, setMessage] = useState("hidden");

  // Button will be displayed iff fields are not left empty.
  const handleLogin = () => {
    if (username.current.value && password.current.value) setlogin("block");
    else setlogin("hidden");
  };

  // Login via Enter button
  const keyCheck = (e) => {
    if (e.key === "Enter") {
      verifyUser();
    }
  };
  // Verify a User
  const verifyUser = async () => {
    let response = await authenticateUser(
      username.current.value,
      password.current.value
    );
    if (response?.role === "Admin") {
      cookies.set("user_token", response.user_token);
      navigate("/day-sheets");
    }
    else if (response?.role === "Super Admin")
    {
      cookies.set("user_token", response.user_token);
      navigate("/admin-dashboard");
    }
     else 
     {
      setMessage("block");
    }
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full shadow-lg max-w-lg">
        <div className="rounded-2xl p-10 bg-white text-center font-semibold text-xs">
          {/* Logo */}
          <img src={Logo} alt="" className="mx-auto mb-10" />
          {/* Message */}
          <div className={`mb-4 ${message}`}>
            <label className="border border-solid border-[#FF0000] px-6 py-2 text-center font-semibold text-lg rounded-xl">
              Invalid Login
            </label>
          </div>
          <input
            type="text"
            placeholder="username"
            autoComplete="given-name"
            className="my-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
            onKeyDown={(e) => keyCheck(e)}
            ref={username}
            onChange={handleLogin}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="given-name"
            className="mt-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
            onKeyDown={(e) => keyCheck(e)}
            ref={password}
            onChange={handleLogin}
          />
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              onClick={verifyUser}
              className={`${login} inline-block px-6 py-2.5 mt-5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out`}
            >
              Login
            </button>
          </div>
          <h6 className="mt-7">Forgot Password?</h6>
          <h6 className="mb-4">Contact support@ironindustries.com.au</h6>
          <h6>Don't have a login</h6>
          <Link to='/signup'>Sign up <span className="underline decoration-solid">here</span></Link>
        </div>
      </div>
    </div>
  );
}
