import React, { useEffect, useState } from "react";
import { professionalskills, technicalskills } from "../exports";
import { Loader } from "./Loader";

function Skills() {
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const [loader, setLoader] = useState(false);
  return (
    <>
    {loader && <Loader />}
      <div className="mt-0 w-screen h-full bg-gradient-to-r from-bg-lime to-bg-blue flex flex-col justify-center items-center">
        <div className="p-3 flex justify-center items-center flex-wrap gap-3  ">
          {professionalskills.map((item) => {
            return (
              <div
                key={item.name}
                className=" bg-white text-black p-1 rounded-lg hover:-translate-y-1 transition-all "
              >
                <p className="text-xs md:text-base">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[95%] sm:w-[75%] h-[75%] sm:h-[70%] grid grid-cols-2 md:grid-cols-3 justify-center place-items-center content-center gap-2 sm:gap-5">
          {technicalskills.map((card) => {
            return (
              <div
                key={card.name}
                id="card"
                className="bg-white h-full hover:-translate-y-1 shadow-sm transition-all group hover:bg-slate-200 rounded-xl w-full text-center p-2 flex flex-col justify-center items-center"
              >
                <img src={card.logo} className="w-20 md:w-24" alt="img" />
                <p className="text-xs md:text-sm tracking-tight">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
