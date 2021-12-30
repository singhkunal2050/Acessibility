import React from "react";
import hero from "../assets/img/hero.svg";
import BlurBlob from "./BlurBlob";
import CTAButton from './CTAButton'

function Hero() {
  return (
    <section className="hero ">
      <div className="container relative mx-auto flex flex-col md:flex-row justify-center items-center py-10 px-4 md:py-20 md:px-10 ">
        <div className="hero-text flex-2 lg:max-w-lg md:max-w-sm  " >
          <h1 className="text-4xl font-extrabold mb-3 ">Ace Website Accessibility with <span className="text-indigo-800 underline decoration-indigo-800">
          Ace-ssibility</span></h1>
          <p className="text-xl mb-2 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            corrupti officia temporibus enim a maxime quod fugit rem nisi hic?
          </p>
          <CTAButton to={"tester"} name={"Check Now"} />
        </div>
        <div className="hero-illustration flex-4">
          <img src={hero} className="w-[60vw] md:w-[25vw] max-w-lg" alt="Acesssibility" />
        </div>
        <BlurBlob/>
      </div>
    </section>
  );
}

export default Hero;
