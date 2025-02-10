import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import mainImage from "../assets/main-image.png";

const textColor = "text-white";
const altTextColor = "text-myColor";

function MainSection() {

  return (
    <div className="flex flex-row justify-center items-center text-center w-auto h-auto bg-[#070707] mt-10 px-14 gap-x-5">
      <div className="sm:text-[5vw] max-sm:text-[6.5vw] w-full max-sm:h-[20vh] max-sm:text-center animate-slide-in-blurred-top stext-center">
        <h1 className={`${textColor} font-bold block`}>Soy Miguel Angel</h1>
        <span className={`${altTextColor} font-bold ml-5`}>
          <ReactTyped
            strings={[
              "Desarrollo Web",
              "Frontend con ReactJS",
              "Aplicaciones Escalables",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </span>
      </div>
      {/* 
      <div className="flex max-sm:hidden items-center justify-center  h-auto rounded-3xl bg-[#070707] border-2 transition-all animate-slide-in-blurred-top">
        <img
          className="w-[100%] h-[100%] rounded-3xl object-contain drop-shadow-[0_35px_35px_rgba(249,246,247,0.2)] transition-all"
          src={mainImage}
          alt="assets/main-image.png"
        />
      </div>
      */}
    </div>
  );
}

export default MainSection;
