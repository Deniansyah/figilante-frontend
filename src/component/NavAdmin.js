import React from "react";
import { Link } from "react-router-dom";

import CoffeeLogo from "../assets/images/figilante-removebg.png";
import Search from "../assets/logo/search.svg";
import Chat from "../assets/logo/chat.svg";

const NavAdmin = (props) => {
  return (
    <div className="px-[10%] py-[15px] bg-[#e9d8a6] flex items-center">
      <div className="flex">
        <img src={CoffeeLogo} alt="logo-app" className="w-[150px]"/>
      </div>
      <div className="flex flex-1 gap-x-[15px] ml-[10%]">
        <Link>
          <p
            className={`text-[18px] font-semibold hover:text-black ${
              props.home ? "text-black" : "text-[#6c757d]"
            }`}
          >
            Home
          </p>
        </Link>
        <Link>
          <p
            className={`text-[18px] font-semibold hover:text-black ${
              props.product ? "text-black" : "text-[#6c757d]"
            }`}
          >
            Product
          </p>
        </Link>
        <Link>
          <p
            className={`text-[18px] font-semibold hover:text-black ${
              props.orders ? "text-black" : "text-[#6c757d]"
            }`}
          >
            Orders
          </p>
        </Link>
        <Link>
          <p
            className={`text-[18px] font-semibold hover:text-black ${
              props.dashboard ? "text-black" : "text-[#6c757d]"
            }`}
          >
            Dashboard
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-x-[20px]">
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
        <Link to='/chat' className="cursor-pointer">
          <img src={Chat} alt="" className="w-[25px]"/>
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
              <Link to='/profile'>
                Profile
              </Link>
            </li>
            <li>
              <Link to='/login'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
