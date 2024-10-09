import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
      };
    return(
        <>
            <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={mobileMenuOpen}
                    onClick={toggleMobileMenu}
                    >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed */}
                    <svg
                        className={`block h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    {/* Icon when menu is open */}
                    <svg
                        className={`hidden h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    <img
                        className="h-9 w-auto"
                        src="./logo.png"
                        alt="Your Company"
                    />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link>
                        <Link to="/student" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">students</Link>
                        <Link to="/books/create" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ADD student</Link>
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">View notifications</span>
                    </button>

                    {/* Profile dropdown */}
                    
                </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`sm:hidden ${mobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                </div>
            </div>
            </nav>
        </>
    );
}

export default NavBar;