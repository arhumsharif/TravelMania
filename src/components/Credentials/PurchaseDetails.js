// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman
// ============================================================================
// -->

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAdminPlans } from "../../api";

export default function PurchaseDetails() {
    const [fullName, setFullName] = useState('')
    const [plan, setPlan] = useState('Select Plan')

    const [planOptions, setPlanOptions] = useState([])


    const options = [
        {
            planName: 'Standard',
            planPrice: '$3',
            planDuration: 'Weekly'
        },
        {
            planName: 'Standard',
            planPrice: '$27',
            planDuration: 'Monthly'
        },
        {
            planName: 'Premium',
            planPrice: '$97',
            planDuration: 'Annual'
        }

    ]
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full shadow-lg max-w-lg">
                <div className="rounded-2xl p-10 bg-white font-semibold text-xs">
                    <div className="flex items-center mb-10">
                        <Link to='/payment-details'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLineJoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </Link>
                        <h2 className="font-bold text-center text-2xl mx-auto">Purchase Details</h2>
                    </div>
                    {/* Full Name */}
                    <select value={plan} onChange={(e) => setPlan(e.target.value)} className="mb-4 focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold">
                        <option value="">Select Plan...</option>
                        {
                            options.map(({ planName, planPrice, planDuration }, index) => {
                                let value = `${planPrice} / ${planDuration}`
                                return (
                                    <option key={index} value={value}>{`${planName} | ${planPrice} | ${planDuration}`}</option>
                                )
                            }

                            )
                        }
                    </select>

                    <div className="bg-black rounded-xl my-5 p-5 text-center">
                        <h2 className=" text-center text-white text-xl font-normal">Use Coupons or Promo code for discount offers</h2>
                        <input
                            type="text"
                            placeholder="Enter Coupon"
                            autoComplete="off"
                            className=" focus:ring-slate-500 focus:border-slate-500 block shadow-sm sm:text-sm border-gray-300 rounded-xl w-64 h-12 mx-auto placeholder:font-semibold mt-5"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />

                        <button className="bg-white text-black p-2 rounded-xl mt-4">Apply Coupon</button>
                    </div>
                    {/* Dashed Border */}
                    <div className="w-full border-dashed border-t-4"></div>

                    <h4 className="text-2xl mt-2 font-normal text-center">Billing : <span className="font-semibold">{plan}</span></h4>
                    <div className="flex space-x-2 justify-center mb-2">
                        <Link to='/'>
                            <button
                                type="button"
                                className={`inline-block px-6 py-2.5 mt-5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out`}
                            >
                                Purchase
                            </button>
                        </Link>
                    </div>
                    <h6 className="mt-3 text-center">Contact support@ironindustries.com.au</h6>
                </div>
            </div>
        </div>
    );
}
