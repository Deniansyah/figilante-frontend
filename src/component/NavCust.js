import React from "react";
import { Link } from "react-router-dom";

import CoffeeLogo from "../assets/images/figilante-removebg.png";
import Search from "../assets/logo/search.svg";
import Chat from "../assets/logo/chat.svg";

const NavCust = (props) => {
  return (
    <div className="px-[10%] py-[20px] bg-[#e9d8a6] flex items-center">
      <div className="flex">
        <img src={CoffeeLogo} alt="logo-app" className="w-[150px]"/>
      </div>
      <div className="flex flex-1 gap-x-[15px] ml-[10%]">
        <Link to='/'>
          <p className={`text-[18px] font-semibold hover:text-black ${props.home?"text-black":"text-[#6c757d]"}`}>
            Home
          </p>
        </Link>
        <Link to='/product-customer'>
          <p className={`text-[18px] font-semibold hover:text-black ${props.product?"text-black":"text-[#6c757d]"}`}>
            Product
          </p>
        </Link>
        <Link>
          <p className={`text-[18px] font-semibold hover:text-black ${props.cart?"text-black":"text-[#6c757d]"}`}>
            You Cart
          </p>
        </Link>
        <Link>
          <p className={`text-[18px] font-semibold hover:text-black ${props.history?"text-black":"text-[#6c757d]"}`}>
            History
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
        <div className="cursor-pointer">
          <img src={Chat} alt="" />
        </div>
        <div className="border-[1px] border-[black] w-[40px] rounded-[50%] overflow-hidden cursor-pointer">
          <img
            src={require("../assets/images/avatar.png")}
            alt=""
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default NavCust;
