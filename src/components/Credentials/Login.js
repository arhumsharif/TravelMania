import React, { useState, useRef } from "react";
import { authenticateUser } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Logo from "../../assets/Logo1.png";

export default function Login() {
  let navigate = useNavigate()

    const cookies = new Cookies();
    const email = useRef();
    const password = useRef();
    const [message, setMessage] = useState("hidden");


    const login = async () => {
            let response = await authenticateUser(email.current.value,password.current.value);
            if (response === 404)
            {
                setMessage('block')
                setTimeout(()=> {
                    setMessage('hidden')
                }, 3000)
            }
            else
            {
                console.log(response)
                cookies.set("token", response.token);
                navigate("/tour-guide")
            }
      };

    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full shadow-lg max-w-lg">
                <div className="rounded-2xl p-10 bg-white text-center font-semibold text-xs">
                    {/* Logo */}
                    <img src={Logo} alt="" className="mx-auto mb-10" />
                    {/* Message */}
                    {/* Message */}
                    <div className={`mb-4 ${message}`}>
                        <label className="border border-solid border-[#FF0000] px-6 py-2 text-center font-semibold text-lg rounded-xl">
                            Invalid Login
                        </label>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="given-name"
                        className="my-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        ref={email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="given-name"
                        className="mt-3 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        ref={password}
                    />
                    <div className="flex space-x-2 justify-center">
                            <button
                                onClick={login}
                                type="button"
                                className={`inline-block px-6 py-2.5 mt-5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out`}
                            >
                                Login
                            </button>
                    </div>
                    <h6 className="mt-7 mb-5">Forgot Password?</h6>
                    <h6>Wanna make an Account</h6>
                    <Link to='/signup'>Sign up <span className="underline decoration-solid">here</span></Link>
                </div>
            </div>
        </div>
    );
}
