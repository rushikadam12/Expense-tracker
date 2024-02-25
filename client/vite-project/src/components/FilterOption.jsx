import React, { useState } from "react";

const FilterOption = ({ filterType, setfilterType ,handelRefetch,isLoading}) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = async(type) => {
    await setfilterType(type)
    await handelRefetch()
    
    setToggle(false);
  };
  const open = () => setToggle(!toggle);

  return (
    <>
      <div className=" dropdown dropdown-left self-center " >
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 glass sm:btn-sm md:btn-md lg:btn-md  btn-sm"
          onClick={open}
          
        >
          Filter
        </div>
        <ul
          tabIndex={1}
          className={`glass dropdown-content shadow rounded-box w-[8rem] bg-base-100 z-[1]  ${
            toggle ? "block" : "hidden"
          }`} 
         
        >
          <li className="p-1 text-center cursor-pointer" onClick={()=>{toggleHandler("month")}}>
            <a>Month</a>
          </li>
          <li className="p-1 text-center cursor-pointer" onClick={()=>{toggleHandler("date")}}>
            <a >date</a>
          </li>
          <li className="p-1 text-center cursor-pointer" onClick={()=>{toggleHandler("year")}}>
            <a >Year</a>
          </li>
        
        </ul>
      </div>
    </>
  );
};

export default FilterOption;
