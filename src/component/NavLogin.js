import React from "react";
import { Link } from "react-router-dom";

import CoffeeLogo from "../assets/images/figilante-removebg.png";

const NavLogin = (props) => {
  return (
    <div className="px-[10%] py-[15px] bg-[#e9d8a6] flex items-center">
      <div className="flex flex-1">
        <img src={CoffeeLogo} alt="logo-app" className="w-[150px]"/>
      </div>
      <div className="flex items-center gap-x-[20px]">
        <Link to='/login'>
        <button className="btn w-[100px] btn-accent">Login</button>
        </Link>
        <Link to='/sign-up'>
        <button className="btn w-[100px] btn-warning">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default NavLogin;
