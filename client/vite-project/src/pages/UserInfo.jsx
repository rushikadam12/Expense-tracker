import React, { useState } from "react";
import useNotify from "../hooks/useNotify";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../hooks/axiosInstances";
import AddExpense from "../components/AddExpense";
import { GiCash } from "react-icons/gi";
import Deposite from "../components/Deposite";
import { FaRegEdit } from "react-icons/fa";
import RestUserBudget from "../components/RestUserBudget";

function UserInfo({ totalSpend, expenseCount }) {
  const notify = useNotify();
  const Redirect = useNavigate();

  const [addExpense, setaddExpense] = useState(false);
  const [adddeposit, setaddDeposit] = useState(false);
  const [UserBudget, setuserBudget] = useState(false);
  const User = async () => {
    try {
      const response = await axiosInstance.get("User");
      if (response.status === 200) {
        // console.log(response.data);
        return await response.data;
      }
    } catch (error) {
      throw error;
    }
  };

  const TAmount = (data) => {
    if (!data || isNaN(data.budget) || isNaN(totalSpend) || totalSpend === 0) {
      return 0;
    }
    return data && data.budget + totalSpend;
  };
  const calculate = (data, totalSpend) => {
    if (!data || isNaN(data.budget) || isNaN(totalSpend) || totalSpend === 0) {
      return 0;
    }
    const TotalAmount = data && data.budget + totalSpend;
    const avg = (totalSpend / TotalAmount) * 100;

    return avg.toFixed(2);
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["Users"],
    queryFn: User,
  });

  if (isError) {
    notify(error.response.data.error);
    Redirect("/login");
    console.log(error);
  }
  if (isLoading) {
    return (
      <>
        <h1 className="text-2xl text-center self-center">
          <span className="loading loading-ring loading-lg"></span>
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="glass parse w-full h-full z-index-[2] z-0 px-2 py-2 border-2 rounded-lg animate-fade-down">
        <div className="avatar flex justify-center items-center px-2 py-2 ">
          <div className="avatar placeholder ring ring-primary rounded-full">
            <div className="bg-neutral text-neutral-content rounded-full w-24">
              <span className="text-3xl text-wrap text-center truncate">
                {data?.username}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-2 py-5 gap-2 ">
          <div className="p-2 text-slate-800 text-xl bg-slate-100 rounded-xl self-center flex gap-1 font-semibold truncate">
            Allowances
            <GiCash className="self-center" /> ₹{(data&&data.budget)}
            <button
              className="lg:hover:text-red-500 md:hover:text-red-500 "
              onClick={() => {
                setuserBudget(!UserBudget);
              }}
            >
              <FaRegEdit />
            </button>
          </div>
          <div className="w-full flex md:flex-row  items-center justify-center px-2 py-5 gap-2 ">
            <div className="stat place-items-center">
              <div className="stat-value">{calculate(data, totalSpend)}%</div>
              <div className="stat-title">amount spend</div>
              <div className="stat-desc text-secondary">current average</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value countdown">
                <span style={{ "--value": `${expenseCount}` }}></span>
              </div>
              <div className="stat-title">total expense</div>
              <div className="stat-desc text-secondary">current count</div>
            </div>
          </div>
          <div className="w-fit flex flex-col items-start justify-start">
            <progress
              className={"progress progress-accent w-56"}
              value={Math.round(calculate(data, totalSpend))}
              max="100"
            ></progress>
            <label className="stat-actions">Expense bar</label>
          </div>
          <div className=" flex flex-col justify-center item-center h-fit gap-10 px-1 py-5 text-center   ">
            <div className="stats bg-primary text-primary-content md:flex block ">
              <div
                className="stat md:w-full w-fit place-items-center block overflow-hidden"
                style={{ placeSelf: "baseline" }}
              >
                <div className="stat-title  ">Amount spend</div>
                <div className="stat-value whitespace-nowrap overflow-hidden truncate overflow-ellipsis text-autoadapt">
                  ₹{totalSpend ? totalSpend : "no expense"}
                </div>
              </div>

              <div className="stat  overflow-hidden ">
                <div className="stat-title">Current balance</div>
                <div className="stat-value  px-1 text-autoadapt">
                  ₹{data?.budget ? data?.budget : 0}
                </div>
                <div className="stat-actions gap-5 self-center">
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      setaddDeposit(!adddeposit);
                    }}
                  >
                    deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="btn btn-outline"
              onClick={() => {
                setaddExpense(!addExpense);
              }}
            >
              + Add expense
            </button>
          </div>
        </div>
      </div>
      {addExpense && (
        <AddExpense addExpFun={setaddExpense} addExpVal={addExpense} />
      )}
      {adddeposit && (
        <Deposite adddeposit={adddeposit} setaddDeposit={setaddDeposit} />
      )}
      {UserBudget && (
        <RestUserBudget UserBudget={UserBudget} setuserBudget={setuserBudget} />
      )}
    </>
  );
}

export default UserInfo;
