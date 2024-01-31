import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
function Navbar() {
  const [Dropmenu, setDropmenu] = useState(false);
  return (
    <>
      <div className="prose md:w-full w-[100%] md:py-2 md:m-auto flex font-customFont md:x-2 px-1 py-4 ">
        <button
          className="md:px-1 md:py-1  rounded-xl px-1 py-1 outline-none"
          onClick={() => {
            setDropmenu(!Dropmenu);
          }}
        >
          {Dropmenu ? (
            <IoMdClose
              size={30}
              color={"white"}
              className="btn-secondary btn-slate-200 swap swap-rotate"
            />
          ) : (
            <GrMenu
              size={30}
              className="btn-secondary swap swap-rotate"
              color={"white"}
            />
          )}
        </button>
        <Link className="w-fit h-fit m-auto"><p className="w-full px-1 py-1 self-center md:text-xl text-[1rem] text-nowrap">
          𝓟𝓮𝓷𝓷𝔂𝓦𝓲𝓼𝓮✍
        </p></Link>
        <div className="w-full flex justify-end items-end md:gap-[1rem] gap-[0.1rem] md:text-xl text-sm px-2">
          <Link className="px-1 py-1 self-center " to="/Home">
            Home
          </Link>
          <Link className="px-1 py-1 self-center ">About</Link>
          {/* <input type="checkbox" value="synthwave" className="toggle theme-controller self-center sm:"/> */}
          <button>
            <Link
              to="/signup "
              className=" rounded-xl self-center btn btn-primary  sm:btn-sm md:btn-sm lg:btn-md"
            >
              SignUp
            </Link>
          </button>
        </div>
      </div>
      <nav
        className={` glass z-10 absolute md:px-0 md:py-0 px-2 py-2 flex flex-start md:min-w-[30%] min-w-[50%] min-h-[190dvh] flex-col gap-[0.5rem] md:min-h-[100vh] ease-in duration-100 overflow-hidden transform transition-transform  ${
          Dropmenu ? "translate-x-0 duration-500 ease-in-out" : "-translate-x-full duration-500 ease-in-out"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-[1rem] text-2xl z-1">
          <li className="w-full flex justify-center items-center  px-2 py-2 flex-col gap-2">
            <div className="avatar flex justify-center items-center px-2 py-2">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M_W8YpcOhM2Qw0janaEtYjIX5vQCDkIOXL2GpJ_bZb5cUvZIbcVFUadRXUr5ZhKd_xw&usqp=CAU" />
              </div>
            </div>
            <p className="text-center px-2 py-2 bg-slate-300 text-black rounded-lg font-medium">
              Ichigo kurosaki
            </p>
          </li>

          <li className="w-full flex justify-center items-center  px-0 py-0 gap-1 hover:bg-slate-500 transition-all">
            <p>
              <CiSettings size={30} />
            </p>
            <Link className="px-2">Settings</Link>
          </li>
          <li className="w-full flex justify-center items-center  gap-1 hover:bg-slate-500 transition-all">
            <p>
              <FcAbout size={30} />
            </p>
            <Link className="px-2">About</Link>
          </li>
          <li className="w-full flex justify-center items-center gap-1 hover:bg-slate-500 transition-all text-left">
            <p>
              <LuLogIn size={30} />
            </p>
            <Link className="px-2">LogIn</Link>
          </li>
          <li className="w-full flex justify-center items-center  gap-1 hover:bg-slate-500 transition-all">
            <p>
              <MdHome size={30} />
            </p>
            <Link className="px-2">Home</Link>
          </li>

          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
