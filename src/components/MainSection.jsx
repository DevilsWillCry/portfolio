import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import mainImage from "../assets/main-image.png";

const textColor = "text-myColor";
const altTextColor = "text-[#FFD700]";

function MainSection() {

  return (
    <div className="flex flex-row justify-center items-center text-center w-auto h-auto mt-10 px-14 gap-x-5 drop-shadow-2xl">
      <div className="sm:text-[5vw] max-sm:text-[6.5vw] w-full max-sm:h-[20vh] max-sm:text-center animate-slide-in-blurred-top stext-center">
        <h1 className={`${textColor} font-bold block text-shadow`}>Soy Miguel Angel</h1>
        <span className={`${altTextColor} font-bold ml-5 text-shadow `}>
          <ReactTyped
            strings={[
              "Desarrollo Web",
              "Frontend ReactJS",
              "Aplicaciones Escalables",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </span>
      </div>
    </div>
  );
}

export default MainSection;
