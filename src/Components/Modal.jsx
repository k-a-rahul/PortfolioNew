import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({props}) => {
    const [open,setOpen] = useState('visible')
  return (
    <div className={`absolute top-0 ${open} w-screen h-screen flex justify-center items-center text-center `}>
        <IoMdClose className="absolute top-0 right-20 text-4xl text-white cursor-pointer hover:scale-125" onClick={()=>setOpen('invisible')}/>
      <div className="w-[70%] h-[100%] overflow-scroll max-h-[100%] flex justify-center items-center text-center backdrop-brightness-75">
        {props}
      </div>
    </div>
  );
};

export default Modal;
