import React from "react";
import { useUserContext } from "./useContext";
import { Navigate } from "react-router-dom";
// import useNotify from "../hooks/useNotify";
const ProtectedRoutes = ({children}) => {
  const { authuser } = useUserContext();
//   const notify=useNotify()
      if(!authuser){
           return <Navigate to="/login" replace/>        
      }else{
        return children;
      }

};

export default ProtectedRoutes;
