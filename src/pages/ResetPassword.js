// import { Field } from "formik";
import React from "react";
import Footer from "../component/Footer";

const ResetPassword = () => {
  return (
    <div>
      <main className="relative">
        <img
          className="absolute z-[-1] w-[100%] min-h-[120vh] h-[100%]"
          src={require("../assets/images/pic.png")}
          alt=""
        />
        <div className="px-[10%] py-[10%] w-full flex flex-col justify-center items-center gap-5">
          <div className="text-white text-center mb-[40px]">
            <h2 className="text-[35px] font-bold">Reset your password ?</h2>
            <p className="text-[20px]">
              Enter your code that you have received
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-[25rem]">
              <label className="text-white font-semibold">
                Code Confirm :{" "}
              </label>
              <input
                type="number"
                name="code"
                placeholder="Enter your code"
                className="input focus:outline-white bg-white border-[#4F5665] mt-2 w-full rounded-2xl "
              />
            </div>
          </div>
          <div className="flex justify-center w-[40%]">
            <div className="w-[25rem]">
              <label className="text-white font-semibold">
                New Password :{" "}
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
                className="input focus:outline-white bg-white border-[#4F5665] mt-2 w-full rounded-2xl "
              />
              {/* {errors.password && touched.password && (
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.password}
                  </span>
                </label>
              )} */}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-[25rem]">
              <label className="text-white font-semibold">
               Cofirm Password :{" "}
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter your confirm password"
                className="input focus:outline-white bg-white border-[#4F5665] mt-2 w-full rounded-2xl "
              />
              {/* {errors.password && touched.password && (
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.password}
                  </span>
                </label>
              )} */}
            </div>
          </div>
          <button className="btn btn-accent btn-block w-[35%] mt-[50px]">Confirm</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPassword;
