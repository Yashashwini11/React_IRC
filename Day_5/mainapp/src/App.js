import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from './Components/Login';
import Signup from "./Components/signup";
import Fund from "./Components/Fund";
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import "./Assets/CSS/Nav.css";
import "./Assets/CSS/Home.css";
import "./Assets/CSS/login.css";
import "./Assets/CSS/Signup.css";
import './Assets/CSS/Fund.css'
import './Assets/CSS/Footer.css';
import './Assets/CSS/Dashboard.css';
import img1 from "./Assets/Images/Renamef.png";
import flood from "./Assets/Images/flood.jpg";
import education from './Assets/Images/education.webp';
import women from './Assets/Images/women.jpg';
import poverty from './Assets/Images/poverty.jpg';
import medical from './Assets/Images/medical.webp';
import nonprofit from './Assets/Images/nprofit.jpg';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <img src={img1} alt="donate" />
      <img src={education} alt="no education"/>
      <img src={flood} alt="no flood"/>
      <img src={women} alt="no women"/>
      <img src={poverty} alt="no poverty"/>
      <img src={medical} alt='no medical'/>
      <img src={nonprofit} alt="no profit"/>
      <Fund />
      <Footer />
    </div>
  );
}

export default App;

