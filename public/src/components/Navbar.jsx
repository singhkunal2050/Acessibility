import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [sidebarState, setsidebarState] = useState(false);

  function toogleSidebar() {
    setsidebarState(!sidebarState);
    console.log(sidebarState);
  }

  return (
    <nav className="bg-white text-indigo-800 py-4 px-4 border-b-2 border-indigo-900 top-0 z-10 sticky">
      <div className="container mx-auto flex justify-between">
        <div className="text-2xl font-extrabold z-20 ">
          <Link to="/" onClick={() => setsidebarState(false)} className="flex justify-center items-center z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <h3>Acessibility</h3>
          </Link>
        </div>
        <div className="menu hidden md:flex">
            <Link className="py-2 px-4   hover:bg-gray-100" to="/">Home</Link>
            <Link className="py-2 px-4   hover:bg-gray-100" to="/about">About</Link>
            <Link className="py-2 px-4 bg-indigo-600 text-white font-bold hover:bg-indigo-100 hover:text-indigo-600 transition-colors ease-in-out duration-300" to="/tester">Tester</Link>
        </div>

        <div className="hamburger-menu flex justify-center items-center md:hidden">
          <button
            className="hamburger-menu-btn bg-white px-2 py-1 z-20"
            onClick={toogleSidebar}
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={
            "mobile-menu absolute inset-0 min-h-screen bg-white flex justify-center items-center flex-col md:hidden transition-all ease-in-out duration-500 z-10 " +
            (sidebarState ? "translate-x-0 " : "translate-x-[-100vw]")
          }
        >
            <Link className="py-2 px-4   hover:bg-gray-100" to="/" onClick={toogleSidebar}>Home</Link>
            <Link className="py-2 px-4   hover:bg-gray-100" to="/about"  onClick={toogleSidebar}>About</Link>
            <Link className="py-2 px-4 bg-indigo-600 text-white font-bold  hover:bg-gray-100" to="/tester" onClick={toogleSidebar}>Tester</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
