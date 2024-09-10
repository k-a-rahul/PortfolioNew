import React from 'react'
import Card from '../Components/Card'
import { TODO } from '../exports'

function Projects() {
  return (
    <div className="md:mt-0 overflow-hidden w-screen h-screen flex justify-center items-center text-center">
    <div
      id="mainDiv"
      className="w-full object-cover grid grid-cols-1 md:grid-cols-2 gap-4 p-1 justify-items-center items-center overflow-hidden"
    >
      
      <Card
      onClick={()=>setOpen(true)}
        img={TODO}
        text={"Todo App"}
        description={`A Modular todos managing web App build using context api,
          designed using tailwind CSS. A user can add, update, delete
          and mark as done a Todo Task.`}
      />

      <Card/>
    </div>
  </div>
  )
}

export default Projects