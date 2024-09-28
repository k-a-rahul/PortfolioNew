import React from "react";


function Modal({ show, child, w, h }) {
  return (
    <>
      {show && (
        <div
          className={`backdrop-brightness-50 absolute top-0 w-full h-full z-50 flex justify-center items-center text-center overflow-y-scroll`}
        >
          <div
            id="movable"
            className={`rounded-2xl overflow-hidden relative w-full md:w-[${w ? w : 60}%] md:h-[${h ? h : 95}%] flex justify-center items-center text-center`}
          >
            {child ? child : "No Child Content Passed"}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
