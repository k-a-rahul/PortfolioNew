import React from "react";
import { Tilt } from "react-tilt";
import { NOIMAGE } from "../exports";


function Card({ img, text, description,onClick }) {
  return (
      <div
      onClick={onClick}
        className="bg-slate-100 transition-all group hover:bg-slate-300 hover:-translate-y-1 w-[80%] group rounded-xl p-2 text-black flex flex-col justify-center items-center overflow-hidden"
        id="card1"
      >
        <div className="w-[220px] aspect-square">
          <img
            src={img ? img : NOIMAGE}
            className="w-full"
            alt="Noimage"
          />
        </div>
        <p className="text-xl md:text-4xl font-mono font-semibold text-lighttext">
          {text ? text : "No text suplied"}
        </p>
        <p className="p-2 text-xs md:text-sm text-black tracking-tight lg:tracking-normal">
          {description ? description : "No description"}
        </p>
      </div>
  );
}

export default Card;
