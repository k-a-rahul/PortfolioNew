import React, { useEffect, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

import { IoCloseSharp } from "react-icons/io5";
import { RESUME, RESUMEPDF } from "../exports";

function Modal({ show, child, hide }) {
  const [zoom, setZoom] = useState('100vh');

  return (
    <>
      {show && (
        <div
          className={`backdrop-brightness-[.3] absolute w-full h-full z-50 flex justify-center items-center text-center overflow-y-scroll`}
        >
          <div
          style={{height:zoom}}
          onClick={()=>setZoom('150vh')}
          onDoubleClick={()=>setZoom('100vh')}
            id="movable"
            className={`lg:${zoom === '150vh' ? 'top-[25%]':'top-0'} overflow-hidden relative w-[95%] md:w-auto md:h-[95%] flex justify-center items-center text-center`}
          >
            {child}
            <div className="absolute w-full h-full flex justify-evenly items-start delay-75 overflow-hidden transition-all transform-cpu">
            <a href='https://drive.google.com/file/d/1-wkxJR_Gado_AEzxWjELCr77vK5ZkFfj/view?usp=sharing' target="_blank" ><IoCloudDownloadOutline className="text-3xl text-black cursor-pointer"/></a>
            <IoCloseSharp onClick={hide} className="text-3xl text-black cursor-pointer"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
