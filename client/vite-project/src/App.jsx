import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Navbar from "./Navbar/navbar";
import NewUser from "./pages/NewUser/NewUSer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/Home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          >
          </Route>
          <Route
              path="Home/analytics"
              element={
                <ProtectedRoutes>
                  <Analytics />   
              </ProtectedRoutes>
                            
              }
            />

          <Route path="/" element={<NewUser />} exact />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
