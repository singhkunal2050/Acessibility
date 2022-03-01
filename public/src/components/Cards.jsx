import React from "react";
import { AiFillFire , AiFillBulb  , AiFillCloud , AiFillTrophy, AiFillDashboard, AiFillBell } from 'react-icons/ai'
import { FcBookmark , FcLineChart , FcOrgUnit} from 'react-icons/fc'
import CTAButton from "./CTAButton";

function Cards() {
  return (
    <div className="container mx-auto px-4 md:px-10">
      <h2 className="text-3xl text-center font-extrabold ">
        Get Your Website Check in No Time!!
      </h2>
      <p className="text-center mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto
        aliquam numquam dicta vitae quisquam, maxime delectus aliquid inventore
        eius vero hic dignissimos quos aut libero repudiandae facere odit
        itaque.
      </p>

      <div className="cards py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="max-w-full m-4 p-4 text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className="flex justify-center p-4">
          <FcOrgUnit size={'60'}/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <CTAButton name={"Know More"} to={"/"}/>
          </div>
        </div>
        <div class="max-w-full m-4 p-4 text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className="flex justify-center p-4">
            <FcLineChart size={'60'}/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <CTAButton name={"Know More"} to={"/"}/>

          </div>
        </div>
        <div class="max-w-full m-4 p-4 text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#"  className="flex justify-center p-4">
          <FcBookmark size={'60'}/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <CTAButton name={"Know More"} to={"/"}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cards;
