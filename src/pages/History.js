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
  const [selected, setSelectedDelete] = useState(0);
  const [refresh, setRefresh] = useState(null);

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
  }, [token, refresh]);

  const showDelete = (idTool) => {
    const Tool = document.getElementById(idTool);
    if (Tool.className.includes("nonelement")) {
      Tool.classList.remove("nonelement");
    } else {
      Tool.classList.remove("hidden");
      Tool.classList.add("piece");
    }
  };
  const cancelDelete = (idTool, idCancel) => {
    const cancel = document.getElementById(idCancel);
    const Tool = document.getElementById(idTool);
    cancel.addEventListener("click", () => {
      if (Tool.className.includes("piece")) {
        Tool.classList.add("nonelement");
        Tool.classList.remove("piece");
      } else {
        Tool.classList.add("hidden");
      }
    });
  };

  // Delete History
  const deleteHistory = async (selected) => {
    setRefresh(null)
    const formData = {
      data: { id: selected },
    };
    try {
      await http(token).delete("/transactions", formData);
      setRefresh(true)
    } catch (err) {
      console.log(err);
    }
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
          <div className="grid grid-cols-3 gap-5 mb-2">
            {history?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-[8px] flex items-start gap-2 relative cursor-pointer"
                  onClick={() => showDelete(`menu${item.id}`)}
                >
                  <div
                    className="flex absolute top-[-10px] right-0 gap-1 nonelement"
                    id={`menu${item.id}`}
                  >
                    <label
                      htmlFor="confirmDelete"
                      onClick={() => setSelectedDelete(item.id)}
                      className="cursor-pointer w-[33px] h-[30px] bg-error rounded-full flex items-center justify-center"
                    >
                      <img src={Trash} alt="" />
                    </label>
                    <p
                      className="font-bold cursor-pointer w-[33px] h-[30px] bg-yellow-300 flex items-center justify-center rounded-full"
                      id={`cancel${item.id}`}
                      onClick={() =>
                        cancelDelete(`menu${item.id}`, `cancel${item.id}`)
                      }
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
                    <span> {item.deliveryMethods?.name}</span>
                  </div>
                </div>
              );
            })}
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
            <label
              htmlFor="confirmDelete"
              className="btn btn-error"
              onClick={() => deleteHistory(selected)}
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
