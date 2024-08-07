import { useState } from "react";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const switcher = () => {
    setIndex((prev) => prev + 1);
    if(index == 3){
        setIndex(0)
    }
  };
  const images = [
    "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div
      id="imageslider"
      className="w-full h-full flex justify-center items-center delay-200 transition-all"
    >
      <div className="flex justify-center items-center">
        <img src={images[index]} alt="" className="w-[100%] md:w-[80%] transition-all delay-100"  />
      </div>

      {/* <img src={two} alt="" className="w-[65%]"/>
      <img src={three} alt="" className="w-[65%]"/>
      <img src={four} alt="" className="w-[65%]"/> */}
      <button
        onClick={switcher}
        className="absolute bottom-10 text-2xl p-2 text-white cursor-pointer rounded-md bg-teal-600 hover:bg-teal-700"
      >
        Switch
      </button>
    </div>
  );
};
