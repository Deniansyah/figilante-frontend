import React from "react";
import background from "../assets/images/bg-login.png";
import logo from "../assets/images/logo-figilante-removebg.png";
import google from "../assets/images/google-logo.png";
import fb from "../assets/images/Facebook.png";
import twitter from "../assets/images/Twitter.png";
import ig from "../assets/images/Instagram.png";

import {Link} from "react-router-dom"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/action/auth";

YupPassword(Yup); // extend yup

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6)
    .minUppercase(1)
    .minLowercase(1)
    .minNumbers(1)
    .minSymbols(1),
  phoneNumber: Yup.string().required("Required").min(10).max(13),
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const doRegister = (value) => {
    const cb = () => {
      navigate("/");
    };
    dispatch(registerAction({ value, cb }));
  };

  return (
    <div>
      <section>
        <div className="flex">
          <div className="flex-[45%]">
            <img src={background} alt="bg" className="5/6" />
          </div>
          <div className="flex-[55%] py-12 md:py-0 bg-[#FFFFFF] md:bg-[#FFFFFF]">
            <div className="hidden md:flex items-center px-[50px]">
              <div className="flex-1 flex items-center gap-7">
                <img src={logo} alt="" className="w-20 h-20" />
                <p className="font-bold text-3xl text-stone-800">Figilante</p>
              </div>
              <Link to='/login'>
                <button className="btn btn-sm bg-[#FFBA33] w-40 h-10 rounded-2xl font-bold text-[#6A4029] hover:bg-[#F49D1A]">
                  Login
                </button>
              </Link>
            </div>
            <div className="w-[80%] mx-auto">
            <Formik
              initialValues={{
                email: "",
                password: "",
                phoneNumber: "",
              }}
              validationSchema={registerSchema}
              onSubmit={(value) => doRegister(value)}
            >
              {({ errors, touched, dirty }) => (
                <Form className="flex flex-col items-center gap-5">
                  <div className="py-1">
                    <h1 className="font-bold text-[40px] text-[#6A4029]">
                      Sign Up
                    </h1>
                    {message && (
                      <div className="text-center mt-10">
                        <p className="text-base font-semibold text-red-500">
                          {message}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="w-[25rem] ">
                    <label className="text-[#4F5665] font-semibold">
                      Email Address :{" "}
                    </label>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter your email address"
                      className="input input-bordered focus:outline-none bg-inherit border-[#4F5665] mt-2 w-full rounded-2xl"
                    />
                    {errors.email && touched.email && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.email}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="w-[25rem]">
                    <label className="text-[#4F5665] font-semibold">
                      Password :{" "}
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered focus:outline-none bg-inherit border-[#4F5665] mt-2 w-full rounded-2xl"
                    />
                    {errors.password && touched.password && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.password}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="w-[25rem]">
                    <label className="text-[#4F5665] font-semibold">
                      Phone Number :{" "}
                    </label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      className="input input-bordered focus:outline-none bg-inherit border-[#4F5665] mt-2 w-full rounded-2xl"
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.phoneNumber}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="w-[25rem] mt-7">
                    <button
                      type="submit"
                      disabled={!dirty || !isLoading}
                      className="btn w-[25rem] bg-[#FFBA33] text-[#6A4029] font-bold text-lg rounded-2xl hover:bg-[#F49D1A]"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="w-[25rem]">
                    <div className="btn w-[25rem] bg-[#FFFFFF] mt-5 hover:bg-[#B2B2B2] drop-shadow-2xl text-[#000000] border-none font-bold text-lg rounded-2xl flex items-center gap-5">
                      <img src={google} alt="" />
                      <p>Sign up with Google</p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            </div>
          </div>
        </div>

        <footer className="hidden md:flex gap-20 relative bg-[#F8F8F8] pt-36 pb-20 pl-30 px-50">
          <div className="absolute box-border h-40 w-32 -top-20 inset-x-28 bg-[#FFFFFF] drop-shadow-2xl rounded-lg flex items-center p-7 w-3/4">
            <div className="flex-1">
              <p className="font-bold text-3xl w-2/4 mb-5 text-stone-600">
                Get your member <br></br> card now !
              </p>
              <p className="text-stone-500">
                Let's join with our member and enjoy the deals
              </p>
            </div>
            <div>
              <button className="btn text-xl bg-[#FFBA33] hover:bg-[#F49D1A] w-40 text-stone-700">
                {" "}
                Create Now{" "}
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img src={logo} alt="" className="ml-5 w-20 h-20" />
              <p className="font-bold text-lg text-stone-700">Figilante</p>
            </div>
            <div>
              <p className="w-70 ml-10 text-stone-700">
                Figilante ia a store that sells some good <br></br> meals, and
                especially coffee. We provide <br />
                high quality beans
              </p>
            </div>
            <div className="flex gap-5">
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
            <div className="ml-10">
              <p>©2022 Figilante coffee</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 mr-20 mt-10">
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
              <li className="font-semibold text-stone-600 cuirsor-pointer">
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
      </section>
    </div>
  );
};

export default SignUp;
