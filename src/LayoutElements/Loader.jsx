import Lottie from "lottie-react";
import React from "react";
import { LOADER } from "../exports";

export const Loader = () => {
  return (
    <div className="z-50 w-screen h-screen flex justify-center items-center">
      <Lottie animationData={LOADER} />
    </div>
  );
};
