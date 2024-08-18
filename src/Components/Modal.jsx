import { document } from "postcss";
import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function Modal({ show, child, hide }) {
  const [zoom, setZoom] = useState(1);

  return (
    <>
      {show && (
        <div
          className={`backdrop-brightness-50 absolute w-full h-full z-50 flex justify-center items-center text-center overflow-y-scroll`}
        >
          <div
            id="movable"
            className={`relative w-full md:w-auto md:h-[98%] transition-all delay-75 flex justify-center items-center text-center`}
          >
            
            <span>
              <FaFileDownload className="text-lighttext absolute top-2 left-[25%] text-sm md:text-3xl cursor-pointer  transition-all"></FaFileDownload>
            </span>
            <div
            onClick={() => setZoom(1.2)}
            onDoubleClick={() => setZoom(1)}
            style={{scale:`${zoom}`}} className="w-[90%] md:w-[40%] transition-all delay-75 ">
              <span>
              <IoCloseSharp
                className="text-lighttext absolute top-2 right-[25%] text-sm md:text-3xl cursor-pointer  transition-all "
                onClick={hide}
              />
            </span>
              {child}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
