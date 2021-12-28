import React from 'react'
import { useState } from 'react';

function Navbar() {
    const [sidebarState, setsidebarState] = useState(false);
  
    function toogleSidebar() {
      setsidebarState(!sidebarState);
      console.log(sidebarState);
    }
  
    return (
      <nav className="bg-indigo-900 text-white py-4 px-4 ">
        <div className="container mx-auto flex justify-between">
          <div className="text-2xl font-extrabold z-10 flex justify-center items-center">
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
          </div>
          <div className="menu hidden md:flex">
            <a className="py-2 px-4 shadow-lg hover:bg-indigo-800" href="">
              Home
            </a>
            <a className="py-2 px-4 shadow-lg  hover:bg-indigo-800" href="">
              About
            </a>
            <a className="py-2 px-4 shadow-lg  hover:bg-indigo-800" href="">
              Test Accessibility
            </a>
          </div>
  
          <div className="hamburger-menu flex justify-center items-center md:hidden">
            <button
              className="hamburger-menu-btn bg-indigo-600 px-2 py-1 z-10"
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
              "mobile-menu absolute inset-0 bg-indigo-800 flex justify-center items-center flex-col md:hidden transition-all ease-in-out duration-500 " +
              (sidebarState ? "translate-x-0 " : "translate-x-[-100vw]")
            }
          >
            <a className="py-2 px-4 shadow-lg hover:bg-indigo-800" href="">
              Home
            </a>
            <a className="py-2 px-4 shadow-lg  hover:bg-indigo-800" href="">
              About
            </a>
            <a className="py-2 px-4 shadow-lg  hover:bg-indigo-800" href="">
              Test Accessibility
            </a>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
