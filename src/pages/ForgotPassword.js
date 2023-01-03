import React from "react";
import logo from "../assets/images/logo-figilante-removebg.png";
import pic from "../assets/images/pic2.png";
import fb from "../assets/images/Facebook.png";
import twitter from "../assets/images/Twitter.png";
import ig from "../assets/images/Instagram.png";

const ForgotPassword = () => {
    return (
        <>
            <section>
                <div className="bg-[#FFFFFF] bg-hero text-white flex flex-col items-center gap-5 md:gap-20 py-10 md:py-32">
                    <div className="text-center font-bold w-3/4 md:w-full">
                        <h1 className="md:hidden text-white text-6xl mb-3">Don't <br />  Worry !</h1>
                        <p className="md:hidden text-white font-normal">We've just sent a link to your email to request a new password</p>
                        <h1 className="hidden md:block text-5xl mr-40">Forgot your password ?</h1>
                        <br />
                        <p className="hidden md:block text-xl mr-40">Don't worry, we got your back !</p>
                    </div>
                    <div className="md:hidden">
                        <img src={pic} alt="" className="py-5 w-4/4" />
                    </div>
                    <div className="flex items-center gap-5 mr-20">
                        <div className="w-96 text-stone-800 border-b-3 md:border-b-0">
                            <input type="email" name="email" placeholder="Enter your email address to get link" className="input md:input-bordered md:input-lg
                        focus:outline-none bg-inherit md:bg-white" />
                        </div>
                        <div className="hidden md:block">
                            <button className="btnCustom btnSend btn-lg rounded-2xl bg-[#FFBA33] font-bold text-[#6A4029] hover:bg-[#F49D1A]">Send</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <p className="text-stone-800">Haven't received any link ?</p>
                    </div>
                    <div className="text-center text-xl font-bold w96 flex flex-col gap-5 mr-40">
                        <p className="hidden md:block text-white">Click here if you didn't receive any link <br /> in 2 minutes</p>
                        <br />
                        <div>
                            <button className="btn md:btn-lg w-80 rounded-2xl bg-[#6A4029] hover:bg-[#876445]">Resend Link</button>
                        </div>
                        <p className="hidden md:block">01:54</p>
                    </div>

                    <footer className="hidden md:flex gap-40 relative bg-[#F8F8F8] pt-30 pb-30 pl-30 px-52 mr-20">
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={logo} alt="" className="ml-5 w-20 h-20" />
                                <p className="font-bold text-lg text-stone-700">Figilante</p>
                            </div>
                        <div>
                            <p className="w-80 ml-10 text-stone-700">
                                Figilante ia a store that sells some good <br></br> meals, and
                                especially coffee. We provide <br />
                                high quality beans
                            </p>
                        </div>
                        <div className="flex gap-0">
                            <div className="flex items-center justify-center w-20 h-20 ml-5">
                                <img src={fb} alt="" />
                            </div>
                            <div className="flex items-center w-20 h-20">
                                <img src={twitter} alt="" />
                            </div>
                            <div className="flex items-center w-20 h-20">
                                <img src={ig} alt="" />
                            </div>
                        </div>
                        <div className="ml-10 text-stone-400">
                            <p>©2022 Figilante coffee</p>
                        </div>
                        </div>
                        <div className="flex flex-col gap-5 mr-40 mt-10">
                            <p className="font-bold text-lg text-stone-700">Product</p>
                            <ul className="flex flex-col gap-4">
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Download
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Pricing
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Locations
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Countries
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Blog
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5 mr-40 mt-10">
                            <p className="font-bold text-lg text-stone-700">Engange</p>
                            <ul className="flex flex-col gap-4">
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Coffee shop ?
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    FAQ
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    About Us
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Privacy Policy
                                </li>
                                <li className="font-semibold text-stone-600 cursor-pointer">
                                    Term of Service
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword;