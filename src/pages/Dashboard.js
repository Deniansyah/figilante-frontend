import React from "react";
import Footer from "../component/Footer";
import NavAdmin from "../component/NavAdmin";

import Filter from "../assets/logo/filter-date.svg";
const Dashboard = () => {
  return (
    <>
      <NavAdmin dashboard="true" />
      <main className="bg-[#fbf8cc] px-[10%] py-[5%]">
        <h3 className="text-warning-content text-[30px] text-center font-semibold">
          See how your store progress so far
        </h3>
        <div className="my-[10px] flex items-center gap-5">
          <div className="flex flex-col gap-1">
            <img alt="" src={Filter} />
            <p className="font-semibold">Filter</p>
          </div>
          <p className="text-[18px] font-semibold">15 April - 21 April 2020</p>
          <div className="flex items-center gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex">
          <section className="w-[70%]">
            <img src={require("../assets/images/dashboard.png")} alt="" />
          </section>
          <section className="w-[30%]">
            <img alt="" src={require("../assets/images/best-staff.png")} />
            <img alt="" src={require("../assets/images/goals.png")} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
