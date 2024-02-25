import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import axiosInstances from "../hooks/axiosInstances";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/useContext";
import Themetoggle from "../components/Themetoggle";
import list from "./list";

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);

  const { setAuthUser, authuser } = useUserContext();
  const Redirect = useNavigate();
  const LogOut = async () => {
    try {
      const resp = await axiosInstances.get("/logout");
      if (resp.status === 200) {
        toggle();
        Redirect("/login");
        await setAuthUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="prose md:w-full w-[100%] md:py-2 md:m-auto flex font-customFont md:x-2 px-1 py-4 border-b-[1px] items-center">
        {authuser && (
          <div
            className="drawer z-10 drawer-sm w-fit px-2"
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

              <label htmlFor="my-drawer">
                <div className="flex  w-fit gap-2 ">
                  <GrMenu
                    size={30}
                    className="btn-secondary cursor-pointer"
                    color={"white"}
                  />
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
                {list.map((item, index) => {
                  return (
                    <li className="text-xl" key={index}>
                      <Link to={`${item.path}`} onClick={toggle}>
                        <item.icons color={"white"} className="text-2xl" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="text-xl">
                  <Link
                    onClick={() => {
                      LogOut(), toggle();
                    }}
                  >
                    <LuLogIn color={"white"} className="text-2xl " />
                    logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex">
          <Link
            className="w-fit h-fit m-auto transition duration-1000 self-center"
            to={authuser ? "/Home" : "/"}
          >
            <span className="px-1 md:text-xl lg:text-xl text-lg text-nowrap whitespace-nowrap">
              קэииýωเรэ💰
            </span>
          </Link>
        </div>
        <div
          className={
            "w-full flex justify-end items-end md:gap-[1rem] gap-[0.5rem] md:text-xl text-sm px-2"
          }
        >
          <Link
            className={authuser ? "px-1 py-1 self-center" : "hidden"}
            to="/Home"
          >
            Home
          </Link>

          {authuser && <Themetoggle />}

          {!authuser && (
            <>
              <button className={"self-center"}>
                <Link
                  to="/login "
                  className="glass rounded-xl self-center btn btn-outline btn-secondary sm:btn-sm md:btn-sm lg:btn-sm"
                >
                  Login
                </Link>
              </button>

              <button className={"self-center"}>
                <Link
                  to="/signup "
                  className=" rounded-xl self-center btn btn-primary  sm:btn-sm md:btn-sm lg:btn-sm"
                >
                  SignUp
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
