"use client"
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '../components/mode-toggle';
import React from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center navbar-item">
            <img
              src="../images/mimilogo.png"
              className="h-8 mr-3"
              alt="MimiLogo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Dawn
            </span>
          </Link>
        </div>
          <ul className="hidden md:flex flex-row-reverse p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/simulacra" className="navbar-item">
                Simulacra
              </Link>
            </li>
            <li>
              <Link href="/matrices" className="navbar-item">
                Matrices
              </Link>
            </li>
            <li>
              <Link href="/dpscalc" className="navbar-item">
                Dps Calculator
              </Link>
            </li>
            <li>
            <button onClick={toggleDropdown} className="navbar-item">
              Database
            </button>
            {isDropdownOpen && (
              <ul className="absolute w-48 mt-2 py-2 shadow-lg rounded-md bg-slate-100 dark:bg-slate-900">
                <li><Link legacyBehavior href="/database/overall"><a className="block px-4 py-2 text-sm navbar-item">Overall</a></Link></li>
                <li><Link legacyBehavior href="/database/base-gear"><a className="block px-4 py-2 text-sm navbar-item">Base Gear</a></Link></li>
                <li><Link legacyBehavior href="/database/vera-gear"><a className="block px-4 py-2 text-sm navbar-item">Vera Gear</a></Link></li>
                <li><Link legacyBehavior href="/database/frost"><a className="block px-4 py-2 text-sm navbar-item">Frost</a></Link></li>
                <li><Link legacyBehavior href="/database/flame"><a className="block px-4 py-2 text-sm navbar-item">Flame</a></Link></li>
                <li><Link legacyBehavior href="/database/physical"><a className="block px-4 py-2 text-sm navbar-item">Physical</a></Link></li>
                <li><Link legacyBehavior href="/database/volt"><a className="block px-4 py-2 text-sm navbar-item">Volt</a></Link></li>
              </ul>
            )}
            </li>
          </ul>
          <div className="flex items-center space-x-4">
          <div className="navbar-item">
            <ModeToggle />
          </div>
          <div className="">
            {/* Login Button */}
            <button className="px-4 py-1 rounded-md  bg-slate-100 border-indigo-900 border-2 dark:bg-indigo-900 hover:bg-indigo-100 hover:dark:bg-indigo-700">
              Login
            </button>
          </div>
          <div className="navbar-item">
            {/* Existing Menu Toggle Button */}
            <button onClick={toggleMenu} className="md:hidden flex flex-col font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-900 md:dark:bg-gray-900">
              {/* SVG Icons */}
            </button>
          </div>
          <div className = "navbar-item">
            <button
              onClick={toggleMenu}
              className={`md:hidden flex flex-col font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-900 md:dark:bg-gray-900`}
            >
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="w-full md:hidden">
          <ul className="flex flex-col font-medium text-center p-4 md:p-0 mt-0 md:flex-row md:space-x-8s md:mt-0 border-t-[3px] border-aquamarine-800 md:bg-gray-200 dark:bg-gray-900 md:dark:bg-gray-900">
            <li>
              <Link href="/simulacra" className="navbar-item">
                Simulacra
              </Link>
            </li>
            <li>
              <Link href="/matrices" className="navbar-item">
                Matrices
              </Link>
            </li>
            <li>
              <Link href="/dpscalc" className="navbar-item">
                Dps Calculator
              </Link>
            </li>
            <li>
              <Link href="/database" className="navbar-item">
                Database
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;