import React from "react";
import { professionalskills, technicalskills } from "../exports";

function Skills() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute top-10 flex flex-wrap gap-3 ">
        {
          professionalskills.map((item)=>{
            return (
              <div key={item.name} className=" bg-slate-300 text-black p-1 rounded-lg ">
                  <p className="text-xs md:text-base">{item.name}</p>
              </div>
            )
          })
        }
      </div>
      <div className="w-full gap-4 flex flex-col md:flex-row flex-wrap justify-center items-center">
        {technicalskills.map((card) => {
          return (
            <div
              key={card.name}
              id="card"
              className="bg-white transition-all group hover:bg-slate-300 rounded-xl text-center w-[75%] md:w-[20%] p-1 flex flex-col justify-center items-center"
            >
              <img src={card.logo} className="w-20 md:w-24 relative top-0 group-hover:relative group-hover:-top-2 group-hover:md:-top-4 transition-all" alt="img" />
              <p className="text-xs md:text-sm tracking-tighter">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
