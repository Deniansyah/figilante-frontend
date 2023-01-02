import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";

import Cardpay from "../assets/logo/card-pay.svg";
import Bankpay from "../assets/logo/bank-pay.svg";
import Delivery from "../assets/logo/delivery.svg";

const CartPayment = () => {
  return (
    <>
      <NavCust cart="true" />
      <main className="relative">
        <img
          className="absolute z-[-1] w-[100%] min-h-[120vh] h-[100%]"
          src={require("../assets/images/bg-cart.png")}
          alt=""
        />
        <div className="w-full px-[10%] py-[5%]">
          <p className="text-[35px] text-white font-extrabold">
            Checkout your
            <br />
            item now!
          </p>
          <div className="flex items-start gap-[30px] justify-between">
            <section className="w-[40%] bg-white px-5 py-[50px] rounded-[8px] font-semibold text-[17px]">
              <p className="text-[23px] font-semibold mb-[20px] text-center">
                Order Summary
              </p>
              <div className="flex mb-[10px] items-center">
                <img
                  src={require("../assets/images/drink.png")}
                  alt=""
                  className="rounded-[20px] w-[100px]"
                />
                <div className="flex flex-col gap-1 justify-center ml-[10px] flex-1">
                  <h3>Good Day</h3>
                  <p>x1</p>
                  <span>Regular</span>
                </div>
                <p>IDR 3.000</p>
              </div>
              <div className="flex mb-[10px] items-center">
                <img
                  src={require("../assets/images/food.png")}
                  alt=""
                  className="rounded-[20px] w-[100px]"
                />
                <div className="flex flex-col gap-1 justify-center ml-[10px] flex-1">
                  <h3>Salad</h3>
                  <p>x1</p>
                  <span>Regular</span>
                </div>
                <p>IDR 5.000</p>
              </div>
              <hr className="my-[10px]" />
              <div className="flex justify-between items-center text-[17px]">
                <p>SUBTOTAL</p>
                <span>IDR 10.000</span>
              </div>
              <div className="flex justify-between items-center text-[17px]">
                <p>TAX & FEES</p>
                <span>IDR 5.000</span>
              </div>
              <div className="flex justify-between items-center text-[17px]">
                <p>SHIPPING</p>
                <span>IDR 10.000</span>
              </div>
              <div className="flex mt-[10px] justify-between items-center text-[20px] text-warning-content font-bold">
                <p>TOTAL</p>
                <span>IDR 25.000</span>
              </div>
            </section>
            <section className="w-[40%] font-semibold flex flex-col gap-5">
              <div>
                <div className="text-white font-bold flex justify-between items-center w-full">
                  <h3 className="text-[21px]">Adress details</h3>
                  <p className="text-[15px] cursor-pointer">edit</p>
                </div>
                <div className="bg-white p-5 rounded-[8px]">
                  <p>
                    <span className="font-bold">Delivery</span> to Iskandar
                    Street
                  </p>
                  <hr className="my-[5px]" />
                  <span>
                    Km 5 refinery road oppsite re public road, effurun, Jakarta
                  </span>
                  <hr className="my-[5px]" />
                  <p>+62 81348287878</p>
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-[21px]">
                  Payment method
                </p>
                <div className="bg-white p-5 rounded-[8px]">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="payment-method" id="card"></input>
                    <div className="bg-orange-500 p-2 rounded-[8px]">
                      <img src={Cardpay} alt="card" />
                    </div>
                    <p>Card</p>
                  </div>
                  <hr className="my-[5px]" />
                  <div className="flex items-center gap-2">
                    <input type="radio" name="payment-method" id="bank"></input>

                    <div className="bg-green-500 p-2 rounded-[8px]">
                      <img src={Bankpay} alt="" />
                    </div>
                    <p>Bank account</p>
                  </div>
                  <hr className="my-[5px]" />
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment-method"
                      id="delivery"
                    ></input>
                    <div className="bg-yellow-500 p-2 rounded-[8px]">
                      <img src={Delivery} alt="card" />
                    </div>
                    <p>Cash on delivery</p>
                  </div>
                  <hr className="my-[5px]" />
                </div>
              </div>
              <button className="btn btn-block bg-warning-content">Confirm and Pay</button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPayment;
