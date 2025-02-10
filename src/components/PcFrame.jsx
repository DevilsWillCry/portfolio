import React from "react";

function PcFrame() {
  return (
    <>
      <div className="after:content-['']  after:block after:absolute after:top-3 after:left-[50%] after:translate-x-[-50%] after:h-[2%] after:w-[10%] after:bg-white after:z-[100] after:shadow-xl after:rounded-[10%]">
      
      <div className="before:w-[90%] before:h-[90%] before:fixed before:border-solid before:border-t-[5px] before:rounded-tl-xl before:rounded-tr-xl before:border-black before:top-0 before:z-[60] before:left-[50%] before:translate-x-[-50%] before:pointer-events-none">
        {/* Marco del Frame del PC*/}
        <div className="w-[90%] h-[90%] fixed border-solid border-[35px] border-gray-300 rounded-t-xl  z-50 top-0 left-[50%] translate-x-[-50%] pointer-events-none overflow-hidden "></div>
        {/* Lente de la cámara frontal del PC*/}
        <div className="h-[2%] w-[1%] absolute top-3 left-[50%] translate-x-[-50%]  bg-gray-400 z-[101] rounded-full"></div>  

      </div>
      </div>
      <div className="after:content-[''] after:block after:absolute after:bottom-14 after:left-[36%] after:h-[1%] after:w-[28%] after:bg-black after:z-[100] after:shadow-xl after:rounded-[50%]">
        <div className="before:w-[97%] before:h-[8%] before:fixed before:bottom-7 before:left-[50%] before:translate-x-[-50%]  before:border-solid before:border-black before:border-[5px] before:rounded-br-xl before:rounded-bl-xl before:z-[70]">
          <div className="fixed bottom-7 right-[50%] translate-x-[50%] w-[97%] h-[8%] z-[60] bg-gray-400 rounded-br-xl rounded-bl-xl"></div>
        </div>
      </div>
    </>
  );
}

export default PcFrame;
