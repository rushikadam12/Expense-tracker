import React, { useState } from "react";
import img from "../assets/images";
import { PiUserCircleFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useNotify from "../hooks/useNotify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/useContext";
import axiosInstance from "../hooks/axiosInstances";

function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [password, setPassword] = useState("");
  const notify = useNotify();
  const Redirect = useNavigate();
  const { setAuthUser, authuser } = useUserContext();

  if (authuser) {
    Redirect("/Home");
  }

  const UserLogin = async () => {
    try {
      setisLoading(true);
      const resp = await axiosInstance.post(
        "/Login",
        //
        {
          email,
          password,
        },
      );
      if (resp.status === 200) {
        // console.log(resp.data.message)

        setEmail("");
        setPassword("");
        setAuthUser(true);
        await Redirect("/Home");
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
      console.log(error);
      notify(
        error.response?.data ? error.response.data.error : "oops!server issues"
      );
    }
  };

  return (
    <>
      <div className="w-full min-h-screen  md:px-12 md:py-5  px-5 py-5 flex flex-col md:flex-row items-center justify-center flex-wrap font-customFont font-medium">
        <div className="md:min-w-[50%] flex  md:flex-row flex-col justify-center items-center  px-5 py-5 gap-[1rem] shadow-2xl rounded-xl animate-fade-left  animate-ease-out glass ">
          <div>
            <img
              src={img[1].url}
              width={500}
              loading="lazy"
              className="self-start"
            />
          </div>
          <div className="md:min-h-[40vh] h-fit px-5 py-5 flex flex-col gap-[0.5rem] shadow-2xl min-w-[35%] ">
            <p className="flex justify-center text-2xl px-2 py-2 break-words font-semibold w-full">
              <PiUserCircleFill size={80} />
            </p>
            <label className="flex px-1 gap-1 md:text-lg">
              <MdEmail size={24} />
              Useremail:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent font-semibold "
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label className="flex px-1 gap-1 md:text-lg">
              <RiLockPasswordFill size={24} />
              Password:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent font-semibold "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <p className="text-end">
              <Link className="text-blue-500 px-1 hover:text-blue-400" to="/resetpassword">
                forgot password?
              </Link>
            </p>

            <button
              className="mt-1 px-2 py-2 bg-[#60C5EE] rounded-lg hover:bg-[#63cef8] md:text-xl text-slate-200 text-center font-semibold"
              onClick={UserLogin}
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="text-center ">
              want to SignUp?
              <Link className="text-blue-500 px-1 hover:text-blue-400" to="/">
                Go to SignUp page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
