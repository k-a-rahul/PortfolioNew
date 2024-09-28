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
            className={`rounded-xl overflow-hidden relative p-4 w-[100%] md:w-[${w ? w : 60}%] h-[100%] flex justify-center items-center text-center`}
          >
            {child ? child : "No Child Content Passed"}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
