import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from './Components/Login';
import img1 from "./Assets/Images/Renamef.png";
import "./Assets/CSS/Nav.css";
import "./Assets/CSS/Home.css";
import "./Assets/CSS/login.css";
import "./Assets/CSS/Signup.css";
import Signup from "./Components/signup";
function App() {
    return (
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <img src={img1} alt="donate" />
      </div>
    );
  }

export default App;
