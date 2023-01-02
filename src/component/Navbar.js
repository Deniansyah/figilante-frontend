import React from 'react'
import { Link } from 'react-router-dom'
import CoffeeLogo from "../assets/images/figilante-removebg.png";


const Navbar = () => {
  return (
    <nav className="navbar py-[15px] px-[10%] bg-[#e9d8a6]">
    <div className="navbar-start">
      <div className="dropdown mr-[20px]">
        <div tabIndex={0} className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <div className="flex flex-col w-full border-opacity-50 my-3 md:hidden lg:hidden">
            <div className="grid card place-items-center">
              <Link to='/login' className='btn btn-warning w-full capitalize btn-sm rounded-full'>Login</Link>
            </div>
            <div className="divider text-[14px]">OR</div>
            <div className="grid card place-items-center">
              <Link to='/sign-up' className='btn btn-warning w-full capitalize btn-sm rounded-full'>Sign Up</Link>
            </div>
          </div>
        </ul>
      </div>
      <img src={CoffeeLogo} alt="logo-app" className="w-[150px]"/>
    </div>
    <div className="navbar-end gap-2 hidden md:flex lg:flex">
      <Link to="/login" className="btn btn-ghost rounded-full font-bold capitalize">
        Login
      </Link>
      <Link to="/sign-up" className="btn btn-warning rounded-full w-32 capitalize">
        Sign Up
      </Link>
    </div>
  </nav>
  )
}

export default Navbar
