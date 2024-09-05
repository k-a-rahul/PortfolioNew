import React from "react";
import { Tilt } from "react-tilt";

function Card({ img, text, description,onClick }) {
  return (
      <div
      onClick={onClick}
        className="bg-background cursor-pointer w-[80%] group rounded-xl p-2 text-white flex flex-col justify-center items-center overflow-hidden"
        id="card1"
      >
        <div className="w-[100%]">
          <img
            src={img ? img : "NoimageSupplied"}
            className="w-full overflow-hidden"
            alt="Noimage"
          />
        </div>
        <p className="text-xl md:text-4xl font-mono font-semibold text-lighttext">
          {text ? text : "Notextsuplied"}
        </p>
        <p className="p-2 text-xs md:text-sm text-white tracking-tight lg:tracking-normal">
          {description ? description : "Nodescription"}
        </p>
      </div>
  );
}

export default Card;
