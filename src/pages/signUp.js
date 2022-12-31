import React from "react";
import background from "../assets/images/bg-login.png";
import logo from "../assets/images/logo-figilante-removebg.png";
import google from "../assets/images/google-logo.png";
import fb from "../assets/images/Facebook.png";
import twitter from "../assets/images/Twitter.png";
import ig from "../assets/images/Instagram.png";

const SignUp = () => {
    return (
    <div>
        <section>
            <div className="flex">
                <div className="flex-[45%]">
                    <img src={background} alt="bg" className="5/6" />
                </div>
                <div className="flex-[55%]">
                    <div className="flex items-center py-14 pl-13 pr-36">
                        <div className="flex-1 flex items-center gap-4">
                            <img src={logo} alt="" className="w-10 h-10" />
                            <p className="font-bold text-xl">Figilante</p>
                        </div>
                        <div className="flex w-24 items-center justify-center">
                            <button className="btn btn-sm bg-[#FFBA33] rounded-2xl font-bold text-[#6A4029]">Login</button>
                        </div>
                    </div>
                    <form className="flex flex-col items-center gap-5">
                        <div className="py-5">
                            <h1 className="font-bold text-2xl text-[#6A4029]">Sign Up</h1>
                        </div>
                        <div className="w-[25rem]">
                            <label>Email Address : </label>
                            <input
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered focus:outline-none mt-2 w-full rounded-2xl"
                            />
                        </div>
                        <div className="w-[25rem] mt-3">
                            <button className="btn bg-[#FFBA33] text-[#6A4029] font-bold text-lg rounded-2xl">Sign Up</button>
                        </div>
                        <div className="w-[25rem]">
                            <button className="btn bg-[#FFFFFF] drop-shadow-xl text-[#000000] border-none font-bold text-lg rounded-2xl flex items-center gap-5">
                                <img src={google} alt="" />
                                <p>Sign up with Google</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="flex gap-25 relative bg-[#FFFFFF] pt-36 pb-20 pl-30 px-50">
                <div className="absolute top-27 inset-x-28 bg-[#FFFFFF] shadow-lg rounded-lg flex items-center p-10 w-3/4">
                    <div className="flex-1">
                        <p className="font-bold text-3xl w-2/4 mb-5">Get your member card now !</p>
                        <p>Let's join with our member and enjoy the deals</p>
                    </div>
                    <div>
                        <button className="btn text-xl bg-[#FFBA33]"> Create Now </button>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="" className="w-8 h-8" />
                        <p className="font-bold text-lg">Figilante</p>
                    </div>
                    <div>
                        <p className="w-70">
                            Figilante ia a store that sells some good meals, and especially coffee. We provide high quality beans
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <img src={fb} alt="" />
                    </div>
                    <div className="flex gap-5">
                        <img src={twitter} alt="" />
                    </div>
                    <div className="flex gap-5">
                        <img src={ig} alt="" />
                    </div>
                </div>
            </footer>
        </section>
    </div>
    );
};

export default SignUp;
