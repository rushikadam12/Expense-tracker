import React, { useState } from "react";
import img from "../assets/images";
import { PiUserCircleFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import useToast from "../hooks/useToast";

const ResetPassword = () => {
  const [email, setEmail] = useState(null);

  const [toastSuccess, toastError] = useToast();
  const [cooldown, setCooldown] = useState(false);

  const Popmessage = () => {
    alert("Wait for few minutes for before resending mail");
  };

  const ResetPassword = async () => {
    try {
      const resp = await axios.post(
        "https://pennywise-1ssn.onrender.com/api/emailsend",
        {
          email,
        },
        {
          withCredentials: false,
        }
      );
      if (resp.status === 200) {
        toastSuccess("Pls check your email inbox");
        setCooldown(true);
        setTimeout(() => {
          setCooldown(false);
        }, 2 * 60000);
      } else {
        console.log(resp.data);
        toastError("Pls check your email");
      }
    } catch (error) {
      console.log(error);
      toastError(error.response?.data?.msg || error.message);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen  md:px-12 md:py-5  px-5 py-5 flex flex-col md:flex-row items-center justify-center flex-wrap font-customFont font-medium">
        <div className="md:min-w-[30%] flex  md:flex-row flex-col justify-center items-center  px-5 py-5 gap-[1rem] shadow-2xl rounded-xl animate-fade-left  animate-ease-out glass ">
          <div>
            <img
              src={img[3].url}
              width={300}
              loading="lazy"
              className="self-start"
            />
          </div>
          <div className="md:min-h-[50vh] h-fit px-5 py-5 flex flex-col gap-[0.5rem] shadow-2xl min-w-[48%] ">
            <p className="flex justify-center text-2xl px-2 py-2 break-words font-semibold w-full">
              <PiUserCircleFill size={80} />
            </p>
            <label className="flex px-1 gap-1 md:text-lg">
              <MdEmail size={24} />
              Useremail:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent font-semibold text-slate-200"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            <button
              className="mt-1 px-2 py-2 bg-[#60C5EE] rounded-lg hover:bg-[#63cef8] md:text-xl text-slate-200 text-center font-semibold"
              onClick={cooldown ? Popmessage : ResetPassword}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
