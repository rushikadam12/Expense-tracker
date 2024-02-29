import React, { useState } from "react";
import img from "../assets/images";
import { PiUserCircleFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdKey } from "react-icons/md";
import useToast from "../hooks/useToast";
const ForgetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState(null);
  const Nav = useNavigate();
  const [toastSuccess, toastError] = useToast();
  const handleSubmit = async (e) => {
    // console.log(token)
    e.preventDefault();
    try {
      const resp = await axios.post("https://pennywise-1ssn.onrender.com/api/resetpassword", {
        token: token,
        password: password,
      });

      if (resp.status === 200) {
        console.log(resp.data);
        toastSuccess("Password has been reset");
        Nav("/login");
      } else {
        console.log(resp.data);
        throw new Error(resp.data?.msg);
      }
    } catch (error) {
      console.log(error);
      toastError(error.response?.data?.msg || error.message);
    }
  };

  return (
    <>
      <form
        className="w-full min-h-screen  md:px-12 md:py-5  px-5 py-5 flex flex-col md:flex-row items-center justify-center flex-wrap font-customFont font-medium"
        onSubmit={handleSubmit}
      >
        <div className="md:min-w-[30%] flex  md:flex-row flex-col justify-center items-center  px-5 py-5 gap-[1rem] shadow-2xl rounded-xl animate-fade-left  animate-ease-out glass ">
          <div>
            <img
              src={img[3].url}
              width={300}
              loading="lazy"
              className="self-start"
            />
          </div>
          <div className="md:min-h-[55vh] h-fit px-5 py-5 flex flex-col gap-[0.5rem] shadow-2xl min-w-[48%] ">
            <p className="flex justify-center text-2xl px-2 py-2 break-words font-semibold w-full">
              <PiUserCircleFill size={80} />
            </p>
            <label className="flex px-1 gap-1 md:text-lg">
              <MdKey size={24} />
              NewPassword:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent font-semibold text-slate-200"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <button
              className="mt-1 px-2 py-2 bg-[#60C5EE] rounded-lg hover:bg-[#63cef8] md:text-xl text-slate-200 text-center font-semibold"
              type="submit"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
