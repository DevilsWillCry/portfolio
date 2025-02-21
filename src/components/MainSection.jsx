import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

import githubIcon from "../assets/infinite-scroll-images/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import cvIcon from "../assets/file-cv-icon.svg";
import TenorGifEmbed from "./TenorGifEmbed";

const textColor = "text-[#7f7f7f]";
const altTextColor = "text-[#FFFF]";

function MainSection() {
  const [showGif, setShowGif] = useState(false);

  function displayGif() {
    // Display Tenor Gif Embed component here
    setShowGif(true);
  }

  return (
    <div className="flex flex-row lg:absolute justify-center items-center text-center w-auto h-auto lg:w-[55vw] lg:h-[60vh] px-14 gap-x-5 drop-shadow-2xl mt-10 lg:top-[40%] lg:left-[28%] lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="sm:text-[4vw] max-sm:text-[7.5vw] lg:w-full w-[65vw] max-sm:h-[20vh] max-sm:text-center animate-slide-in-blurred-top text-center items-center max-sm:mb-10">
        <span
          onClick={displayGif}
          className="text-gray-300 text-shadow font-bold"
        >
          ¡Hola! <br /> Soy
        </span>
        <div className="flex absolute -top-44 left-1/2 -translate-x-1/2 w-[86.5vw] h-[75vh] z-[1000] pointer-events-none justify-center items-center">
          {showGif && (
            <TenorGifEmbed id="4835781" className="animate-spin justify-center items-center" loop />
          )}
        </div>

        <span
          className={`${altTextColor} font-bold ml-5 text-shadow block w-auto`}
        >
          <ReactTyped
            strings={[
              "Miguel Angel",
              "Desarrollador Web",
              "Innovador",
              "Apasionado",
              "Creativo",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </span>

        <div className="grid grid-cols-2 absolute left-1/2 -translate-x-1/2 -bottom-36 w-52 h-32 items-center place-items-center">
          <div className="flex text-gray-300 text-shadow font-bold bg-white  w-12 h-12 items-center justify-center rounded hover:scale-125 hover:bg-gray-500 hover:shadow-2xl cursor-pointer transition-all duration-300 max-sm:w-8 max-sm:h-8">
            <a
              href="https://github.com/DevilsWillCry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={githubIcon}
                alt="GitHub Icon"
                className="object-fill p-2"
              />
            </a>
          </div>

          <div className="flex text-gray-300 text-shadow font-bold bg-white  w-12 h-12 items-center justify-center rounded hover:scale-125 hover:bg-gray-500 hover:shadow-2xl cursor-pointer transition-all duration-300 max-sm:w-8 max-sm:h-8">
            <a
              href="https://www.linkedin.com/in/miguel-angel-me%C3%B1aca-coral-037b06213/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={linkedinIcon}
                alt="Linkedin Link Icon"
                className="object-fill p-1"
              />
            </a>
          </div>

          <div className="col-span-full flex text-gray-300 text-shadow font-bold bg-white w-[75%] h-12 items-center justify-center rounded hover:scale-125 hover:bg-gray-500 hover:shadow-2xl cursor-pointer transition-all duration-300 max-sm:w-[65%] max-sm:h-8 ">
            <a
              href="https://github.com/miguelangelgarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center gap-2"
            >
              <img
                src={cvIcon}
                alt="Curriculum Link Icon"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
