import React, { useState } from "react";
import Expense from "../components/Expense";
import UserInfo from "./UserInfo";
import Footer from "../pages/Footer";
import axiosInstance from "../hooks/axiosInstances";
import { useQuery } from "@tanstack/react-query";
import { Filter } from "../components/Filter";
function Home() {
  const [searchitem, setsearchItem] = useState("");
  const [searchtype, setsearchType] = useState("description");

  const handleInputChange = (value) => {
    setsearchItem(value);
  };

  const handleFilter = (value) => {
    setsearchType(value);
  };

  

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
          <h1 className="text-slate-200 text-2xl">Almost done....</h1>
        </div>
      </>
    );
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
          <div className={data.data ? "p-1 rounded-xl z-[999] animate-fade transition duration-500 ease-in" : "hidden"}>
            <Filter
              onInputChange={handleInputChange}
              handleFilter={handleFilter}
            />
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
                .map((expense) => (
                  <Expense
                    key={expense.id}
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
