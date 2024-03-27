import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import NavAdmin from "../component/NavAdmin";
import http from "../helpers/http";

const NewProduct = () => {
  const [sizes, setSizes] = React.useState([]);
  const [sizeId, setsSizeId] = React.useState(null);
  const [methodDeliveryId, setMethodDeliveryId] = React.useState(null);
  console.log(sizeId)
  console.log(methodDeliveryId)
  const [deliveryMethods, setDeliveryMethods] = React.useState([]);

  const token = useSelector((state) => state.auth.token);
  const addProduct = async (event) => {
    event.preventDefault();
    console.log(event.target.timeStart)
    const  timeStart = event.target.timeStart.value
    const  timeEnd  = event.target.timeEnd.value
    const  stock  = event.target.stock.value
    const  nameProduct  = event.target.nameProduct.value
    const  descripsi  = event.target.descripsi.value
    const  price  = event.target.price.value
    const formData = {
      name : nameProduct,
      price : price,
      description : descripsi,
      stock : stock,
      deliveryStart : timeStart,
      deliveryEnd : timeEnd || null,
    }
    try{
      const data = await http(token).post(`${process.env.REACT_APP_URL_BACKEND}/products`, formData);
      alert("add product succes")
      console.log(data)
    }catch(err){
      alert(err.message)
      console.log(err)
      throw err
    }
  };
  useEffect(() => {
    getSizes();
    getDeliveryMethods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSizes = async () => {
    try {
      const response = await http().get(`/sizes`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setSizes(response.data.results);
    } catch (error) {
      console.log(error);
      setSizes();
    }
  };

  const getDeliveryMethods = async () => {
    try {
      const response = await http().get(`/deliveryMethods`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setDeliveryMethods(response.data.results);
    } catch (error) {
      console.log(error);
      setDeliveryMethods();
    }
  };

  return (
    <>
      <NavAdmin product="true" />
      <main className="py-[5%] px-[10%]">
        <div className="flex text-[#6A4029] font-semibold gap-1 text-[18px]">
          <p className="text-[#aeaeae]">Product</p>
          <p>{"> "}Add new product</p>
        </div>
        <form onSubmit={addProduct} className="flex gap-[20px] items-start">
          <section className="w-[45%] p-5 text-center flex flex-col gap-[30px]">
            <div>
              <div className="bg-slate-200 mb-[30px] w-[150px] h-[150px] rounded-full mx-auto flex items-center justify-center">
              <img
                src={require("../assets/images/camera.png")}
                alt=""
                className="w-[50%] mx-auto"
              />
              </div>
              <input
                type="file"
                className="file-input w-full max-w-xs bg-warning-content text-white"
              />
            </div>
            <div className="text-center flex flex-col gap-4 justify-center items-center">
              <p className="text-[#6A4029] font-semibold gap-1 text-[18px]">
                Delivery Hour :
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
                min='1'
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
                name="nameProduct"
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
                name="price"
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
                name="descripsi"
                placeholder="Describe your product min. 150 characters"
                className="py-2 w-full border-b-[2px] outline-none"
              />
            </div>
            <div className="flex flex-col mb-[20px]">
              <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                Input product size :
              </label>
              <p>Click size you want to use for this product</p>
              <div className="flex gap-5 my-[10px]">
                {sizes?.map((data, index) => (
                  <div
                    onClick={ () => (setsSizeId(data.id))}
                    key={index}
                    className="btn opacity-50 bg-orange-500 text-white rounded-full w-[60px] h-[60px] cursor-pointer"
                  >
                    {data.name}
                  </div>
                ))}

              </div>

              <div className="flex flex-col mb-[20px] mt-[30px]">
                <label className="text-[#6A4029] font-semibold gap-1 text-[18px] mb-[10px]">
                  Input delivery method :
                </label>
                <p>Click methods you want to use for this product</p>
                <div className="flex gap-5 my-[10px]">
                  {deliveryMethods?.map((data, index) => (
                    <div
                     onClick={ () => (setMethodDeliveryId(data.id))}
                      key={index}
                      className="btn btn-sm bg-[#6A4029] text-white rounded-[8px] h-[50px] cursor-pointer"
                    >
                      {data.name}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-block my-[5px] bg-warning-content"
              >
                Save Product
              </button>
              <Link to='/product-admin' className="btn btn-block my-[5px]">Cancel</Link>
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default NewProduct;
