import React from "react";
import Footer from "../component/Footer";
import NavAdmin from "../component/NavAdmin";

const NewProduct = () => {
  return (
    <>
      <NavAdmin product="true" />
      <main className="py-[5%] px-[10%]">
        <div className="flex text-[#6A4029] font-semibold gap-1 text-[18px]">
          <p className="text-[#aeaeae]">Product</p>
          <p>{"> "}Add new product</p>
        </div>
        <div className="flex gap-[20px] items-start">
          <section className="w-[45%] p-5 text-center flex flex-col gap-[30px]">
            <div>
              <img
                src={require("../assets/images/drink.png")}
                alt=""
                className="rounded-full w-[50%] mx-auto mb-[30px] border"
              />
              <input
                type="file"
                className="file-input w-full max-w-xs bg-warning-content text-white"
              />
            </div>
            <div className="text-center flex flex-col gap-4 justify-center items-center">
              <p className="text-[#6A4029] font-semibold gap-1 text-[18px]">
                Delivery Method :
              </p>
              <input
                type="time"
                name="timeStart"
                className="timeStart p-4 w-[250px] py-3 border rounded-box px-2"
              />
              <input
                type="time"
                name="timeEnd"
                className="timeEnd p-4 w-[250px] py-3 border rounded-box px-2"
              />
            </div>
            <div className="text-center flex flex-col gap-4 justify-center items-center">
              <p className="text-[#6A4029] font-semibold gap-1 text-[18px]">
                Input Stock :
              </p>
              <input
                type="number"
                name="stock"
                placeholder="input stock"
                className="p-4 w-[250px] placeholder:text-black py-3 border rounded-box px-2"
              />
            </div>
          </section>
          <section className="w-[55%]">
            <div className="flex flex-col mb-[20px]">
              <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                Name :
              </label>
              <input
                type="text"
                placeholder="Type product name min. 50 characters"
                className="py-2 w-full border-b-[2px] outline-none"
              />
            </div>
            <div className="flex flex-col mb-[20px]">
              <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                Price :
              </label>
              <input
                type="number"
                placeholder="Type to price"
                className="py-2 w-full border-b-[2px] outline-none"
              />
            </div>
            <div className="flex flex-col mb-[20px]">
              <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                Description :
              </label>
              <input
                type="text"
                placeholder="Describe your product min. 150 characters"
                className="py-2 w-full border-b-[2px] outline-none"
              />
            </div>
            <div className="flex flex-col mb-[20px]">
              <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                Input product size :
              </label>
              <p>Click size you want to use for this product</p>
              {/* <button onClick={ () => (setsSizeId(data.id))} key={index} className="btn-ghost opacity-50 bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    {data.name}
                  </button> */}
              <div className="flex gap-5 my-[10px]">
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

              <div className="flex flex-col mb-[20px] mt-[30px]">
                <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                  Input delivery method :
                </label>
                <p>Click methods you want to use for this product</p>
                {/* <button onClick={ () => (setsSizeId(data.id))} key={index} className="btn-ghost opacity-50 bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    {data.name}
                  </button> */}
                <div className="flex gap-5 my-[10px]">
                <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px] h-[50px]">
                  Home Delivery
                </button>
                  <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px] h-[50px]">
                  Dine In
                </button>
                <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px] h-[50px]">
                  Take Away
                </button>
                </div>
              </div>

              <button className="btn btn-block my-[5px] bg-warning-content">Save Product</button>
              <button className="btn btn-block my-[5px]">Cancel</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewProduct;
