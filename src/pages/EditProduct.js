import React from "react";
import Footer from "../component/Footer";
import NavAdmin from "../component/NavAdmin";

const EditProduct = () => {
  let [count, setCount] = React.useState(1);
  let increment = () => {
    if (count === 20) {
      return false;
    }
    return setCount(count + 1);
  };
  let decrement = () => {
    if (count === 1) {
      return false;
    }
    return setCount(count - 1);
  };
  const save = () => {
    const btn = document.querySelector(".save");
    btn.textContent = "Saved";
    btn.disabled = true;
  };
  return (
    <>
      <NavAdmin product="true" />
      <main className="py-[50px] px-[10%] bg-[#fbf8cc]">
        <div className="flex text-[#6A4029] font-semibold gap-1 text-[18px]">
          <p className="text-[#aeaeae]">Favorite Product</p>
          <p>{"> "}Coffe Good Day</p>
        </div>
        <div className="flex justify-evenly gap-5 items-start">
          <section className="w-[40%] p-5 text-center">
            <img
              src={require("../assets/images/drink.png")}
              alt=""
              className="rounded-full w-[60%] mx-auto mb-[30px]"
            />
            <input
              className="w-full font-extrabold bg-transparent outline-none text-center text-[35px] mb-[10px]"
              defaultValue="Good Day Coppucino"
            />
            <input
              className="font-semibold text-center text-[20px] mb-[20px] outline-none bg-transparent"
              defaultValue="IDR 3.000"
            />
            <label
              htmlFor="confirmDelete"
              className="mb-[10px] btn btn-error w-[80%] text-[18px]"
            >
              Delete Menu
            </label>
            <button
              className="save btn btn-accent w-[80%] text-[18px]"
              onClick={save}
            >
              Save Change
            </button>
          </section>
          <section className="w-[50%]">
            <div className="bg-white p-[50px] rounded-[8px] text-[#6A4029]">
              <p className="text-[18px] mb-[25px]">
                Delivery only on{" "}
                <span className="font-bold">Monday to friday</span> at{" "}
                <span className="font-bold">1 - 7 pm</span>
              </p>
              <textarea
                rows="4"
                className="text-[20px] w-full textarea textarea-ghost"
                defaultValue="Cold brewing is a method of making Good Day Coffee that combines
              ground coffee and cold water and uses time instead of heat to
              extract the flavors. It is brewed in small batches and soaked
              for 48 hours."
              ></textarea>
              <div className="text-center">
                <h5 className="font-bold text-center text-black text-[22px] mt-[40px] mb-[10px]">
                  Choose all size
                </h5>
                <div className="flex gap-3 justify-center">
                  <button className="btn-ghost bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    R
                  </button>
                  <button className="btn-ghost bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    L
                  </button>
                  <button className="btn-ghost bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    XL
                  </button>
                </div>
              </div>
              <div className="flex-1 text-center">
                <p className="font-bold text-center text-black text-[20px] mt-[40px] mb-[10px]">
                  Count Product :
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button
                    className="w-[50px] font-bold text-[25px] rounded-bl-[10px] rounded-tr-[10px] flex items-center justify-center bg-orange-100 border"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <div className="font-bold text-[18px]">{count}</div>
                  <button
                    className="w-[50px] font-bold text-[25px] rounded-bl-[10px] rounded-tr-[10px] flex items-center justify-center bg-orange-100 border"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-center text-black text-[18px] mt-[40px] mb-[10px]">
                Choose Delivery method
              </h5>
              <div className="flex gap-3 justify-center">
                <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px]">
                  Dine In
                </button>
                <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px]">
                  Door Delivery
                </button>
                <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px]">
                  Pick Up
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-[30px] justify-center items-center">
              <p className="font-semibold text-center text-black text-[18px]">
                Set time :
              </p>
              <input
                type="time"
                name="time"
                placeholder="Enter the time you’ll arrived"
                className="w-[250px] py-1 px-2"
              />
            </div>
          </section>
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

export default EditProduct;
