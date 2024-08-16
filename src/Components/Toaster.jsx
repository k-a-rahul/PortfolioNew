import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { IoCloseSharp } from "react-icons/io5";

export const Toaster = forwardRef((props, ref) => {
  const [display, setDisplay] = useState("invisible");
  const [message, setMessage] = useState("");
  const [bg, setBg] = useState("");
  useImperativeHandle(
    ref,
    () => ({
      showToast: ({ message, bg }) => {
        setDisplay("visible");
        setBg(bg ? bg : "bg-green-500");
        setMessage(message ? message : "This is Default toast as No text given!");
      },
    }),
    []
  );
  useEffect(() => {
    setTimeout(() => {
      setDisplay("invisible");
    }, 20000);
  }, [display]);
  return (
    <div
      className={`w-screen flex justify-center items-center ${display} absolute top-4 z-10 left-0`}
    >
      <div className={`${bg} p-2 rounded-xl flex justify-center items-center text-center`}>
        <p className="text-sm text-white font-mono">{message}</p>
        <IoCloseSharp
          className="text-white text-xl cursor-pointer ml-4"
          onClick={() => setDisplay("invisible")}
        />
      </div>
    </div>
  );
});
