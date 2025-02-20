import React, { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import MyBanner from "./components/MyBanner";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import TecnologiesSection from "./components/TecnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ExpStudSection from "./components/ExpStudSection";
import ContactSection from "./components/ContactSection";
import PcFrame from "./components/PcFrame";
import ProgressClock from "./components/ProgressClock";
import ParticlesComponent from "./components/ParticleComponent";
import Carousel3D from "./components/Carousel3D";
import ShowTechnologies from "./components/ShowTechnologies";
import CodeTyping from "./components/CodeTyping";


function App() {
  const scrollDivRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);


  useEffect(() => {
    const divEl = scrollDivRef.current;
    if (!divEl) return;
  
    // Manejo del scroll
    const handleScroll = () => {
      setScrollTop(divEl.scrollTop);
    };
    divEl.addEventListener('scroll', handleScroll);
  
    // Creación del IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
          /*
          Se bugeo el scroll del navbar, mirar se hay manera de mejorarlo.
          else {
            entry.target.classList.remove("visible");
          }
          */ 
        });
      },
      { root: divEl, threshold: 0.5 } // Detectar cuando el 50% del elemento sea visible
    );
  
    // Observar todos los elementos con la clase .appear_content
    const appearElements = document.querySelectorAll(".appear_content");
    appearElements.forEach((el) => observer.observe(el));
  
    return () => {
      divEl.removeEventListener('scroll', handleScroll);
      appearElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  

  return (
    <div className="bg-blue-gray-800 black w-screen h-screen transition-all font-hyperlegible">
      <PcFrame />
      <main ref={scrollDivRef} className="flex flex-col relative top-0 left-[50%] translate-x-[-50%] w-[86.5vw] h-[87vh] items-center justify-start overflow-y-auto scroll-smooth [scrollbar-width:none]  " webc:root="override">
        <NavBar scrollData={scrollTop} />
        <ParticlesComponent />
        
        <section
          id="home"
          className="appear_content section flex flex-col items-center justify-center transition-all min-h-[80vh] w-[86.5vw]"
        >
          <CodeTyping />
          <MainSection />
        </section>
        
        <section
          id="technologies"
          className="appear_content section relative  min-h-[55vh] w-[86.5vw]  flex flex-col items-center justify-center"
        >
          <ShowTechnologies />
        </section>

        <section
          id="projects"
          className="appear_content section relative min-h-[75vh] w-[86.5vw] flex items-center justify-center"
        >
          <Carousel3D />
        </section>

        {/* 
        
        <section
          id="about"
          className="section relative  flex justify-center items-center min-h-[87vh] w-[70vw] transition-all duration-500 z-10 "
        >
          <AboutSection />
        </section>
      <section
        id="contact"
        className="section relative w-screen max-sm:h-[100vh] lg:h-[100vh] sm:h-auto flex items-center justify-center bg-[#070707]"
      >
        <ContactSection/> 
      </section>
      */}
      </main>
    </div>
  );
}

export default App;
