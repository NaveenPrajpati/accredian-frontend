import React from "react";

export default function Navbar() {
  return (
    <div className="container mx-auto flex gap-x-4 items-center p-1">
      <div>
        <p className="text-blue-500 font-semibold text-lg ">accredian</p>
        <p className=" text-[7px] text-center leading-[2px]">
          creadentials that matter
        </p>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search here"
        className="border border-slate-200 rounded-lg w-full px-4 py-2"
      />

      <button className=" bg-slate-200 hover:bg-slate-300 p-2 text-black rounded-md text-nowrap text-sm">
        Search
      </button>
      <button className=" bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-md text-nowrap text-sm">
        Try for free
      </button>
    </div>
  );
}
