import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";

const History = () => {
  return (
    <>
      <NavCust history="true" />
      <main className="relative">
        <img
          className="z-[-1] w-[100%] h-[100%]"
          src={require("../assets/images/bg-history.png")}
          alt=""
        />
        <div className="absolute top-0 w-full px-[10%] py-[5%]">
          <h3 className="text-center text-[35px] text-white font-bold mb-[20px]">Let’s see what you have bought!<br/><span className="text-[17px]"> press to delete item</span></h3>
          <div className="grid grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-[8px] flex items-start gap-2">
                <img src={require('../assets/images/drink.png')} alt="" className="w-[80px] rounded-[10px]"/>
                <div className="text-warning-content">
                  <h4 className="text-black text-[20px] font-bold">Good Day Coppucino</h4>
                  <p>IDR 34.000</p>
                  <span>Delivered</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-[8px] flex items-start gap-2">
                <img src={require('../assets/images/drink.png')} alt="" className="w-[80px] rounded-[10px]"/>
                <div className="text-warning-content">
                  <h4 className="text-black text-[20px] font-bold">Good Day Coppucino</h4>
                  <p>IDR 34.000</p>
                  <span>Delivered</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-[8px] flex items-start gap-2">
                <img src={require('../assets/images/drink.png')} alt="" className="w-[80px] rounded-[10px]"/>
                <div className="text-warning-content">
                  <h4 className="text-black text-[20px] font-bold">Good Day Coppucino</h4>
                  <p>IDR 34.000</p>
                  <span>Delivered</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-[8px] flex items-start gap-2">
                <img src={require('../assets/images/drink.png')} alt="" className="w-[80px] rounded-[10px]"/>
                <div className="text-warning-content">
                  <h4 className="text-black text-[20px] font-bold">Good Day Coppucino</h4>
                  <p>IDR 34.000</p>
                  <span>Delivered</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-[8px] flex items-start gap-2">
                <img src={require('../assets/images/drink.png')} alt="" className="w-[80px] rounded-[10px]"/>
                <div className="text-warning-content">
                  <h4 className="text-black text-[20px] font-bold">Good Day Coppucino</h4>
                  <p>IDR 34.000</p>
                  <span>Delivered</span>
                </div>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default History;
