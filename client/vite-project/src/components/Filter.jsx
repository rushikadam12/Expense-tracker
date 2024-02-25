import React, { useState } from "react";

export const Filter = ({onInputChange,handleFilter }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        // Call the parent function with the input value
        onInputChange(value);
      };
    const handelType=(e)=>{    
        const value=e.target.value;
        handleFilter(value)
    }
 
  return (
    <>
      <div className=" lg:p-[2rem] md:p-[2rem] p-[1rem]  rounded-xl w-full ">
        <div className="join w-[100%]">
          <div className="w-full">
            <div className="w-full">
              <input
                className="input input-bordered join-item w-[100%]"
                placeholder="Search"
                onChange={handleChange}
              />
            </div>
          </div>
          <select className="select select-bordered join-item md:px-[0.8rem] lg:px-[0.8rem] px-[0.5rem]" onChange={handelType}>
            <option disabled>
              Filter
            </option>
            <option value="payment_method" className="w-fit">pay_type</option>
            <option value="description" className="w-fit">description</option>
            <option value="category" className="w-fit">category</option>
            
          </select>
        
        </div>
      </div>
    </>
  );
};
