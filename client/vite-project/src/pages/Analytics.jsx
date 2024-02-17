import React, { useState } from "react";
import AnalyticsComp from "../components/AnalyticsComp";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../hooks/axiosInstances";
import Piechart from "../components/PieChart";
import DateFormat from "../utility/DateFromat";

const Analytics = () => {
  
  const Fetch = async () => {
    try {
      const resp = await axiosInstance.get("/Expenses/date/desc");
      if (resp.status === 200) {
        console.log(await resp.data);
        return await resp.data;
      }
    } catch (error) {
      throw error;
    }
  };
  const { data, error, isLoading } = useQuery({
    queryFn: Fetch,
      
  });
  if(isLoading){
    return(<>
      <h1 className="text-center transition ease-in-out duration-500 text-2xl">Loading....</h1>
    </>)
  }

  return (
    <>
      <div className="w-full min-h-screen flex justify-center px-2 py-2 gap-5 flex-col items-center">
        {data ? (
          <>
            <div className=" bg-black md:w-[80%] w-full h-fit px-2 py-5 flex-1 rounded-xl font-semibold">
              <AnalyticsComp data={data && data.data}  />
            </div>
            <div className="bg-black  md:w-[80%] w-full h-fit px-2 py-5 flex-1 rounded-xl text-xl font-semibold">
              <Piechart data={data && data.data} />
            </div>
          </>
        ) : (
          <>No data found</>
        )}
      </div>
    </>
  );
};

export default Analytics;
