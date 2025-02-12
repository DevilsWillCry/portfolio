import React, { useEffect, useRef, useState } from "react";
import { Switch } from "@material-tailwind/react";
import Switchers from "./Switchers";
import Keyboard from "./Keyboard";

function PcFrame() {
  const [isOn, setIsOn] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(false);
  const timeoutRef = useRef(null);
  const handleClick = () => setIsOn(!isOn);

  console.log("Estado:",isOn)

  useEffect(() => {
    // Si la pantalla está apagada, inicia el timeout de 5 segundos
    if (!isOn) {
      // Limpiar timeout previo, en caso de existir
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        console.log("Ya pasaron 5 seg, Pantalla OFF");
        setIsOffScreen(true);
      }, 5000);
    } else {
      // Si la pantalla se enciende, cancelar el timeout y actualizar el estado
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Si la pantalla estaba en estado off, actualizamos a on
      if (isOffScreen) {
        setIsOffScreen(false);
        console.log("Pantalla On");
      }
    }

    // Función de cleanup para cancelar el timeout cuando el efecto se vuelva a ejecutar
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOn, isOffScreen]);


  return (
    <>
      {/* Marco sobresaliente del Frame del PC en TOP*/}
      <div className="before:w-[90%] before:h-[90%] before:fixed before:border-solid before:border-t-[5px]  before:border-b-[5px] before:rounded-t-xl before:border-gray-400 before:top-0 before:z-[60] before:left-[50%] before:translate-x-[-50%] before:pointer-events-none">
        {/* Marco del Frame del PC*/}
        <div className={`w-[90%] h-[90%] fixed border-solid border-[35px]  border-[#222222] rounded-t-xl  z-50 top-0 left-[50%] translate-x-[-50%] pointer-events-none overflow-hidden shadow-[0_0_3px_0_white]  transition-all  duration-1000 ${isOn ? "bg-none animate-tv-flicker" : "bg-black"}`}>
        </div>
        
        {/* Lente de la cámara frontal del PC*/}
        <div className="h-[2%] w-[1%] absolute top-3 left-[50%] translate-x-[-50%]  bg-black z-[101] rounded-full"></div>
      </div>

      {/* Bloque inferior del PC*/}
      <div className="border-solid border-[1px] border-gray-500 flex flex-row items-center justify-end px-5 fixed bottom-3 right-[50%] translate-x-[50%] w-[95%] h-[9%] z-[60] bg-[#222222] rounded-br-2xl rounded-bl-2xl">
        <Switchers  isOn={isOn}  isOff={isOffScreen} handleClick={handleClick} />
        
      </div>
    </>
  );
}

export default PcFrame;
