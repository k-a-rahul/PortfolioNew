import React from "react";
import { Tilt } from "react-tilt";
import { MdOutlineArrowOutward } from "react-icons/md";

import { NOIMAGE } from "../exports";

function Card({ img, width, text, description, onClick, button }) {
  return (
    <div
      onClick={onClick}
      className="bg-lightergray transition-all hover:bg-slate-200 my-auto rounded-xl p-2 h-[320px] sm:h-[420px] flex flex-col justify-center items-center gap-1"
      id="card1"
    >
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <img
          src={img ? img : NOIMAGE}
          className={`w-[260px] sm:w-[360px]`}
          alt="image"
        />
      </div>
      <p className="text-xl md:text-4xl font-mono font-semibold text-lighttext">
        {text ? text : "No text suplied"}
      </p>
      <p className="p-2 text-xs md:text-sm text-black tracking-tight text-wrap lg:tracking-tight">
        {description ? description : "No description"}
      </p>
      <a href="#" target="_blank">
      <button
        className={`${
          button ? "" : "cursor-not-allowed"
        } text-base bg-button hover:bg-green-400 p-2 rounded-md flex justify-center items-center group`}
      >
        View Live{" "}
          <MdOutlineArrowOutward className="text-xl text-white group-hover:scale-125" />
      </button>
        </a>
    </div>
  );
}

export default Card;
