import React from "react";

import CoffeeLogo from "../assets/images/figilante-removebg.png";
import Facebook from "../assets/logo/facebook.svg";
import Instagram from "../assets/logo/instagram.svg";
import Twiter from "../assets/logo/twiter.svg";

const Footer = () => {
  return (
    <div className="px-[10%] py-[60px] bg-[#e9d8a6] flex items-start">
      <section className="flex-1 w-[30%]">
      <div className="flex">
        <img src={CoffeeLogo} alt="logo-app" className="w-[200px]"/>
      </div>
        <p className="mt-[20px] text-[17px] w-[40%] font-semibold">
          Figalante is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
        <div className="flex gap-3 my-[20px]">
          <div className="bg-blue-800 rounded-full cursor-pointer w-[45px] border-2 border-blue-800">
            <img src={Twiter} alt="" className="w-[100%]"/>
          </div>
          <div className="bg-blue-800 rounded-full cursor-pointer w-[45px] border-2 border-blue-800">
            <img src={Facebook} alt="" className="w-[100%]"/>
          </div>
          <div className="bg-blue-800 rounded-full cursor-pointer w-[45px] border-2 border-blue-800">
            <img src={Instagram} alt="" className="w-[100%]"/>
          </div>
        </div>
        <p className="font-bold">©2023_Figilante</p>
      </section>
      <section className="flex gap-[100px]">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[20px]">Product</h3>
          <p className="text-[18px]">Download </p>
          <p className="text-[18px]">Pricing</p>
          <p className="text-[18px]">Locations</p>
          <p className="text-[18px]">Countries</p>
          <p className="text-[18px]">Blog</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[20px]">Engage</h3>
          <p className="text-[18px]">Coffe Shop?</p>
          <p className="text-[18px]">FAQ</p>
          <p className="text-[18px]">About Us</p>
          <p className="text-[18px]">Privacy Policy</p>
          <p className="text-[18px]">Terms of Service</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
