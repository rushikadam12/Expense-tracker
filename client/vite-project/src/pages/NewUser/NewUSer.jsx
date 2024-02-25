import React, { useEffect } from "react";
import img from "../../assets/images";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/useContext";
function NewUser() {
  const Navigate = useNavigate();
  const { authuser } = useUserContext();

  useEffect(() => {
    const checkUser = () => {
      authuser && Navigate("/Home");
    };
    checkUser();
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-base-100" >
        <section className="w-full md:min-h-[100dvh] lg:min-h-[100dvh] flex justify-center items-center gap-4">
          <p className="text-white font-semibold md:text-[5rem] text-[2.5rem] break-words text-center animate-fade-down px-2 py-2">
            Track and Control Your Expenses Effortlessly
          </p>
          <p></p>
        </section>
        <section className="min-w-full h-full flex justify-center items-center m-auto md:flex-row flex-col bg-base-100">
          <div className="md:w-[40%] px-2 py-2  ">
            <p className="md:text-[3.5rem] text-[2rem] text-center  px-2 py-2 font-semibold">
              Save money without thinking about it
            </p>
            <p className="md:text-[1.5rem] text-xl text-center  px-2 py-2">
              PennyWise analyzes your spending and automatically perfect amount
              every day so you don't have to worry about it
            </p>
          </div>
          <div className="min-w-[50%] flex items-center justify-center ">
            <img src={img[1].url} width={433} loading="lazy" />
          </div>
        </section>
        <p className="px-5 py-5 w-full self-cen flex items-center justify-center ">
          <button
            className="btn btn-secondary btn-lg glass hover:glass hover:bg-purple-800 md:active:animate-jump md:active:animate-once md:active:animate-ease-linear md:active:animate-reverse
             text-slate-200"
            onClick={() => {
              Navigate("/signup");
            }}
          >
            SignUp
            <FaLongArrowAltRight />
          </button>
        </p>
      </div>
    </>
  );
}

export default NewUser;
