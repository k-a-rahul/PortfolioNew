import React, { useRef } from "react";

const Modal = useRef(({props})=>{
  return(
    <div className=" w-screen h-screen flex justify-center items-center text-center backdrop-blur-2xl">
      <div className="w-[80%] h-[80%] flex justify-center items-center text-center">
      {props.children}
      </div>
    </div>
  )

}) 

export default Modal;
