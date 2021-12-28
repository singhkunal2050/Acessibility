import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Tester from "./pages/Tester";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

render(<main>
  
    <Router>
      <div>
        <Navbar />
  
        <hr />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/tester" element={<Tester/>} />
        </Routes>
      </div>
    </Router>
</main>,
  document.getElementById("root")
);
