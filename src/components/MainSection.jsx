import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import mainImage from "../assets/main-image.png";
import CodeTyping from "./CodeTyping";

const textColor = "text-[#7f7f7f]";
const altTextColor = "text-[#FFFF]";

function MainSection() {
  return (
    <div className="flex flex-row lg:absolute justify-center items-center text-center w-auto h-auto lg:w-[55vw] lg:h-[60vh] px-14 gap-x-5 drop-shadow-2xl mt-10 lg:top-1/2 lg:left-[25%] lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="sm:text-[3vw] max-sm:text-[5.5vw] lg:w-full w-[65vw] max-sm:h-[20vh] max-sm:text-center animate-slide-in-blurred-top text-center items-center ">
        <span className="text-gray-300 text-shadow font-bold">¡Hola! <br /> Soy</span>
          <span className={`${altTextColor} font-bold ml-5 text-shadow block w-auto`}>
            <ReactTyped
              strings={[
                "Miguel Angel",
                "Desarrollador Web",
                "Innovador",
                "Apasionado",
                "Creativo"
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
