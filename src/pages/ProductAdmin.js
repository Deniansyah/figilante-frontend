import React from "react";
import Coupons from "../component/Coupons";
import Footer from "../component/Footer";
import NavAdmin from "../component/NavAdmin";

import Edit from "../assets/logo/edit.svg";
import { Link } from "react-router-dom";

// bg-[#fbf8cc]
const ProductAdmin = () => {
  return (
    <>
      <NavAdmin product="true" />
      <main className="flex bg-[#fbf8cc]">
        <section className="w-[30%] border-r-[2px] border-[#e9d8a6] py-[35px] flex flex-col items-center px-[1%]">
          <div className="flex flex-col items-center justify-center text-center mx-auto mb-[20px]">
            <h1 className="text-[#6A4029] font-bold text-[25px]">
              Promo Today
            </h1>
            <p>Coupons will be updated every weeks. Check them out!</p>
          </div>
          <Coupons
            value="khusus hari ini lihat gratis makan bayar"
            title="Happy New Year"
          />
          <Coupons
            value="khusus hari ini lihat gratis makan bayar"
            title="Happy New Year"
          />
          <Coupons
            value="khusus hari ini lihat gratis makan bayar"
            title="Happy New Year"
          />
          <button className="mt-[30px] btn bg-warning-content w-[90%]">
            Apply Coupon
          </button>
          <div className="mt-[20px]">
            <h5 className="font-bold">Syarat dan Ketentuan</h5>
            <ul className="font-semibold text-[14px]">
              <li>1. Anda hanya dapat menerapkan 1 kupon per hari</li>
              <li>2. Hanya untuk makan di tempat</li>
              <li>3. Beli 1 gratis 1 hanya untuk pengguna baru</li>
              <li>4. Harus membuat kartu anggota untuk menerapkan kupon</li>
            </ul>
          </div>
          <div className="w-full text-start mt-[20px]">
            <p className="text-[#6A4029] underline cursor-pointer hover:font-bold font-semibold text-[20px]">
              Edit Promo
            </p>
            <p className="text-[#6A4029] underline cursor-pointer hover:font-bold font-semibold text-[20px]">
              Add new promo
            </p>
          </div>
        </section>
        <section className="w-[70%] py-[45px] px-[40px]">
          <nav className="grid grid-cols-5">
            <p className="text-[#6c757d] text-center text-[18px] font-semibold cursor-pointer border-b-[3px] border-[#e9d8a6] shadow-md">
              Favorite Product
            </p>
            <p className="text-[#6c757d] text-center text-[18px] font-semibold cursor-pointer">
              Coffee
            </p>
            <p className="text-[#6c757d] text-center text-[18px] font-semibold cursor-pointer">
              Non Coffee
            </p>
            <p className="text-[#6c757d] text-center text-[18px] font-semibold cursor-pointer">
              Foods
            </p>
            <p className="text-[#6c757d] text-center text-[18px] font-semibold cursor-pointer">
              Add-on
            </p>
          </nav>
          <main className="grid grid-cols-4 gap-5 mt-[80px]">
            <Link to="/product-details-admin">
              <div className="bg-white p-3 rounded-[30px] mb-[20px] relative">
                <img
                  src={require("./../assets/images/food.png")}
                  alt=""
                  className="w-[80%] mx-auto rounded-full mt-[-40px]"
                />
                <h3 className="text-center font-semibold text-[17px]">
                  Salad Tomat Mang Ujang
                </h3>
                <span className="font-bold block text-center text-[18px] mt-[5px]">
                  IDR.15.000
                </span>
                <div className="absolute bg-[#6A4029] p-2 rounded-full right-0 bottom-0 cursor-pointer">
                  <img src={Edit} alt="" />
                </div>
              </div>
            </Link>
            <Link to="/product-details-admin">
              <div className="bg-white p-3 rounded-[30px] mb-[20px] relative">
                <img
                  src={require("./../assets/images/drink.png")}
                  alt=""
                  className="w-[80%] mx-auto rounded-full mt-[-40px]"
                />
                <h3 className="text-center font-semibold text-[17px]">
                  Coffee Bu Siti
                </h3>
                <span className="font-bold block text-center text-[18px] mt-[5px]">
                  IDR.1.000
                </span>
                <div className="absolute bg-[#6A4029] p-2 rounded-full right-0 bottom-0 cursor-pointer">
                  <img src={Edit} alt="" />
                </div>
              </div>
            </Link>
          </main>
          <Link to='/new-product'>
          <button className="mt-[30px] btn-block btn bg-warning-content">
            Apply New Product
          </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductAdmin;
