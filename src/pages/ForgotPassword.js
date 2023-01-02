import React from "react";
import Logo from "../assets/images/logo-figilante-removebg.png";
import pic from "../assets/images/pic.png"

const ForgotPassword = () => {
    return (
        <>
        <div className="md:hidden">
            <img src= {pic} alt="" className="py-5 w-4/4" />
        </div>
        <div className="flex items-center gap-5">
            <div className="w-96 text-stone-800 border-b-2 md:border-b-0">
                <input type="email" name="email" placeholder="Enter your email address to get link" className="input md:input-bordered md:input-lg
                focus:outline-none bg-inherit md:bg-[#FFFFFF]" />
            </div>
            <div className="hidden md:block">
                <button className="btn btn-lg bg-[#FFBA33]"> Send </button>
            </div>
        </div>
        <div className="hidden text-center text-xl font-bold w-96 flex flex-col gap-5">
            <p className="hidden md:block text-[#FFFFFF] "> Click here if you didn't receive any link <br /> in 2 minutes</p>
        </div>
        </>
    )
}

export default ForgotPassword;