import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import axiosInstance from "../hooks/axiosInstances";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import useNotify from "../hooks/useNotify";

const AddExpense = (props) => {
  const queryClient = useQueryClient();
  const [handelOption, sethandelOption] = useState("cash");
  const notify = useNotify();

  const [AddExp, setAddExp] = useState({
    amount: 0,
    category: "",
    description: "",
    payment_method: handelOption,
  });
  const AddUserExpense = async () => {
    // amount,category,description,payment_method
    try {
      const resp = await axiosInstance.post("/AddExpense", {
        amount: AddExp.amount,
        category: AddExp.category,
        description: AddExp.description,
        payment_method: AddExp.payment_method,
      });
      if (resp.status === 200) {
        console.log(await resp.data);
        props.addExpFun(!props.addExpVal);
        notify("data added");
      }
    } catch (error) {
      console.log(error);
      notify(error.response?.data?.error);
    }
  };
  const handelSelect = (e) => {
    const value = e.target.value;
    sethandelOption(value);
    setAddExp({ ...AddExp, payment_method: value });
  };

  const { mutate} = useMutation({
    mutationFn: AddUserExpense,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["UserData"] });
      await queryClient.invalidateQueries({ queryKey: ["Users"] });
      //always use queryclient=useQueryClient and pass the key by specifying queryKey:["catch"]
      console.log("Mutation is successful");
    },
    onError: () => {
      console.log("!oops server issue");
      notify("!Oops server issue");
    },

   
  });

  return (
    <>
      <div className="m-auto md:glass md:px-2 md:py-2  px-5 py-5 glass z-[999]  w-full min-h-[100vh] fixed md:top-1/2 top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-scroll">
        <div className="w-full min-h-screen flex items-center justify-center flex-col h-fit">
          <div className=" md:bg-slate-800 glass w-[100%] md:w-[30%] min-h-[25rem] px-1 py-2 flex  flex-col rounded-xl animate-fade-up animate-once animate-ease-in animate-duration-500">
            <p className="self-end px-1 py-1 rounded-2xl bg-slate-800 absolute top-[5%] right-[5%] ">
              <IoIosClose
                size={20}
                className="hover:text-red-400"
                onClick={() => {
                  props.addExpFun(false);
                }}
              />
            </p>
            <span className="w-full self-start px-2 py-2 font-semibold text-2xl text-center">
              Add Expense
            </span>
            <div className="py-2 px-2">
              <p className="px-2 py-2 w-full flex text-center justify-center items-center">
                <input
                  type="text"
                  placeholder="Expense amount"
                  className="input input-bordered input-success w-full max-w-xs"
                  onChange={(e) => {
                    setAddExp({ ...AddExp, amount: e.target.value });
                  }}
                />
              </p>
              <p className="px-2 py-2 w-full flex text-center justify-center items-center">
                <input
                  type="text"
                  placeholder="Expense category ex.`electronics`"
                  className="input input-bordered input-warning w-full max-w-xs"
                  onChange={(e) => {
                    setAddExp({ ...AddExp, category: e.target.value });
                  }}
                />
              </p>
            </div>
            <div className="w-full flex  md:px-10 md:py-2 px-4 py-1 justify-center item-center">
              <textarea
                className="w-[100%] textarea textarea-secondary self-start"
                placeholder="Description"
                onChange={(e) => {
                  setAddExp({ ...AddExp, description: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="w-full px-10 py-1 flex-justify-start items-start">
              <p className="px-2 py-2 font-medium">Select payment method:</p>
              <select
                onChange={handelSelect}
                className="px-2 py-2  rounded-lg outline-none"
                value={handelOption}
              >
                <option value="cash" className="px-1 py-1 ">
                  Cash
                </option>
                <option value="card" className="px-2 py-2 ">
                  Card
                </option>
                <option value="Online" className="px-2 py-2 ">
                  Online UPI
                </option>
              </select>
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
export default AddExpense;
