import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";

import Cardpay from "../assets/logo/card-pay.svg";
import Bankpay from "../assets/logo/bank-pay.svg";
import Delivery from "../assets/logo/delivery.svg";

import { useSelector } from "react-redux";
import http from "../helpers/http";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { transactionAction } from "../redux/action/transaction";

const CartPayment = () => {
  // const [product, setProduct] = React.useState({});
  // const [sizes, setSizes] = React.useState({});
  // const [payment, setPayment] = React.useState([]);
  // const token = useSelector((state)=> state.auth.token);

  // const phoneNumber = useSelector((state)=> state.profile.user.phoneNumber);
  // const [addressInput, setAddressInput] = React.useState("");
  // const address = useSelector((state)=> state.profile.user.address);
  // const trans = useSelector((state) => state.transaction);
  // const [subTotal, setSubTotal] = React.useState(0);
  // const [tax, setTax] = React.useState(0);
  // const [grandTotal, setGrandtotal] = React.useState(0);
  // // console.log(trans);
  // const cart = []

  // const getProducts = async (prodId) =>{
  //   try {
  //     const response = await http().get(`/products/${prodId}`, {headers: {"authorization" : `Bearer ${token}`}})
  //     setProduct(response.data.results);
  //   } catch (error) {
  //     setProduct();
  //   }
  // }

  // const getSizes = async (sizeId) =>{
  //   try {
  //     const response = await http().get(`/sizes/${sizeId}`, {headers: {"authorization" : `Bearer ${token}`}})
  //     setSizes(response.data.results);
  //   } catch (error) {
  //     setSizes();
  //   }
  // }

  // const getPaymentMethods = async () =>{
  //   try {
  //     const response = await http().get(`/paymentMethods`, {headers: {"authorization" : `Bearer ${token}`}})
  //     setPayment(response.data.results);
  //   } catch (error) {
  //     setPayment();
  //   }
  // }

  // const extraToCart = () => {
  //   const value = {};
  //   console.log("panjang "+trans.length)
  //   for (let index = 0; index<trans.length; index++){
  //     value.userId = trans[index].userId;

  //     value.productId = trans[index].productId;
  //     getProducts(trans[index].productId);
  //     value.productName = product.name;
  //     value.productPicture = product.picture;

  //     value.qty = trans[index].qty;

  //     value.sizeId = trans[index].sizeId
  //     getSizes(trans[index].sizeId);
  //     value.sizeName = sizes.name
  //     value.totalPrice = trans[index].total

  //     setSubTotal(subTotal + value.totalPrice)
  //     setTax((subTotal / 10) )
  //     setGrandtotal(tax + subTotal )

  //     cart.push(value);
  //   }
  // }

  // const checkOut = (value) => {
  //   const cb = () => {
  //     navigate("/history");
  //   };
  //   dispatch(transactionAction({ value, cb }));
  // };

  // React.useEffect(() => {
  //   getPaymentMethods();
  //   console.log("tai");
  //   console.log(grandTotal)
  //   extraToCart();
  // },[]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const { user } = useSelector((state) => state.profile);
  const transaction = useSelector((state) => state.transaction);

  const [paymentMethod, setPaymentMethod] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const getPaymentMethod = async () => {
    const { data } = await http(token).get("/paymentMethods");
    setPaymentMethod(data.results);
  };

  const dataCart = transaction?.map((data) => {
    return {
      userId: user.id,
      productId: data.productId,
      deliveryMethodId: data.deliveryMethodsId,
    };
  });

  const doCheckOut = () => {
    dispatch(transactionAction([dataCart, token]));
    console.log("berhasil");
  };

  useEffect(() => {
    getPaymentMethod();
  }, []);

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
              {transaction?.map((data) => {
                return (
                  <div className="flex mb-[10px] items-center" key={data.id}>
                    <img
                      src={require("../assets/images/drink.png")}
                      alt=""
                      className="rounded-[20px] w-[100px]"
                    />
                    <div className="flex flex-col gap-1 justify-center ml-[10px] flex-1">
                      <h3>{data?.productName}</h3>
                      <p>{data?.qty} X</p>
                      <span>{data?.selectedSize}</span>
                    </div>
                    <p>IDR.{data?.total}</p>
                  </div>
                );
              })}

              <hr className="my-[10px]" />
              <div className="flex justify-between items-center text-[17px]">
                <p>SUBTOTAL</p>
                <span>
                  IDR.
                  {transaction?.reduce((acc, curr) => {
                    return acc + curr.total;
                  }, 0)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[17px]">
                <p>TAX & FEES</p>
                <span>IDR 11%</span>
              </div>
              <div className="flex justify-between items-center text-[17px]">
                <p>SHIPPING</p>
                <span>IDR.10000</span>
              </div>
              <div className="flex mt-[10px] justify-between items-center text-[20px] text-warning-content font-bold">
                <p>TOTAL</p>
                <span>
                  IDR.
                  {
                    Number(transaction?.reduce((acc, curr) => {
                      return acc + curr.total;
                    }, 0) * 1.11 + 10000).toFixed(0)
                  }
                </span>
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
                    <span className="font-bold">Delivery</span>
                  </p>
                  <hr className="my-[5px]" />
                  <input className="input" type="text"></input>
                  <hr className="my-[5px]" />
                  <p>{user?.phoneNumber}</p>
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-[21px]">
                  Payment method
                </p>
                <div className="bg-white p-5 rounded-[8px]">
                  {paymentMethod?.map((data) => {
                    return (
                      <div key={data.id}>
                        <div className="flex items-center gap-2">
                          <input
                            onChange={(e) => setSelectedPayment(data.id)}
                            type="radio"
                            name="payment-method"
                            id="card"
                          ></input>
                          {/* <div className="bg-orange-500 p-2 rounded-[8px]">
                            <img src="" alt="card" />
                          </div> */}
                          <p>{data.name}</p>
                        </div>
                        <hr className="my-[5px]" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={doCheckOut}
                className="btn btn-block bg-warning-content"
              >
                Confirm and Pay
              </button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPayment;
