import React from "react";
import DashboardCard from "../components/DashboardCard";
import Linechart from "../components/Linechart";
import dlist from "../components/Dashboard/dashboard";
import Piechart from "../components/PieChart";
import CustomPiechart from "../components/CustomPiechart";
const data=[
{_id: '65d0f98b0c23a73b1ea92959', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-17T18:23:07.629Z', amount: 105, category: 'electronics',},
{_id: '65cf03d3b3076bdf10c28bc4', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-16T06:42:27.129Z', amount: 1000, category: 'xyz'},
{_id: '65ce6db0d29c33d1d75d28fc', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-15T20:01:52.672Z', amount: 2000, category: 'cloths'},

{_id: '65ce3e6198cb6ff7b60c2aaa', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-15T16:40:01.120Z', amount: 1000, category: 'asd', },
{_id: '65c668455dfb39fc09254abb', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-09T18:00:37.192Z', amount: 5000, category: 'shopping', },
{_id: '65c665095dfb39fc09254a9b', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-09T17:46:49.051Z', amount: 15025, category: 'car parts',},

{_id: '65c664c85dfb39fc09254a97', user_id: '65b9d9df2ee6b6e1fcee353c', date: '2024-02-09T17:45:44.669Z', amount: 15025, category: 'car parts', },
]

const Dashbord = () => {
  return (
    <>
      <div className="w-full min-h-screen px-2 py-2 flex-col md:flex-row lg:flex-row ">
        <label className="text-5xl">
          <p className="text-start md:px-2 md:py-5 px-2 py-5 lg:px-2 lg:py-5">Dashboard</p>
        </label>
        <div className="w-full h-fit flex justify-between flex-col md:flex-row lg:flex-row gap-4 items-center md:flex-wrap lg:gap-2 md:gap-2">
          {dlist.map((item, index) => {
            return (
              <DashboardCard
                key={index}
                Color={item.IconColor}
                Icon={item.Icons}
                iconsColor={item.Color}
              />
            );
          })}
        </div>
        <div className="w-full h-full md:py-10 py-5 flex flex-col md:flex-row lg:flex-row gap-2">
          <div className="md:max-w-[50%] md:min-w-[50%] w-full self-center">
            <Piechart data={data}/>
          </div>
          <div className="md:p-2 p-1 md:max-w-[50%] lg:max-w-[50%] min-w-[50%]">
            <Linechart/>
          </div>
          
        </div>
        <div className="w-full h-full">
          <CustomPiechart/>
        </div>
      </div>
    </>
  );
};

export default Dashbord;

// Icons:HiCurrencyRupee,
// IconColor:'bg-green-300',
// Color:'green'
