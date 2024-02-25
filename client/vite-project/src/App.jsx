import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
import Login from "./pages/login";
import Navbar from "./Navbar/navbar";
import NewUser from "./pages/NewUser/NewUSer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Analytics from "./pages/Analytics";
import Dashbord from "./pages/Dashbord";
import Loader from "./components/Loader";
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
                <Suspense
                  fallback={
                    <>
                      <Loader />
                    </>
                  }
                >
                  <Home />
                </Suspense>
              </ProtectedRoutes>
            }
          />

          <Route
            path="/Home/analytics"
            element={
              <ProtectedRoutes>
                <Analytics />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashbord />
              </ProtectedRoutes>
            }
          />

          <Route path="/" element={<NewUser />} exact />
          <Route
            path="/signup"
            element={
              <Suspense
                fallback={
                  <>
                    <h1>Loading....</h1>
                  </>
                }
              >
                <Signup />
              </Suspense>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
