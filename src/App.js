import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import Login from "./pages/login.js";
import Navbar from "./components/navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./styles/custom.scss";

function App() {
  return (
    // This function is called by index.js
    // This function basically routes the pages for the website
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
