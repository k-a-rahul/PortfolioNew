import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { TODO, WALLZPIC1 } from "../exports";
import { Loader } from "./Loader";

function Projects() {
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
      <div className=" bg-gradient-to-r from-bg-lime to-bg-blue w-screen h-screen flex flex-col gap-5 justify-center items-center text-center">
        <div
          id="mainDiv"
          className="object-cover w-[95%] grid grid-cols-1 sm:grid-cols-2 gap-4 justify-around content-center items-center "
        >
          <Card
            img={TODO}
            text={"Todo App"}
            description={`A Modular todos managing web App build using context api,
          designed using tailwind CSS. A user can add, update, delete
          and mark as done a Todo Task.`}
          />

          <Card
            img={WALLZPIC1}
            button={true}
            text={"Wallz App"}
            description={`A Modular all devices compatible Wallpaper display app built using vite and tailwind. Wallpapers displayed are from fetched from Pexels and intergrate in grid based layout user has option to get random wallpapers or of their choice.`}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
