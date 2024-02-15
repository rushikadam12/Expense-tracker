import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
import axiosInstances from "../hooks/axiosInstances";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/useContext";

function Navbar() {
  const [Dropmenu, setDropmenu] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);
  const { setAuthUser, authuser } = useUserContext();
  const Redirect = useNavigate();
  const LogOut = async () => {
    try {
      const resp = await axiosInstances.get("/logout");
      if (resp.status === 200) {
        setDropmenu(false);
        Redirect("/login");
        await setAuthUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="prose md:w-full w-[100%] md:py-2 md:m-auto flex font-customFont md:x-2 px-1 py-4 border-b-[1px]">
        <div
          className="drawer z-10 drawer-sm"
          onBlur={async () => {
            await toggle;
          }}
        >
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={toggle}
          />

          <div className="drawer-content">
            {/* Page content here */}

            <label htmlFor="my-drawer" for="my-drawer" className="">
              <div className="flex  w-fit gap-2 ">
                <GrMenu size={30} className="btn-secondary" color={"white"} />
                <Link
                  className="w-fit h-fit m-auto transition duration-1000 self-center"
                  to={authuser ? "/Home" : "/"}
                >
                  <p className="w-full px-1 py-1  md:text-xl text-[1rem] text-nowrap whitespace-nowrap">
                    𝓟𝓮𝓷𝓷𝔂𝓦𝓲𝓼𝓮✍
                  </p>
                </Link>
              </div>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <Link to="/Home/analytics" onClick={toggle}>
                  <LuLogIn color={"white"} className="text-xl " />
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    LogOut(), toggle();
                  }}
                >
                  <LuLogIn color={"white"} className="text-xl " />
                  logout
                </Link>
              </li>
              <li>
                <Link to="/Home" onClick={toggle}>
                  <LuLogIn color={"white"} className="text-xl " />
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            "w-full flex justify-end items-end md:gap-[1rem] gap-[0.5rem] md:text-xl text-sm px-2"
          }
        >
          <Link
            className={
              authuser
                ? "px-1 py-1 self-center hover:border-b-2 transition duration-500 ease-in-out"
                : "hidden"
            }
            to="/Home"
          >
            Home
          </Link>
          <button className={!authuser ? "self-center" : "hidden"}>
            <Link
              to="/login "
              className="glass rounded-xl self-center btn btn-outline btn-secondary sm:btn-sm md:btn-sm lg:btn-sm"
            >
              Login
            </Link>
          </button>
          {/* <input type="checkbox" value="light" className="toggle theme-controller self-center sm:"/> */}
          <button className={!authuser ? "self-center" : "hidden"}>
            <Link
              to="/signup "
              className=" rounded-xl self-center btn btn-primary  sm:btn-sm md:btn-sm lg:btn-sm"
            >
              SignUp
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
/*
<nav
        className={`glass z-10 absolute md:px-0 md:py-0 px-2 py-2 flex flex-start md:min-w-[30%] min-w-[50%] min-h-[190dvh] flex-col gap-[0.5rem] md:min-h-full  ease-in duration-100 transform transition-transform  ${
          Dropmenu
            ? "translate-x-0 duration-500 ease-in-out"
            : "-translate-x-full duration-500 ease-in-out"
        }`}
      >
        
      </nav>

<ul className="flex flex-col gap-[1rem] text-2xl z-1 ">
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

          <li className="w-full flex justify-center item-center items-center px-0 py-0  hover:bg-slate-500 transition-all">
            <CiSettings size={30} onClick={()=>{setDropmenu(!Dropmenu)}} className=" "/>

            <Link className="px-2" >Settings</Link>
          </li>
          <li className="w-full flex justify-center items-center  gap-1 hover:bg-slate-500 transition-all" onClick={()=>{setDropmenu(!Dropmenu)}}>
            <p>
              <FcAbout size={30} />
            </p>
            <Link className="px-2" >About</Link>
          </li>

          <li className="w-full flex justify-center items-center  gap-1 hover:bg-slate-500 transition-all" onClick={()=>{setDropmenu(!Dropmenu)}}>
            <p>
              <FcAbout size={30} />
            </p>
            <Link className="px-2" to="/Home/analytics">
              Analytics
            </Link>
          </li>
          <li
            className="w-full flex justify-center items-center gap-1 hover:bg-slate-500 transition-all text-left"
            onClick={LogOut}
          >
            <LuLogIn size={30} />

            <Link className="px-2">LogOut</Link>
          </li>
          <li className="w-full flex justify-center items-center  gap-1 hover:bg-slate-500 transition-all" onClick={()=>{setDropmenu(!Dropmenu)}}>
            <MdHome size={30} />

            <Link className="px-2" to="/Home">Home</Link>
          </li>
        </ul>


*/
