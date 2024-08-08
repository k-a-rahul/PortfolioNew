import { useState } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const prevSwitch = () => {
    setIndex((prev) => prev - 1);
    if (index == 0) {
      setIndex(3);
    }
  };
  const nextSwitch = () => {
    setIndex((prev) => prev + 1);
    if (index == 3) {
      setIndex(0);
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
      className="w-full h-full flex justify-center items-center"
    >
      <div className="w-full flex justify-center items-center  ">
        <img
          src={images[index]}
          alt="image"
          className="w-[95%] md:w-[70%] "
        />
        <div className="w-[90%] md:w-[70%] absolute top-[1/2]  flex justify-between md:justify-between items-center delay-75 transition-all">
          <div>
            <IoChevronBackCircleOutline
              onClick={prevSwitch}
              className="text-3xl md:text-5xl text-white cursor-pointer delay-[50ms] transition-all md:hover:scale-125 "
            />
          </div>
          <div>
            <IoChevronForwardCircleOutline
              onClick={nextSwitch}
              className="text-3xl md:text-5xl text-white cursor-pointer delay-[50ms] transition-all md:hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
