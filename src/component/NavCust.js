import React from "react";
import { Link } from "react-router-dom";

import CoffeeLogo from "../assets/images/figilante-removebg.png";
import Search from "../assets/logo/search.svg";
import Chat from "../assets/logo/chat.svg";

const NavCust = (props) => {
  return (
    <nav className="navbar py-[15px] px-[10%] bg-[#e9d8a6]">
      <div className="flex-1 lg:flex-none">
        <div className="dropdown mr-[20px]">
          <div tabIndex={0} className="flex-none lg:hidden">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="flex flex-col w-full border-opacity-50 my-3 lg:hidden">
              <div className="grid mb-[5px] card place-items-center">
                <Link to="/">
                  <p
                    className={`text-[18px] font-semibold hover:text-black ${
                      props.home ? "text-black" : "text-[#6c757d]"
                    }`}
                  >
                    Home
                  </p>
                </Link>
              </div>
              <div className="grid mb-[5px] card place-items-center">
                <Link to="/product-customer">
                  <p
                    className={`text-[18px] font-semibold hover:text-black ${
                      props.product ? "text-black" : "text-[#6c757d]"
                    }`}
                  >
                    Product
                  </p>
                </Link>
              </div>
              <div className="grid mb-[5px] card place-items-center">
                <Link to="/cart-payment">
                  <p
                    className={`text-[18px] font-semibold hover:text-black ${
                      props.cart ? "text-black" : "text-[#6c757d]"
                    }`}
                  >
                    You Cart
                  </p>
                </Link>
              </div>
              <div className="grid mb-[5px] card place-items-center">
                <Link to="/history">
                  <p
                    className={`text-[18px] font-semibold hover:text-black ${
                      props.history ? "text-black" : "text-[#6c757d]"
                    }`}
                  >
                    History
                  </p>
                </Link>
              </div>
             <div className="block md:hidden">
             <div className="grid mb-[5px] card place-items-center">
                <Link
                  to="/login"
                  className="btn btn-warning w-full capitalize btn-sm rounded-full"
                >
                  Profile
                </Link>
              </div>
              <div className="grid mb-[5px] card place-items-center">
                <Link
                  to="/chat"
                  className="btn bg-warning-content w-full capitalize btn-sm rounded-full"
                >
                  Chat
                </Link>
              </div>
              <div className="grid mb-[5px] card place-items-center">
                <Link
                  to="/sign-up"
                  className="btn btn-error w-full capitalize btn-sm rounded-full"
                >
                  Logout
                </Link>
              </div>
             </div>
            </div>
          </div>
        </div>
        <img src={CoffeeLogo} alt="logo-app" className="w-[150px]" />
      </div>
      <div className="hidden lg:flex flex-1 gap-x-[15px] ml-[10%]">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className={`${props.home ? "text-black" : "text-[#6A4029]"}`}
            >
              Home
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/product-customer">Product</Link>
          </li>
          <hr />
          <li>
            <Link to="/cart-payment">Your Cart</Link>
          </li>
          <hr />
          <li>
            <Link to="/history">History</Link>
          </li>
          <hr />
        </ul>
      </div>
      <div className="hidden md:flex flex items-center gap-x-[20px]">
        <div className="relative group">
          <img
            src={Search}
            alt=""
            className="group-hover:absolute group-hover:w-[17px]
             w-[20px] top-[25%] left-[5px]"
          />
          <input
            className="hidden group-hover:block outline-none border-[2px] rounded-[10px] border-black placeholder:text-black pl-[25px] py-1 w-[130px]"
            type="text"
            placeholder="Search"
          />
        </div>
        <Link to="/chat" className="cursor-pointer">
          <img src={Chat} alt="" className="w-[25px]" />
        </Link>
        <div className="dropdown dropdown-end border-[2px] border-black w-[40px] rounded-[50%]">
          <label tabIndex={0}>
            <img
              src={require("../assets/images/avatar.png")}
              alt=""
              className="w-[100%] rounded-full cursor-pointer"
            />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavCust;
