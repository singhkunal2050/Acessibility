import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Tester from "./pages/Tester";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

render(
  <>
    <main className="">
      <Router>
        <div>
          <Navbar />

          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tester" element={<Tester />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </main>
    <Footer />
  </>,
  document.getElementById("root")
);
