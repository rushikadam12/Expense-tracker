import React from "react";
import useNotify from "../hooks/useNotify";
import {
  useQuery,
  
} from '@tanstack/react-query'
import axios from 'axios'
function UserInfo() {

  const User=async()=>{
    try{
      const response=await axios.get('http://localhost:5122/api/User',{
        headers:{
        "x-access-token":localStorage.getItem('token')
        },
      });
      if(response.status===200){
        console.log(resp.data)
        return response.data
        
      }else{
        console.log(resp.data)
        notify(resp.data.error)
        throw new Error(response.data.error);
      }
  
  }catch(error){
    console.log(error)
    throw error
  }
}

  const notify=useNotify()
  const {error,data}=useQuery({
    queryKey:['User'],
    queryFn:User,

})
  
// const avg=()=>{
//   const avgVal=data.budget?Math.floor(data.budget%100):100
//   return avgVal
// }
  

  return (
    <>
      <div className="glass parse w-full h-full z-index-[2] z-0 px-2 py-2 border-2 rounded-lg animate-fade-down">
        <div className="avatar flex justify-center items-center px-2 py-2 ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M_W8YpcOhM2Qw0janaEtYjIX5vQCDkIOXL2GpJ_bZb5cUvZIbcVFUadRXUr5ZhKd_xw&usqp=CAU" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-2 py-5 gap-2 ">
          <div className="w-full flex flex-col items-center justify-center px-2 py-5 gap-2 glass">
          <p className="px-2 py-2 bg-slate-300 text-black rounded-lg font-medium">
            {data.username}
          </p>
          <p className="px-2 py-2 bg-slate-300 text-black rounded-lg font-medium">
            Current Buget:₹{data.budget}
          </p>
          <p className="px-2 py-2 bg-slate-300 text-black rounded-lg font-medium">
            Total spend:₹{data.sum||"no expense"}
          </p>
          </div>
          <div className="flex justify-center item-center w-full h-fit gap-8 px-1 py-5 ">
          <div
            className="radial-progress text-center text-sm text-white"
            style={{
              "--value": `70`,
              "--size": "7.5rem",
              "--thickness": "0.5rem",
              
              "color":'green',
            }}
            role="progressbar"
          >
           <p className="text-white text-center px-2 py-2">current budget {70}%</p>
          </div>
          <div
            className="radial-progress text-center"
            style={{
              "--value": "70",
              "--size": "7.5rem",
              "--thickness": "0.5rem",
              "color":'red',
                           
             
            }}
            role="progressbar"
          >
           <p className="text-white text-center px-2 py-2 ">spend 70%</p> 
          </div>
        </div>
        </div>
        {/* <div className="w-full h-fit px-5 py-5"><AreaChart/></div>
         */}
       
      </div>
    </>
  );
}

export default UserInfo;
