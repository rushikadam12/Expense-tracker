import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import useToast from "../hooks/useToast";
import axiosInstance from "../hooks/axiosInstances";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

const Deposite = ({ adddeposit, setaddDeposit }) => {
  const [toastSuccess, toastError] = useToast();
  const [addMoney, setaddMoney] = useState(null);
  const queryClient = useQueryClient();
  const Updatedeposit = async () => {
    try {
      const resp = await axiosInstance.patch("/addDeposit", {
        newamount: addMoney,
      });
      if (resp.status === 200) {
        // console.log(await resp.data);
        await setaddDeposit(!adddeposit);
        toastSuccess("amount is added");
        return await resp.data;
      }
    } catch (error) {
      console.log(error);
      toastError(error.response?.data?.msg);
    }
  };
  const { isloading, mutate, data } = useMutation({
    mutationFn: Updatedeposit,
    onSuccess: async () => {
      
      await queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
  });
  const handelClose = () => {
    setaddDeposit(false);
  };
  if (isloading) {
    return (
      <>
        <h1 className="text-2xl">Loading.....</h1>
      </>
    );
  }
  return (
    <>
      <div className="m-auto md:glass md:px-2 md:py-2  px-5 py-5 glass z-[2000]  w-full min-h-[100vh] fixed md:top-1/2 top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-scroll">
        <div className="w-full min-h-screen flex items-center justify-center flex-col h-fit">
          <div className=" md:bg-slate-800 glass w-[100%] md:w-[30%] min-h-[15rem] px-1 py-2 flex  flex-col rounded-xl animate-fade-up animate-once animate-ease-in animate-duration-500">
            <p className="self-end px-1 py-1 rounded-2xl bg-slate-800 absolute top-[5%] right-[5%] ">
              <IoIosClose
                size={20}
                className="hover:text-red-400"
                onClick={() => {
                  handelClose();
                }}
              />
            </p>
            <span className="w-full self-start px-2 py-2 font-semibold text-2xl text-center">
              Add Deposit
            </span>
            <div className="py-2 px-2">
              <p className="px-2 py-2 w-full flex text-center justify-center items-center">
                <input
                  type="number"
                  placeholder="Deposit amount"
                  className="input input-bordered input-success w-full max-w-xs "
                  onChange={(e) => {
                    setaddMoney(e.target.value);
                  }}
                />
              </p>
            </div>

            <p className="w-full px-2 py-5 flex ">
              <button
                className="btn m-auto px-10"
                onClick={() => {
                  mutate();
                }}
              >
                +Add
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposite;
