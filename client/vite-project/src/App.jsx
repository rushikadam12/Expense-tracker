import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/login';
import Navbar from './Navbar/navbar';
import NewUser from './pages/NewUser/NewUSer';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signupNewUser" element={<NewUser/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
