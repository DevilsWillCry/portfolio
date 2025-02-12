import React, { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoImage from "../assets/logo-image.jpg";
import {
  HomeIcon,
  AcademicCapIcon,
  UserCircleIcon,
  TrophyIcon,
  CommandLineIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const navigation = [
  {
    name: "Inicio",
    href: "#home",
    current: true,
    image: <HomeIcon className="text-myColor size-5" />,
  },
  {
    name: "Sobre mí",
    href: "#about",
    image: <UserCircleIcon className="text-myColor size-5" />,
  },
  {
    name: "Tecnologías",
    href: "#technologies",
    image: <CommandLineIcon className="text-myColor size-5" />,
  },
  {
    name: "Proyectos",
    href: "#projects",
    image: <TrophyIcon className="text-myColor size-5" />,
  },
  {
    name: "Contacto",
    href: "#contact",
    image: <PhoneIcon className="text-myColor size-5" />,
  },
];

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentNavigation, setNavigation] = useState(navigation);

  const handleNavBar = () => {
    console.log("Opening navigation");
    setIsNavOpen(true);
  };

  const handleCloseNavBar = () => {
    console.log("Closing navigation");
    setIsNavOpen(false);
  };

  // Función para manejar el desplazamiento suave y actualizar el estado
  const handleScrollToSection = (e) => {
    const sectionName = e.target.textContent;
    // Actualizar el estado de la navegación para resaltar la sección activa
    setNavigation(
      currentNavigation.map((navItem) =>
        navItem.name === sectionName
          ? { ...navItem, current: true }
          : { ...navItem, current: false }
      )
    );
    setIsNavOpen(false);
  };

  return (
    <div className="flex flex-row  sticky top-8 left-[50%]  w-full h-auto max-sm:items-end max-sm:p-3  sm:p-3 sm:items-center max-sm:justify-between bg-[#070707] contrast-100 z-[100]">
      {/* Text NavBar in PC resolution*/}
      <div className="bg-gray-300 relative rounded-full h-full w-auto flex flex-row items-center gap-x-1">
        <img
          className="h-[36px] w-[100px] object-cover rounded-t-full rounded-b-full opacity-80 z-0"
          src={logoImage}
          alt="logo-image.png"
        />
        <h1 className="text-myColor text-xl ml-2 max-sm:hidden max-text-screen:text-[1vw] px-3 mr-5 text-nowrap">
          Devfolio
        </h1>
      </div>
      {/* Icon to open the navbar (hamburger icon) */}
      <Bars3Icon
        onClick={handleNavBar}
        className={`w-8 max-sm:flex hidden text-white cursor-pointer`}
      />

      {/* Navbar that slides in */}
      <div
        className={`flex justify-between  max-sm:absolute top-0 left-0 w-screen max-sm:p-3 ${
          isNavOpen ? " max-sm:translate-y-0" : " max-sm:-translate-y-full"
        }  transform transition-all sm:justify-end 
        `}
      >
        <div className="flex max-sm:flex-col gap-y-5 max-sm:mt-5 text-start mr-2">
          {currentNavigation.map((item) => (
            <div key={item.name} className="flex items-center justify-start">
              <span className="hidden max-sm:inline-block">{item.image}</span>
              <a
                onClick={(e) => handleScrollToSection(e)}
                rel="noopener noreferrer"
                href={item.href}
                className={`text-gray-500 text-center mx-2 transition-all duration-300 hover:text-white sm:text-[1.3vw] lg:text-[1.2vw] max-sm:text-[3vw] max-md:text-[2.5vw] p-1 ${
                  item.current ? "font-bold text-white bg-gray-500 rounded-tl-full rounded-br-full px-4 py-1" : ""
                }`}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Icon to close the navbar (X icon) */}
        <div
          onClick={handleCloseNavBar}
          className="hidden max-sm:flex bg-red-500 h-max mt-3 hover:bg-red-800"
        >
          <XMarkIcon className="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
