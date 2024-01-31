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
import Footer from './pages/Footer';

function App() {

  return (
    <>
    <Router>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<NewUser/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
   
    </Router>
    
     
    </>
  )
}

export default App
