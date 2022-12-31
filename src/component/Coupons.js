import React from "react";
import Bot1 from "../assets/logo/bot1.svg";
// import Bot2 from "../assets/logo/bot2.svg";
// import Bot3 from "../assets/logo/bot3.svg";

const Coupons = (props) => {
  return (
    <div className="w-[90%] bg-green-300 py-2 px-2 rounded-[10px] flex items-center gap-2 mb-2">
      <div className="w-[30%]">
        <img src={Bot1} alt="" />
      </div>
      <div className="">
        <h3 className="font-semibold text-[18px]">{props.title}</h3>
        <p className="text-[14px]">
          {props.value}
        </p>
      </div>
    </div>
  );
};

export default Coupons;
