import React from "react";
import DashboardCard from "../components/DashboardCard";
import Linechart from "../components/Linechart";
import dlist from "../components/Dashboard/dashboard";
import Piechart from "../components/PieChart";
import CustomPiechart from "../components/CustomPiechart";
import MixedBarchart from "../components/MixedBarchart";
import ExpenseTable from "../components/ExpenseTable";
import axiosInstance from "../hooks/axiosInstances";
import { useQuery } from "@tanstack/react-query";
const Dashbord = () => {
  const Fetch = async () => {
    try {
      const resp = await axiosInstance.get("/Expenses/date/desc");
      if (resp.status === 200) {
        // console.log(await resp.data);
        return await resp.data;
      }
    } catch (error) {
      console.log(error)
      throw error;
    }
  };
  const { data, error, isLoading } = useQuery({
    queryFn: Fetch,
    queryKey: ["UserData"],
  });

  if (isLoading) return <h1 className="text-center text-2xl">Loading......</h1>;

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="w-full min-h-screen px-2 py-2 flex-col md:flex-row lg:flex-row ">
        <label className="text-5xl">
          <p className="text-start md:px-2 md:py-5 px-2 py-5 lg:px-2 lg:py-5">
            Dashboard
          </p>
        </label>
        <div className="w-full h-fit flex justify-between flex-col md:flex-row lg:flex-row gap-4 items-center md:flex-wrap lg:gap-2 md:gap-2 px-5 md:px-1 lg:px-1">
          <DashboardCard
            key={dlist[0]}
            Color={dlist[0].IconColor}
            Icon={dlist[0].Icons}
            iconsColor={dlist[0].Color}
            info={"₹" + data.totalExpense}
            text={"total spend"}
          />

          <DashboardCard
            Color={dlist[1].IconColor}
            Icon={dlist[1].Icons}
            iconsColor={dlist[1].Color}
            // Userbuget
            info={"₹" + data?.Userbudget.budget}
            text={"current amount"}
          />

          <DashboardCard
            Color={dlist[2].IconColor}
            Icon={dlist[2].Icons}
            iconsColor={dlist[2].Color}
            info={data?.data?.length}
            text={"expense count"}
          />

          <DashboardCard
            Color={dlist[3].IconColor}
            Icon={dlist[3].Icons}
            iconsColor={dlist[3].Color}
            info={"₹" + data?.data[0]?.amount}
            text={"recent spend"}
          />
        </div>
        <div className="w-full h-full md:py-10 py-5 flex flex-col md:flex-row lg:flex-row gap-2">
          <div className="md:max-w-[50%] md:min-w-[50%] w-full self-center  bg-slate-800 rounded-xl py-2">
            <Piechart data={data.data} />
          </div>
          <div className="md:p-2 p-1 md:max-w-[50%] lg:max-w-[50%] min-w-[50%] glass rounded-xl">
            <Linechart data={data.data} />
          </div>
        </div>
        <label className="w-full h-fit flex flex-col md:flex-row lg:flex-row px-1 py-1   gap-1 items-center">
          <div className="w-full  rounded-xl">
            <CustomPiechart data={data.data} />
          </div>
          <div className="w-full  rounded-xl">
            <MixedBarchart data={data.data} />
          </div>
        </label>
        <div className="w-full px-2 py-2 h-fit">
          <ExpenseTable data={data.data} />
        </div>
      </div>
    </>
  );
};

export default Dashbord;
