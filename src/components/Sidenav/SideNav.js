// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman 
// ============================================================================
// -->

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
// Nav Icons

// White
import DaySheetsIcon from '../../assets/daysheets.svg'
import ReportsIcon from '../../assets/reports.svg'
import InvoicingIcon from '../../assets/invoicing-white.svg'
import JobsIcon from '../../assets/jobs-White.svg'
import CustomerIcon from '../../assets/customers-white.svg'
import ProfileIcon from '../../assets/profile-white.svg'
import SettingsIcon from '../../assets/settings-white.svg'
// Gray
import DaySheetsGrayIcon from '../../assets/daysheets-gray.svg'
import ReportsGrayIcon from '../../assets/reports-gray.svg'
import InvoicingGrayIcon from '../../assets/invoicing.svg'
import JobsGrayIcon from '../../assets/jobs.svg'
import CustomerGrayIcon from '../../assets/customers.svg'
import ProfileGrayIcon from '../../assets/profile.svg'
import SettingsGrayIcon from '../../assets/settings.svg'

export default function SideNav() {
    const { pathname } = useLocation()
    let adminChk = pathname.includes('admin')

    const activeNavItem = 'flex items-center text-sm py-6 px-6 h-12 overflow-hidden text-white bg-black rounded-2xl text-ellipsis whitespace-nowrap hover:font-semibold transition duration-300 ease-in-out font-medium mb-2';
    const unActiveNavItem = 'flex items-center text-sm py-6 px-6 h-12 overflow-hidden text-[#8C9EAC] rounded-2xl text-ellipsis whitespace-nowrap hover:font-semibold transition duration-300 ease-in-out font-medium mb-2';
    return (
        <div className="w-60 h-full bg-[#f1f4f9] px-1 fixed py-5">
            <img src={Logo} alt="" srcSet="" className='mx-auto w-36 mb-5 mt-2' />
            {adminChk ?
                <div className='flex justify-center w-full'>
                    <h2 className='border border-black text-black p-2 rounded-xl text-center w-fit text-sm font-semibold mt-3 mb-5'>Super Admin</h2>
                </div>
                : ""
            }
            {
                adminChk ?
                    // Super Admin Side                    
                    <ul className="relative">
                        <li className="relative px-1">
                            <Link to='/admin-dashboard' className={pathname === '/admin-dashboard' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/admin-dashboard' ? DaySheetsIcon : DaySheetsGrayIcon} alt="" srcSet="" className='mr-3' />
                                Dashboard
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/admin-plans' className={pathname === '/admin-plans' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/admin-plans' ? ReportsIcon : ReportsGrayIcon} alt="" srcSet="" className='mr-3' />
                                Plans
                            </Link>
                        </li>

                        <li className="relative px-1">
                            <Link to='/admin-coupons' className={pathname === '/admin-coupons' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/admin-coupons' ? InvoicingIcon : InvoicingGrayIcon} alt="" srcSet="" className='mr-3' />
                                Coupons
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/admin-payment' className={pathname === '/admin-payment' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/admin-payment' ? CustomerIcon : CustomerGrayIcon} alt="" srcSet="" className='mr-3' />
                                Payment
                            </Link>
                        </li>
                    </ul>
                    :
                    // Admin
                    <ul className="relative">
                        <li className="relative px-1">
                            <Link to='/day-sheets' className={pathname === '/day-sheets' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/day-sheets' ? DaySheetsIcon : DaySheetsGrayIcon} alt="" srcSet="" className='mr-3' />
                                Day Sheets
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/reports' className={pathname === '/reports' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/reports' ? ReportsIcon : ReportsGrayIcon} alt="" srcSet="" className='mr-3' />
                                Reports
                            </Link>
                        </li>

                        <li className="relative px-1">
                            <Link to='/invoicing' className={pathname === '/invoicing' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/invoicing' ? InvoicingIcon : InvoicingGrayIcon} alt="" srcSet="" className='mr-3' />
                                Invoicing
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/pending' className={pathname === '/pending' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/pending' ? InvoicingIcon : InvoicingGrayIcon} alt="" srcSet="" className='mr-3' />
                                Payment Pending
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/find-jobs' className={pathname === '/find-jobs' ? activeNavItem : pathname === '/add-jobs' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/find-jobs' ? JobsIcon : pathname === '/add-jobs' ? JobsIcon : JobsGrayIcon} alt="" srcSet="" className='mr-3' />
                                Jobs
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/find-customers' className={pathname === '/find-customers' ? activeNavItem : pathname === '/add-customers' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/find-customers' ? CustomerIcon : pathname === '/add-customers' ? CustomerIcon : CustomerGrayIcon} alt="" srcSet="" className='mr-3' />
                                Customer
                            </Link>
                        </li>
                        <li className="relative px-1">
                            <Link to='/find-employee' className={pathname === '/find-employee' ? activeNavItem : pathname === '/add-employee' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/find-employee' ? CustomerIcon : pathname === '/add-employee' ? CustomerIcon : CustomerGrayIcon} alt="" srcSet="" className='mr-3' />
                                Employee
                            </Link>
                        </li>
                        {/* Divider */}
                        <li className='relative px-1'>
                            <h6 className='text-xs font-semibold text-[#8C9EAC] flex items-center px-5 py-6'>NOTIFICATIONS</h6>
                        </li>

                        <li className="relative px-1">
                            <Link to='/profile' className={pathname === '/profile' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/profile' ? ProfileIcon : ProfileGrayIcon} alt="" srcSet="" className='mr-3' />
                                Profile
                            </Link>
                        </li>

                        <li className="relative px-1">
                            <Link to='/settings' className={pathname === '/settings' ? activeNavItem : unActiveNavItem} >
                                <img src={pathname === '/settings' ? SettingsIcon : SettingsGrayIcon} alt="" srcSet="" className='mr-3' />
                                Settings
                            </Link>
                        </li>
                    </ul>
            }
        </div>
    )
}

