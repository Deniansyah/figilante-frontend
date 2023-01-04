import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";

import Arrow from "../assets/logo/arrow-checkout.svg";


import http from "../helpers/http"
import {  useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { transaction } from "../redux/reducers/transaction"

const DetailsCust = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({});
  const [sizes, setsSizes] = React.useState([]);
  const [deliveryMethods, setDeliveryMethods] = React.useState([]);
  let [count, setCount] = React.useState(1);
  const url = window.location.href.split("/");
  const token = useSelector((state)=> state.auth.token);
  const decode = jwt_decode(token);

  const userId = decode.id;
  const id = url[url.length-1];
  const [sizeId, setsSizeId] = React.useState(null);
  const [deliveryMethodId, setDeliveryMethodId] = React.useState(null);
  const [timeArrived, setTimeArrived] = React.useState(null);

  React.useEffect(() => {
    getProducts()
    getSizes()
    getDeliveryMethods();
  },[sizeId, count, deliveryMethodId, timeArrived])


  let increment = () => {
    if (count === product.stock) {
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

  const getProducts = async () =>{
    try {
      const response = await http().get(`/products/${id}`, {headers: {"authorization" : `Bearer ${token}`}})
      setProduct(response.data.results);
    } catch (error) {
      setProduct();
    }
  }

  const getSizes = async () =>{
    try {
      const response = await http().get(`/sizes`, {headers: {"authorization" : `Bearer ${token}`}})
      setsSizes(response.data.results);
    } catch (error) {
      setsSizes();
    }
  }

  const getDeliveryMethods = async () =>{
    try {
      const response = await http().get(`/deliveryMethods`, {headers: {"authorization" : `Bearer ${token}`}})
      setDeliveryMethods(response.data.results);
    } catch (error) {
      setDeliveryMethods();
    }
  }

  const addTransaction = (userId, productId, price, sizeId, qty, deliveryMethodsId, timeArrived) =>{
    const paramValue = {
      userId: userId,
      productId: parseInt(productId),
      price: price,
      sizeId: sizeId,
      qty: qty,
      deliveryMethodsId: deliveryMethodsId,
      timeArrived: timeArrived,
    }
    const cb = ()=>{
      navigate("/product-customer")
    }
    // dispatch(transactionAction(paramValue, cb))

    dispatch(transaction(paramValue))
    navigate("/product-customer")
  }

  return (
    <>
      <NavCust product="true" />
      <main className="py-[50px] px-[10%] bg-[#fbf8cc]">
        <div className="flex text-[#6A4029] font-semibold gap-1 text-[18px]">
          <p className="text-[#aeaeae]">Favorite Product</p>
          <p>{"> "}{product.name}</p>
        </div>
        <div className="flex justify-evenly gap-5 items-start">
          <section className="w-[40%] p-5 text-center">
            <img
              src={product.picture || require("../assets/images/drink.png")}
              alt=""
              className="rounded-full w-[60%] mx-auto mb-[30px]"
            />
            <h1 className="font-extrabold text-[35px] mb-[10px]">
              {product.name}
            </h1>
            <p className="font-semibold text-[20px] mb-[20px]">{product.price}</p>
            <button onClick={() => {addTransaction(userId, id, product.price, sizeId, count, deliveryMethodId, timeArrived)}} className="mb-[10px] btn bg-warning-content w-[80%] text-[18px]" type="submit">
              Add to Cart
            </button>
            <button onClick={() => {navigate("/chat")}} className="btn btn-warning w-[80%] text-[18px]">
              Ask a Staff
            </button>
          </section>
          <section className="w-[50%]">
            <div className="bg-white p-[50px] rounded-[8px] text-[#6A4029]">
              <p className="text-[18px] mb-[25px]">
                Delivery only on{" "}
                <span className="font-bold">Monday to friday</span> at{" "}
                <span className="font-bold">1 - 7 pm</span>
              </p>
              <span className="text-[20px]">
                {product.description}
              </span>
              <div className="text-center">
                <h5 className="font-bold text-center text-black text-[22px] mt-[40px] mb-[10px]">
                  Choose all size
                </h5>
                <div className="flex gap-3 justify-center">
                  {sizes?.map((data, index) =>(
                    <button onClick={ () => (setsSizeId(data.id))} key={index} className="btn-ghost opacity-50 bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    {data.name}
                  </button>
                  ))}

                  {/* <button className="btn-ghost bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    L
                  </button>
                  <button className="btn-ghost bg-orange-500 text-white rounded-full w-[60px] h-[60px]">
                    XL
                  </button> */}
                </div>
              </div>
              <div className="flex-1 text-center">
              <p className="font-bold text-center text-black text-[20px] mt-[40px] mb-[10px]">Count :</p>
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
                {deliveryMethods?.map((data, index) =>(
                  <button onClick={ () => (setDeliveryMethodId(data.id))} key={index} className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px]">
                    {data.name}
                  </button>
                ))}
                {/* <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px]">
                  Door Delivery
                </button>
                <button className="btn-ghost btn-sm bg-[#6A4029] text-white rounded-[8px]">
                  Pick Up
                </button> */}
              </div>
            </div>
            <div className="flex gap-2 mt-[30px] justify-center items-center">
              <p className="font-semibold text-center text-black text-[18px]">Set time :</p>
              <input onChange={ (e) => (setTimeArrived(e.target.value))} type='time' name="time" placeholder="Enter the time you’ll arrived" className="w-[250px] py-1 px-2"/>
            </div>
          </section>
        </div>
        <div className="text-center mt-[50px] relative mb-[-125px]">
          <div className="bg-white bg-white p-5 rounded-[80px] flex items-center">
            <div className="">
              <img
                src={require("../assets/images/drink.png")}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="text-[18px] font-semibold text-start ml-[20px] flex-1">
              <h5 className="text-[25px] font-bold">{product.name}</h5>
              <p>2x (Reguler)</p>
              <p>1x (Large)</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[24px] font-bold">Checkout</p>
              <div onClick={ () => {navigate("/cart-payment")} } className="w-[50px] h-[50px] border flex items-center justify-center rounded-full bg-warning p-3 cursor-pointer">
                <img alt="" src={Arrow} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailsCust;
