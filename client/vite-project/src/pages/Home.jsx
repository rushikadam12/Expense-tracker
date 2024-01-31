import React from "react";
import Expense from "./Expense";
import UserInfo from "./UserInfo";
import Footer from "../pages/Footer";
function Home() {
  const exp = "asdadasd";
  

  return (
    <>
      <main className="md:w-full w-full  min-h-[100dvh] flex md:flex-row flex-col">
        <div className="px-2 py-1 md:min-w-[40%] md:min-h-[100dvh] min-h-fit ">
          <UserInfo />
        </div>
        <div className="min-w-[60%]  md:max-h-[100dvh] h-fit px-1 py-1 md:overflow-x-hidden ">
          <div className="  min-w-[100%]   min-h-[100%] flex  flex-col px-1 py-1 gap-[1rem] ">
            <Expense />
            <Expense />
            <Expense />
            <Expense />



            <Expense />
            <Expense />
            <Expense />
            <Expense />
            <Expense />
            <Expense />
            <Expense />

            <Expense />
            <Expense />
          </div>
        </div>
      </main>
      <footer><Footer/></footer>
    </>
  );
}

export default Home;
