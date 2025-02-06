import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import {Component1}  from './Page1';
import {Component2} from './Page2';
import {Component3} from './Page3';
import PageNFound from "./PageNFnd";
import './nav.css';


const MainPage = () => {
  
  return (
    <div>
      <h1>Main Page</h1>
      <Router>

        <nav>
          <NavLink to="/" style={{ margin: "10px" }}>
            Page-1
          </NavLink>
          <NavLink to="/Page2" style={{ margin: "10px" }}>
            Page-2
          </NavLink>
          <NavLink to="/Page3" style={{ margin: "10px" }}>
            Page-3
          </NavLink>
          <NavLink to="/Box">Dashboard</NavLink>
        </nav>


        <Routes>
          {/* / -> this represent home in path attribute */}
          <Route path="/" exact={true} element={<Component1 />} />
          <Route path="/Page2" element={<Component2 />} />
          <Route path="/Page3" element={<Component3 />} />
          {/* <Route path="*" exact={true} element={<PageNFound/>}/> */}
        </Routes>
      </Router>
    </div>
  );
};

export default MainPage;


