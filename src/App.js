import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white h-screen min-w-[400px] font-roboto">
      <Sidebar />
      <div className=" mx-10 w-full">
        <Navbar />
        <div className="bg-blue-100 w-fit px-4 py-1 flex flex-col justify-center mx-auto mt-10 rounded-full">
          <h1 className=" text-2xl text-slate-500 hover:text-blue-500 ">
            Welcome To Refer & Earn Portal
          </h1>
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
