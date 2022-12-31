import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className="bg-gray-200 h-screen">
      {/* Navbar */}
      <nav className="navbar bg-base-100 py-5 px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="flex-none lg:hidden">
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/">Item 1</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/" className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to="/">Submenu 1</Link>
                  </li>
                  <li>
                    <Link to="/">Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Item 3</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='font-bold'>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">Your Cart</Link>
            </li>
            <li>
              <Link to="/">History</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn btn-ghost rounded-full w-24 capitalize font-bold">
            Login
          </Link>
          <Link to="/" className="btn btn-warning rounded-full w-32 capitalize">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Landing
