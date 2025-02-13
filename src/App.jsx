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

function App() {
  const scrollDivRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const divEl = scrollDivRef.current;
    if (!divEl) return;

    const handleScroll = () => {
      setScrollTop(divEl.scrollTop);
    };

    divEl.addEventListener('scroll', handleScroll);
    return () => {
      divEl.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-blue-gray-800 black w-screen h-screen transition-all">
      <PcFrame />
      <main ref={scrollDivRef} className="flex flex-col relative top-0 left-[50%] translate-x-[-50%] w-[86.5vw] h-[87vh] items-center justify-start font-sans overflow-y-auto scroll-smooth [scrollbar-width:none]" webc:root="override">
        <NavBar scrollData={scrollTop} />
        <ParticlesComponent />
        
        <section
          id="home"
          className="section flex flex-col items-center justify-center transition-all min-h-[87vh] w-full pointer-events-none"
        >
          <MainSection />
        </section>
        
        <section
          id="projects"
          className="section relative min-h-[87vh] w-[100vw] flex items-center justify-center"
        >
          <Carousel3D />
        </section>

        {/* 
        <section
          id="technologies"
          className="section relative lg:h-[1000px] max-sm:h-[86.5vw] sm:h-[440px]  w-screen flex flex-col items-center justify-center"
        >
          <TecnologiesSection />
        </section>
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
