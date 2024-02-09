import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstances from "../hooks/axiosInstances";
import { useQuery } from "@tanstack/react-query";
import { MutatingDots } from "react-loader-spinner";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authuser, setAuthUser] = useState(false);
  

  const CheckLogin = async () => {
    try {
      const resp = await axiosInstances.get("/Auth");
      console.log("Yes i am running")
      if (await resp.data.auth) {
        setAuthUser(await resp.data.auth);
        
        return await resp.data
      }
    } catch (error) {
      console.log(error);
      // throw error;
    }
  };

  const { error, isLoading } = useQuery({
    queryKey: ["ValidUser"],
    queryFn: CheckLogin,
  });

  if (isLoading) {
    return (
      <>
        <div className="w-full min-h-[100dvh] flex justify-center items-center">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#655E7C"
            secondaryColor="#E779C1"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }
  if(error){
    console.log(error)

  }

  const contextValue = {
    authuser,
    setAuthUser,
  };
  

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
