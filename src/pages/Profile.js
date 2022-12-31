import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";

const Profile = () => {
  return (
    <>
      <NavCust />
      <main
        className="relative"
      >
        <img className="absolute z-[-1] w-[100%] h-[100%]" src={require('../assets/images/bg-coffee.jpg')} alt=''/>
        <div className="px-[10%] py-[5%]">
        <div>
          <h3 className="text-white text-[30px] font-bold font-sans mb-[20px]">
            User Profile
          </h3>
          <div>
            <section className="flex gap-5 mb-[30px]">
              <div className="border-b-[10px] border-[#e9d8a6] w-[30%] bg-white rounded-[8px] p-5 text-center">
                <img
                  src={require("../assets/images/avatar.png")}
                  alt=""
                  className="w-[40%] rounded-full mx-auto mb-2"
                />
                <h4 className="text-[20px] font-bold">Kang Admin</h4>
                <p className="text-[13px] mb-[30px]">admin@mail.com</p>
                <span className="text-[18px]">Never Ordered</span>
              </div>
              <div className="border-b-[10px] border-[#e9d8a6] w-[70%] bg-white rounded-[8px] p-5">
                <h3 className="text-[25px] text-[#4F5665] font-bold tracking-[1px]">
                  Contacts
                </h3>
                <main className="grid grid-cols-2 mt-[30px]">
                  <div className="mb-[30px]">
                    <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                      Email adress :
                    </span>
                    <input
                      type="email"
                      name="email"
                      defaultValue="admin@mail.com"
                      className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                    />
                  </div>
                  <div className="mb-[30px]">
                    <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                      Mobile Number :
                    </span>
                    <input
                      type="number"
                      name="phoneNumber"
                      defaultValue="081293008882"
                      className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                    />
                  </div>
                  <div className="mb-[30px]">
                    <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                      Delivery adress :
                    </span>
                    <textarea
                      type="text"
                      name="Address"
                      defaultValue="Indonesian"
                      rows="1"
                      cols="5"
                      className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                    />
                  </div>
                </main>
              </div>
            </section>
            <section className="flex gap-5">
              <div className="border-b-[10px] border-[#e9d8a6] w-[70%] bg-white rounded-[8px] p-5">
                <h3 className="text-[25px] text-[#4F5665] font-bold tracking-[1px]">
                  Details
                </h3>
                <main className="flex mt-[30px]">
                  <section className="w-[60%]">
                    <div className="mb-[30px]">
                      <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                        Display Name :
                      </span>
                      <input
                        type="text"
                        name="nickName"
                        defaultValue="Kang Admin"
                        className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                      />
                    </div>
                    <div className="mb-[30px]">
                      <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                        First Name :
                      </span>
                      <input
                        type="text"
                        name="firstName"
                        defaultValue="Kang"
                        className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                      />
                    </div>
                    <div className="mb-[30px]">
                      <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                        Last Name:
                      </span>
                      <input
                        type="text"
                        name="lastName"
                        defaultValue="Admin"
                        className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                      />
                    </div>
                  </section>
                  <section className="w-[40%]">
                    <div className="mb-[30px]">
                      <span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
                        Date of Birth:
                      </span>
                      <input
                        type="date"
                        name="birthDate"
                        className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
                      />
                    </div>
                    <div className="w-[50%]">
                      <div className="flex items-center">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            className="radio checked:bg-[#8b5e34]"
                          />
                          <span className="label-text text-[18px] ml-[20px] text-[#8b5e34] font-semibold">
                            Male
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            className="radio checked:bg-[#8b5e34]"
                          />
                          <span className="label-text text-[18px] ml-[20px] text-[#8b5e34] font-semibold">
                            Female
                          </span>
                        </label>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
              <div className="flex flex-col items-center justify-start gap-5">
                <h3 className="font-bold text-white text-[20px] text-center">
                  Do you want to save the change?
                </h3>
                <button className="btn btn-block btn-accent">Save Change</button>
                <button className="btn btn-block btn-warning">Cancel</button>
                <div className="flex-1"/>
                <button className="btn btn-block flex justify-start">Edit Password</button>
                <button className="btn btn-block btn-error flex justify-start">Log out</button>
              </div>
            </section>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
