import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";
import Trash from "../assets/logo/trash.svg";
import http from "../helpers/http";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const History = () => {
  const { token } = useSelector((state) => state.auth);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const { data } = await http(token).get(
          `${process.env.REACT_APP_URL_BACKEND}/transactions`
        );
        setHistory(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getHistory();
  }, []);

  const showDelete = (idTool) => {
    const Tool = document.getElementById(idTool);
    Tool.classList.remove("hidden");
  };
  const cancelDelete = (idTool) => {
    // const cancel = document.getElementById(idCancel)
    const Tool = document.getElementById(idTool);
    Tool.classList.add("hidden");
    // cancel.addEventListener('click',()=>{
    //   console.log(cancel)
    // })
  };
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
          <h3 className="text-center text-[35px] text-white font-bold mb-[20px]">
            Let’s see what you have bought!
            <br />
            <span className="text-[17px]"> press to delete item</span>
          </h3>
          {history?.map((item, index) => {
            return (
              <div className="grid grid-cols-3 gap-5 mb-2" key={index + 1}>
                <div
                  className="bg-white p-5 rounded-[8px] flex items-start gap-2 relative cursor-pointer"
                  onClick={() => showDelete("tool1")}
                >
                  <div
                    className="flex absolute top-[-10px] right-0 gap-1 hidden"
                    id="tool1"
                  >
                    <label
                      htmlFor="confirmDelete"
                      className="cursor-pointer w-[33px] h-[30px] bg-error rounded-full flex items-center justify-center"
                    >
                      <img src={Trash} alt="" />
                    </label>
                    <p
                      className="font-bold cursor-pointer w-[33px] h-[30px] bg-yellow-300 flex items-center justify-center rounded-full"
                      id="cancel1"
                      onClick={() => cancelDelete("tool1")}
                    >
                      X
                    </p>
                  </div>
                  <img
                    src={require("../assets/images/drink.png")}
                    alt=""
                    className="w-[80px] rounded-[10px]"
                  />
                  <div className="text-warning-content font-semibold">
                    <h4 className="text-black text-[20px] font-bold">
                      {item.products.name}
                    </h4>
                    <p>IDR {item.products.price}</p>
                    <span> {item.deliveryMethods.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="grid grid-cols-3 gap-5">
            <div
              className="bg-white p-5 rounded-[8px] flex items-start gap-2 relative cursor-pointer"
              onClick={() => showDelete("tool1")}
            >
              <div
                className="flex absolute top-[-10px] right-0 gap-1 hidden"
                id="tool1"
              >
                <label
                  htmlFor="confirmDelete"
                  className="cursor-pointer w-[33px] h-[30px] bg-error rounded-full flex items-center justify-center"
                >
                  <img src={Trash} alt="" />
                </label>
                <p
                  className="font-bold cursor-pointer w-[33px] h-[30px] bg-yellow-300 flex items-center justify-center rounded-full"
                  id="cancel1"
                  onClick={() => cancelDelete("tool1")}
                >
                  X
                </p>
              </div>
              <img
                src={require("../assets/images/drink.png")}
                alt=""
                className="w-[80px] rounded-[10px]"
              />
              <div className="text-warning-content font-semibold">
                <h4 className="text-black text-[20px] font-bold">
                  Good Day Coppucino
                </h4>
                <p>IDR 34.000</p>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <input type="checkbox" id="confirmDelete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="confirmDelete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are you sure want to delete this product?
          </h3>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-error">
              Confirm
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
