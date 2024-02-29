import React, { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineDelete } from "react-icons/md";
import axiosInstance from "../hooks/axiosInstances";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import useToast from "../hooks/useToast";
const Expense = ({
  _id,
  user_id,
  date,
  description,
  category,
  amount,
  payment_method,
}) => {
  const queryClient = useQueryClient();
  const [Loading, setLoading] = useState(true);
  const [UserDate, setUserDate] = useState(null);
  const [toastSuccess,toastError]=useToast()
  const setDate = async () => {
    const newDate = new Date(date);
    const NewDate = await newDate.toISOString().slice(0, 10);

    setUserDate(NewDate);
  };

  const DeleteExp = async (_id) => {
    try {
      const resp = await axiosInstance.delete("/Delete", {
        data: { _id },
      });
      if (resp.status == 200) {
        toastSuccess("Expense is deleted");
        console.log("expense is deleted");
      } else {
        throw new Error(resp.data.error);
      }
    } catch (error) {
      console.log(error);
      // notify(error)
    }
  };

  const { mutate} = useMutation({
    mutationFn: () => DeleteExp(_id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["UserData"] });
      await queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
    onError: () => {
      console.log("!oops server issue");
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setDate();
  }, []);

  return (
    <>
      <div className=" glass flex min-w-full h-fit px-1 py-1  rounded-lg text-slate-200 text-size-[1rem] flex-col md:flex-row animate-fade-down">
        {Loading ? (
          <div className=" outline-none shadow rounded-md p-1 max-w-sm min-w-full mx-auto ">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className=" w-full px-2 py-2 flex gap-4 flex-col md:flex-row item-center animate-fade animate-ease-out justify-between">
              <p className="md:flex-[0] md:w-fit w-full px-2 py-2 font-medium flex flex-row md:flex-col md:gap-1 gap-4 text-[1rem] text-center justify-center items-center ">
                <BsCashCoin size={30} />
                <label className="text-center px-2 py-1">
                  {payment_method}
                </label>
              </p>

              <div className=" w-full flex flex-col px-2 py-2 flex-1">
                <div className="flex gap-4 flex-wrap">
                  <p className="w-fit flex gap-2 bg-slate-400 md:px-2 md:py-1  px-2 py-2 rounded-lg text-slate-800  font-medium whitespace-nowrap">
                    <BsCalendar2DateFill size={20} color={"black"} />
                    {UserDate}
                  </p>
                  <p className="w-fit flex flex-col ">
                    <label className="flex gap-2 px-1 py-1 rounded-lg bg-slate-400 text-slate-800 md:font-medium">
                      <PiNotePencilBold size={20} />
                      {category}
                    </label>
                  </p>
                </div>
                <div className=" w-full py-1 text-[1rem]  ">{description}</div>
              </div>
              <div className="flex  flex-col text-end items-end gap-2 ">
                <p className="md:px-2 md:py-2">₹{amount}</p>
                <button
                  className="self-end flex justify-end items-end item-end  md:self-end md:ml-0 md:mr-0 md:my-auto md:mx-0 md:mb-0 md:tooltip lg:tooltip outline-none"
                  data-tip="Delete"
                >
                  <MdOutlineDelete
                    size={30}
                    className="m-auto md:self-center ml-auto hover:text-red-500 transition duration-300"
                    onClick={() => {
                      mutate();
                    }}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Expense;
