import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, Switch } from "react-router-dom";
import {Component1}  from './Page1';
import {Component2} from './Page2';
import {Component3} from './Page3';
import PageNFound from "./PageNFnd";


const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Router>

        <nav>
          <Link to="/" style={{ margin: "10px" }}>
            Page-1
          </Link>
          <Link to="/Page2" style={{ margin: "10px" }}>
            Page-2
          </Link>
          <Link to="/Page3" style={{ margin: "10px" }}>
            Page-3
          </Link>
          <Link to="/Box">Dashboard</Link>
        </nav>


        <Routes>
          <Route path="/" exact={true} element={<Component1 />} />
          <Route path="/Page2" element={<Component2 />} />
          <Route path="/Page3" element={<Component3 />} />
          <Route path="*" exact={true} element={<PageNFound/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default MainPage;


