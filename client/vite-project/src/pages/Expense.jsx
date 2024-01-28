import React, { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineDelete } from "react-icons/md";
function Expense() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className=" glass flex min-w-full h-fit px-1 py-1  rounded-lg text-slate-200 text-size-[1rem] flex-col md:flex-row animate-fade-down">
        {Loading ? (
          <>
            <div class=" outline-none shadow rounded-md p-1 max-w-sm min-w-full mx-auto ">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className=" w-full px-2 py-2 flex gap-4 flex-col md:flex-row item-center animate-fade animate-ease-out">
            <p className="md:w-fit w-full px-2 py-2 font-medium flex flex-row md:flex-col md:gap-1 gap-4 text-[1.5rem] text-center justify-center items-center">
              <BsCashCoin size={30} />
              cash
            </p>

            <div className=" flex flex-col px-2 py-2 ">
              <div className="flex gap-4">
                <p className="w-fit flex gap-2 bg-slate-400 md:px-2 md:py-1  px-2 py-1 rounded-lg text-slate-800  font-medium whitespace-nowrap">
                  <BsCalendar2DateFill size={20} color={"black"} />
                  Jan 7{" "}
                </p>
                <p className="w-fit flex flex-col ">
                  <p className="flex gap-2 px-1 py-1 rounded-lg bg-slate-400 text-slate-800 md:font-medium">
                    <PiNotePencilBold size={20} />
                    category
                  </p>
                </p>
              </div>
              <div className=" w-full py-1 text-[1rem]  ">
                "dark", "cupcake", "bumblebee", "emerald", "corporate",
                "synthwave", "retro", "cyberpunk", "valentine", " "wireframe",
                "black", "luxury", "dracula", "cmyk", "autumn", "business",
                "acid", "lemonade", "night", "coffee", "winter", "dim", "nord",
                "sunset"
              </div>
            </div>
            <div className="flex   flex-col text-end items-end gap-2 ">
              ₹200
              <button className="self-end flex justify-end items-end item-end  md:self-end md:ml-0 md:mr-0 md:my-auto md:mx-0 md:mb-0">
                <MdOutlineDelete
                  size={30}
                  className="m-auto md:self-center ml-auto hover:text-red-500 transition duration-300"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Expense;
