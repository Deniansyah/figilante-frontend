import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";
import { Search } from "react-feather";
import axios from "axios";

const baseUrl = `${process.env.REACT_APP_URL_BACKEND}/chats`;

// const config = (token) => {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

export const chats = body => {
  return axios.get(`${baseUrl}/chats`,body);
};

export const createChat = body => {
  return axios.post(`${baseUrl}/chats`,body);
};

export const updateChat = body => {
  return axios.patch(`${baseUrl}/chats/:id`, body);
};

export const deleteChat = body => {
  return axios.delete(`${baseUrl}/chats/:id`, body);
};


const Chat = () => {
  return (
    <>
      <NavCust />
      <main className="relative">
        <img
          className="absolute z-[-1] w-[100%] h-[100%]"
          src={require("../assets/images/bg-chat.png")}
          alt=""
        />
        <div className="px-[5%] md:px-[10%] lg:px-[10%] pt-[5%] pb-[10%] md:pb-[10%] lg:py-[5%]">
          <section className="flex flex-col lg:flex-row gap-5">
            <div className="bg-[#6A4029] rounded-box text-white py-10 px-8 lg:basis-2/5">
              <div className="flex items-center relative justify-center">
                <Search className="absolute left-4 text-black" />
                <input
                  type="text"
                  placeholder="Search Chat"
                  className="input w-full rounded-full pl-12 bg-[#EFEEEE] text-black"
                />
              </div>
              <p className="text-center my-5">
                Choose a staff you want to talk with
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start border-b border-white pb-3">
                  <div className="w-20 basis-1/5">
                    <img
                      src={require("../assets/images/user-testi-1.png")}
                      alt="user1"
                    />
                  </div>
                  <div className="flex flex-col basis-4/5">
                    <h3 className="font-bold">Joson</h3>
                    <p className="text-sm">
                      Hey, I’m Jason, Let’s talk and share what’s on your
                      thoughts!
                    </p>
                  </div>
                </div>
                <div className="flex items-start border-b border-white pb-3">
                  <div className="w-20 basis-1/5">
                    <img
                      src={require("../assets/images/user-testi-2.png")}
                      alt="user2"
                    />
                  </div>
                  <div className="flex flex-col basis-4/5">
                    <h3 className="font-bold">Cheryn</h3>
                    <p className="text-sm">
                      Hey, I’m Cheryn, can I help you? Just chat me if you have
                      some trouble in ordering, happy shopping!
                    </p>
                  </div>
                </div>
                <div className="flex items-start pb-3">
                  <div className="w-20 basis-1/5">
                    <img
                      src={require("../assets/images/user-testi-3.png")}
                      alt="user3"
                    />
                  </div>
                  <div className="flex flex-col basis-4/5">
                    <h3 className="font-bold">Lou</h3>
                    <p className="text-sm">
                      Hey, I’m Jason, Let’s talk and share what’s on your
                      thoughts!Hey, I’m Lou, I’ll here to help you, just talk to
                      me and we solve the problme. Have a good day!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-10 lg:basis-3/5 relative">
              <h1 className="text-3xl font-bold text-[#4F5665] bg-white rounded-box py-5 px-11 mb-10">
                Joson
              </h1>
              <div className="overflow-y-auto lg:h-[80%] min-h-[400px] lg:pr-2">
                <div className="flex bg-white rounded-box p-5 mb-3">
                  <div className="mr-3">
                    <img
                      src={require("../assets/images/user-testi-1.png")}
                      alt="user1"
                    />
                  </div>
                  <div className="flex flex-col grow">
                    <h3 className="font-bold">Joson</h3>
                    <p className="text-sm">
                      Hey, I’m Jason, Let’s talk and share what’s on your
                      thoughts!
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">02.14 PM</p>
                </div>
                <div className="flex flex-row-reverse bg-white rounded-box p-5 mb-3">
                  <div className="ml-3">
                    <img
                      src={require("../assets/images/user-testi-1.png")}
                      alt="user1"
                    />
                  </div>
                  <div className="flex flex-col text-end">
                    <h3 className="font-bold">Joson</h3>
                    <p className="text-sm">
                      Hey, I’m Jason, Let’s talk and share what’s on your
                      thoughts!
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 grow">02.14 PM</p>
                </div>
                <div className="flex bg-white rounded-box p-5 mb-3">
                  <div className="mr-3">
                    <img
                      src={require("../assets/images/user-testi-1.png")}
                      alt="user1"
                    />
                  </div>
                  <div className="flex flex-col grow">
                    <h3 className="font-bold">Joson</h3>
                    <p className="text-sm">
                      Hey, I’m Jason, Let’s talk and share what’s on your
                      thoughts!
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">02.14 PM</p>
                </div>
              </div>
              <form className="absolute bottom-0 w-full">
                <input type="text" className="w-full py-3 rounded-box px-3" />
                <button className="hidden" type="submit"></button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Chat;
