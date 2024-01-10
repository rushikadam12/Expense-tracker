import React from "react";
import img from "../assets/images";
function Signup() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#A6BBDF] px-12 py-5 flex flex-row items-center justify-center flex-wrap">
        <div className="border-2 w-[40%] min-h-[50vh] bg-slate-500 flex justify-center">
          <img src={img[0].url} width={500} className="self-center" />
        </div>
        <div className="flex flex-col justify-center item-center border-2 w-[40%] min-h-[53vh] border-2 py-5 px-2 gap-1">
          <h2 className="text-xl ">Welcome to myExpense</h2>
          <div className="flex content-center justify-center items-center flex-col w-[50%] gap-[1rem] self-center">
            <label className="self-start font-semibold">User name</label>
            <p className="self-center  w-full">
              
              <input
                type="text"
                className=" px-2 py-2 font-semibold  w-full rounded-sm border-none outline-none"
              />
            </p>
            <label className="self-start font-semibold">User name</label>
            <p className="self-center  w-full">
              <input type="email" className=" px-2 py-2 font-semibold border-2 w-full rounded-sm border-none" />
            </p>
            <label className="self-start font-semibold">User name</label>
            <p className="self-center  w-full">
              <input type="password" className="px-2 py-2 font-semibold border-2 w-full rounded-sm border-none" />
            </p>
            <label className="self-start font-semibold">User name</label>
            <p className="self-center  w-full">
              <input type="number" className="px-2 py-2 font-semibold border-2 w-full rounded-sm border-none " />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
