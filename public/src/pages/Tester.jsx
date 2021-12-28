import React from "react";
import { useState } from "react";

function Tester() {

  // Bind Input 
  const [websiteURL , setwebsiteURL] =  useState('')
  const [loadingState , setloadingState] = useState(false)

  // Handle Submit
  async function handleSubmit(e){
    e.preventDefault();
    if(!websiteURL==""){
      console.warn("Working")
      setloadingState(!loadingState)
      console.log(websiteURL)

    }else{
      console.log("NO URL Sent!")
      console.log("Please enter URL")
    }
  }


  return (
    <div className="tester-page min-h-screen">
      
      <div className="search-section py-5">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-center">Tester Page</h1>

          <form
            id="form"
            onSubmit={handleSubmit}            
            className="my-4 p-6 shadow-lg flex flex-col  sm:flex-row  justify-center bg-indigo-100 mx-4 py-10"
          >
            <input
              type="url"
              required
              className=" min-w-[80%] shadow-sm border-2 border-gray-300 px-4 py-2"
              onChange={(e) => {
                setwebsiteURL(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-indigo-800 border-2 border-indigo-700 px-4 py-2 text-white font-bold"
            >
              Check Website
            </button>
          </form>
        </div>
      </div>

      <div className="results-section">


      
      <div className={"loading-state " + ( loadingState ? "" : "hidden" ) }>
        <button type="button" class="bg-indigo-500 flex px-4 py-2 space-x-2 text-white mx-auto" disabled>
          <svg class="animate-spin h-5 w-5 mr-3 border-2 border-white" viewBox="0 0 24 24">
          </svg>
          Processing...
        </button>
      </div>
      
      </div>

    </div>
  );
}

export default Tester;
