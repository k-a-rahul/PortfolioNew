import React from "react";
import { professionalskills, technicalskills } from "../exports";

function Skills() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="p-3 flex justify-center items-center flex-wrap gap-3 ">
        {
          professionalskills.map((item)=>{
            return (
              <div key={item.name} className=" bg-lightergray text-black p-1 rounded-lg hover:-translate-y-1 transition-all ">
                  <p className="text-xs md:text-base">{item.name}</p>
              </div>
            )
          })
        }
      </div>
      <div className="w-[90%] h-[75%] sm:h-[70%] grid grid-cols-2 md:grid-cols-3 justify-center place-items-center content-center gap-6">
        {technicalskills.map((card) => {
          return (
            <div
              key={card.name}
              id="card"
              className="bg-slate-200 hover:-translate-y-1 shadow-sm transition-all group hover:bg-lightergray rounded-xl w-full text-center p-1 flex flex-col justify-center items-center"
            >
              <img src={card.logo} className="w-20 md:w-24" alt="img" />
              <p className="text-xs md:text-sm tracking-tighter">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
