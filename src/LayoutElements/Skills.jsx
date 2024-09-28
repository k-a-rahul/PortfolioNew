import React from "react";
import { professionalskills, technicalskills } from "../exports";

function Skills() {
  return (
    <div className="mt-6 w-screen h-screen overflow-scroll flex flex-col justify-center items-center">
      <div className="p-3 mt-3 flex justify-center items-center flex-wrap gap-3  ">
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
      <div className="w-[95%] sm:w-[75%] h-[75%] my-auto sm:h-[70%] grid grid-cols-2 md:grid-cols-3 justify-center place-items-center content-center gap-4">
        {technicalskills.map((card) => {
          return (
            <div
              key={card.name}
              id="card"
              className="bg-lightergray h-full hover:-translate-y-1 shadow-sm transition-all group hover:bg-slate-200 rounded-xl w-full text-center p-2 flex flex-col justify-center items-center"
            >
              <img src={card.logo} className="w-20 md:w-24 " alt="img" />
              <p className="text-xs md:text-sm tracking-tighter">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
