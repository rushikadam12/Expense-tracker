import React, { useState } from "react";
import Expense from "../components/Expense";
import UserInfo from "./UserInfo";
import Footer from "../pages/Footer";
import axiosInstance from "../hooks/axiosInstances";
import { useQuery } from "@tanstack/react-query";
import { Filter } from "../components/Filter";
import FilterOption from "../components/FilterOption";

function Home() {
 
  const [searchitem, setsearchItem] = useState("");
  const [searchtype, setsearchType] = useState("description");
  const [filterType,setfilterType]=useState(null)

  const Fetch = async () => {
    try {
      const resp = await axiosInstance.get(`/Expenses/${filterType?filterType:'date'}/desc`);
      if (resp.status === 200) {
        // console.log(await resp.data);
        return await resp.data;
      }
    } catch (error) {
      throw error;
    }
  };

  const handleInputChange = (value) => {
    setsearchItem(value);
  };

  const handleFilter = (value) => {
    setsearchType(value);
  };

  

  const handelRefetch=async()=>{
    await refetch()
  }

  const { data, error, isLoading ,refetch} = useQuery({
    queryFn: Fetch,
    queryKey: ["UserData"],
  });

  if (error) {
    console.log(error);
    // notify(error.response.data.error)
  }
  if (isLoading) {
    return (
      <>
        <div className="w-full min-h-[100dvh] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    )
  }

  return (
    <>
      <main className="md:w-full w-full  min-h-[100dvh] flex md:flex-row flex-col">
        <div className="px-2 py-1 md:min-w-[40%] md:min-h-[100dvh] min-h-fit ">
          <UserInfo
            totalSpend={data?.totalExpense}
            expenseCount={data?.data.length}
          />
        </div>

        <div className="min-w-[60%]  md:max-h-[100dvh] h-fit px-1 py-1 md:overflow-y-scroll hide-scrollbar">
          <div className={data.data ? " rounded-xl  animate-fade transition duration-500 ease-in flex md:p-0 lg:p-0 pb-[2rem]" : "hidden"}>
            <Filter
              onInputChange={handleInputChange}
              handleFilter={handleFilter}
            />
              <FilterOption filterType={filterType} setfilterType={setfilterType}   handelRefetch={handelRefetch} isLoading={isLoading}/>
          </div>
          
          <div className="  min-w-[100%]   min-h-[100%] flex  flex-col px-1 py-1 gap-[1rem]">
            {data && data.data.length > 0 ? (
              data.data
                .filter((expense) => {
                  if (searchitem) {
                    return expense[searchtype]
                      .toLowerCase()
                      .includes(searchitem.toLowerCase());
                  } else {
                    return true;
                  }
                })
                .map((expense,index) => (
                  <Expense
                    key={index}
                    _id={expense._id}
                    user_id={expense.user_id}
                    date={expense.date}
                    description={expense.description}
                    category={expense.category}
                    amount={expense.amount}
                    payment_method={expense.payment_method}
                  />
                ))
            ) : (
              <>
                <div className="No data found w-full md:min-h-[100dvh] md:flex ">
                  <p className="m-auto">No data found</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
