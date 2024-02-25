import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./useContext";
import axiosInstance from "../hooks/axiosInstances";
const UserCard = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { setAuthUser } = useUserContext();
  const Redirect = useNavigate();
  const toggle = () => setDrawerOpen(!isDrawerOpen);
  const LogOut = async () => {
    try {
      const resp = await axiosInstance.get("/logout");

      if (resp.status === 200) {
        setDrawerOpen(!isDrawerOpen);
        Redirect("/login");
        await setAuthUser(false);
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const handelBlur=()=>{
  //   setDrawerOpen(false)
  // }
  return (
    <>
      <details className="dropdown dropdown-end" open={isDrawerOpen}>
        <summary className="btn p-0" >
          {/* <Avatar isDrawerOpen={isDrawerOpen}  setDrawerOpen={setDrawerOpen}  /> */}
          <div className="avatar">
            <div className="w-12 rounded-[50%]">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                onClick={toggle}
               
              />
            </div>
          </div>
        </summary>
        <ul className="glass p-2 menu dropdown-content z-[1] bg-base-100 rounded-box w-[8rem]" >
          <li className="gap-1" onClick={LogOut}>
            <Link>
              <CiLogout size={20} />
              Logout
            </Link>
          </li>
          <li>
            <Link to="/Home">
              <MdDashboardCustomize size={20} />
              About
            </Link>
          </li>
        </ul>
      </details>
    </>
  );
};

export default UserCard;

