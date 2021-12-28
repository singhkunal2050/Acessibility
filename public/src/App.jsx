import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import About from "./pages/About"
import Tester from "./pages/Tester"
import Home from "./pages/Home"


function App() {
  return (
    <main className="App">

      <Navbar />

        <section className="main-content min-h-screen">

        </section>

      <Footer/>
    </main>
  );
}

export default App;
