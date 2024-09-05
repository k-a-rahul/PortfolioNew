import React from "react";
import { RESUME } from "../exports";
import { IoCloseSharp, IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineZoomIn } from "react-icons/ai";
import { AiOutlineZoomOut } from "react-icons/ai";


function Resume({ hide }) {
   
  return (
    <>
      <div className="absolute w-full h-full p-1 flex justify-between items-start delay-75 overflow-hidden transition-all transform-cpu">
        <a
          href="https://drive.google.com/file/d/1-wkxJR_Gado_AEzxWjELCr77vK5ZkFfj/view?usp=sharing"
          target="_blank"
        >
          <IoCloudDownloadOutline className="text-3xl text-lighttext cursor-pointer" />
        </a>
        <IoCloseSharp
          onClick={hide}
          className="text-3xl text-lighttext cursor-pointer"
        />
      </div>
      
      <img className="w-[100%] md:w-[60%]" src={RESUME} />
    </>
  );
}

export default Resume;
