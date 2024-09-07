import React from 'react'
import { professionalskills, technicalskills } from '../exports';

function Skills() {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
        
        <div className='bg-slate-300 w-[75%] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-1 p-2 place-items-center align-middle '>
        <p className=''>Technical Skills</p>
        {technicalskills.map((Card) => {
                return (
                  <div
                    key={Card.name}
                    className="w-[50%] bg-background group rounded-xl cursor-default text-white flex flex-col justify-center text-center items-center hover:scale-105 p-2 delay-75 transition-all"
                  >
                    <img
                      id="skillcard"
                      src={Card.logo}
                      alt="htmlLogo"
                      className="relative top-0 md:relative md:top-0 w-6 md:w-[65px]"
                    />
                    
                    <div>
                      <p className="p-2 text-xs text-white tracking-tight ">
                        {Card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className='bg-slate-300 w-[50%] rounded-xl grid grid-cols-4 md:grid-cols-3 gap-2 p-2 justify-center justify-items-center place-items-center items-center align-middle '>
            <p className=''>Professional Skills</p>
        {professionalskills.map((Card) => {
                return (
                  <div
                    key={Card.name}
                    className="w-[100%] bg-background group rounded-xl cursor-default text-white flex flex-col justify-center text-center items-center hover:scale-105 p-2 delay-75 transition-all"
                  ><p>

                  </p>
                    <div>
                      <p className="p-2 text-xs text-white tracking-tight ">
                        {Card.name}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
          </div>
  )
}

export default Skills