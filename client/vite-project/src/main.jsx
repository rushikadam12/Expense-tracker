import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/useContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  
    <QueryClientProvider client={queryClient}>
      <UserProvider>
         <App />
      
      <ToastContainer />
      </UserProvider>
    </QueryClientProvider>
   
 
);
