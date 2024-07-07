import React, { useState } from "react";
import ReferModal from "./ReferModal";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-blue-50 text-black shadow-xl flex flex-col md:flex-row justify-center items-center container mx-auto rounded-xl md:h-[600px] mt-5 p-8">
      <div className=" sm:w-1/2 ">
        <h2 className="text-[88px] font-bold mb-4 text-start leading-[88px]">
          Let's Learn <br />& Earn
        </h2>
        <p className="text-[40px] font-normal mb-8 leading-[65px]">
          Get a chance to win
          <br />
          up-to
          <span className="text-[54px] font-bold text-blue-500">
            {" "}
            Rs. 15,000
          </span>
        </p>

        <button
          onClick={handleOpen}
          className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-6 rounded"
        >
          Refer Now
        </button>
        <ReferModal open={open} onClose={handleClose} />
      </div>
      <div className="  sm:w-1/2 z-0">
        <img
          src={require("../assets/herro.png")}
          alt=""
          className=" scale-110"
        />
      </div>
    </div>
  );
};

export default HeroSection;
