import React, { useState } from "react";
import img from "../assets/images";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { Link, Navigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState(null);
  const [isloading, setisLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [budget, setBudget] = useState(null);
  const Redirect = useNavigate();

  const notify = (message) =>
    toast(`${message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const emptyTheState = () => {
    setEmail("");
    setPassword("");
    setBudget("");
    setUsername("");
  };
  // username, email, password, budget
  const NewUser = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const resp = await axios.post(
        "https://pennywise-1ssn.onrender.com/api/Register",
        
        // 
        
        {
          username: username,
          email: email,
          password: password,
          budget: budget,
        }
      );
      if (resp) {
        console.log(resp.data);
        notify(resp.data.message);

        emptyTheState();
        setisLoading(false);
        Redirect("/login");
      } else {
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
      notify(
        error.response.data.error
          ? error.response.data.error
          : "oops!server issues"
      );
    }
  };

  return (
    <>
      <form
        className="  md:w-full w-[100%] min-h-screen  md:px-12 md:py-5 px-5 py-5 flex flex-col md:flex-row items-center justify-center flex-wrap"
        onSubmit={NewUser}
      >
        <div className="glass md:min-w-[50%] flex justify-center md:flex-row flex-col items-center  px-5 py-5 gap-[1rem] shadow-2xl rounded-xl animate-fade-up animate-ease-out">
          <img
            src={img[0].url}
            width={500}
            loading="lazy"
            className="self-start"
          />

          <div className="h-fit md:px-4 md:py-5 px-2 py-2 flex md:flex-col flex-col gap-[0.5rem] shadow-2xl w-full ">
            <p className="text-2xl px-2 py-2 break-words font-semibold text-center">
              Welcome to myExpense{" "}
            </p>
            <label className="flex px-1 gap-1 md:text-lg">
              <FaUser size={24} />
              Username:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent font-semibold "
              type="text"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label className="flex gap-1 px-1 md:text-lg">
              <FaLock size={23} />
              Email:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent required"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="flex gap-1 px-1 md:text-lg">
              <MdEmail size={25} />
              Password:
            </label>
            <input
              className="px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent "
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label className="flex gap-1 px-1 md:text-lg">
              <GiMoneyStack size={25} />
              Budget:
            </label>
            <input
              className="px-1 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500 bg-transparent "
              required
              type="number"
              onChange={(e) => {
                setBudget(e.target.value);
              }}
            />
            <button
              className="text-slate-800 mt-1 px-2 py-2 bg-[#60C5EE] rounded-lg hover:bg-[#7edaff] md:text-xl text-center font-semibold"
              type="submit"
            >
              {isloading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "SignUp"
              )}
            </button>
            <p>
              already SignUp?
              <Link className="text-blue-500 px-1" to="/login">
                Go to Login page
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
