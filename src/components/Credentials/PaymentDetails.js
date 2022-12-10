// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman
// ============================================================================
// -->

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { userPayment } from "../../api";

export default function PaymentDetails() {
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [creditCard, setCreditCard] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCVC] = useState('')
    const [message, setMessage] = useState("hidden");

    let navigate = useNavigate()
    let location = useLocation()

    // Verify a User
  const verifyPayment = async () => {
    let userGuid = location.state.user_guid
    let response = await userPayment(userGuid, fullName, phone, email, creditCard, expiry, cvc)
    if (response == 404)
    {
        setMessage('block')
    }
    else 
    {
        navigate("/purchase-details", {state: {user_guid: userGuid}})
    }
    
  };


    const isNumericInput = (event) => {
        const key = event.keyCode;
        return (
            (key >= 48 && key <= 57) || // Allow number line
            (key >= 96 && key <= 105) // Allow number pad
        );
    };
    const isModifierKey = (event) => {
        const key = event.keyCode;
        return (
            event.shiftKey === true ||
            key === 35 ||
            key === 36 || // Allow Shift, Home, End
            key === 8 ||
            key === 9 ||
            key === 13 ||
            key === 46 || // Allow Backspace, Tab, Enter, Delete
            (key > 36 && key < 41) || // Allow left, up, right, down
            // Allow Ctrl/Command + A,C,V,X,Z
            ((event.ctrlKey === true || event.metaKey === true) &&
                (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
        );
    };
    const enforceFormat = (event) => {
        if (!isNumericInput(event) && !isModifierKey(event)) {
            event.preventDefault();
        }
    };
    const formatToCreditNumber = (event) => {
        if (isModifierKey(event)) {
            return;
        }
        const input = event.target.value.replace(/\D/g, "").substring(0, 16); // First sixteen digits of input only
        const partOne = input.substring(0, 4);
        const partTwo = input.substring(4, 8);
        const partThree = input.substring(8, 12);
        const partFour = input.substring(12, 16);
        if (input.length > 12) {
            event.target.value = `${partOne} ${partTwo} ${partThree} ${partFour}`;
        } else if (input.length > 8) {
            event.target.value = `${partOne} ${partTwo} ${partThree}`;
        } else if (input.length > 4) {
            event.target.value = `${partOne} ${partTwo}`;
        } else if (input.length > 0) {
            event.target.value = `${partOne}`;
        }
    };
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full shadow-lg max-w-lg">
                <div className="rounded-2xl p-10 bg-white text-center font-semibold text-xs">
                    <div className="flex items-center mb-10">
                        <Link to='/signup'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLineJoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </Link>
                        <h2 className="font-bold text-center text-2xl mx-auto">Add Payment Details</h2>
                    </div>
                    {/* Message */}
                    <div className={`mb-4 ${message}`}>
                        <label className="border border-solid border-[#FF0000] px-6 py-2 text-center font-semibold text-lg rounded-xl">
                        Payment Failed!
                        </label>
                    </div>
                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        autoComplete="off"
                        className="mb-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {/* Phone */}
                    <input
                        type="number"
                        placeholder="Phone"
                        autoComplete="off"
                        className="mb-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* Full Name */}
                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        className="mb-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* Credit Card */}
                    <input
                        type="text"
                        placeholder="Credit Card"
                        autoComplete="off"
                        className="mb-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        value={creditCard}
                        onChange={(e) => setCreditCard(e.target.value)}
                        onKeyDown={enforceFormat}
                        onKeyUp={formatToCreditNumber}
                        maxLength={19}
                    />

                    {/* Expiry Date */}
                    <input
                        type="date"
                        placeholder="Credit Card"
                        autoComplete="off"
                        className="mb-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                    />

                    {/* CVC */}
                    <input
                        type="text"
                        maxLength={3}
                        placeholder="CVC"
                        autoComplete="off"
                        className=" focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold"
                        value={cvc}
                        onChange={(e) => setCVC(e.target.value)}
                    />
                    <div className="flex space-x-2 justify-center mb-2">
                            <button
                                onClick={verifyPayment}
                                type="button"
                                className={`inline-block px-6 py-2.5 mt-5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out`}
                            >
                                Proceed
                            </button>
                    </div>                    
                    <h6 className="mt-3">Contact support@ironindustries.com.au</h6>
                </div>
            </div>
        </div>
    );
}
