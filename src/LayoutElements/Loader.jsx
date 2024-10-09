import Lottie from "lottie-react";
import React from "react";
import { LOADER } from "../exports";

export const Loader = () => {
  return (
    <div className="z-50 bg-gradient-to-r from-bg-lime to-bg-blue w-screen h-screen flex justify-center items-center">
      <Lottie animationData={LOADER} />
    </div>
  );
};
