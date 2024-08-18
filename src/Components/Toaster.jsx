import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { IoCloseSharp } from "react-icons/io5";

export const Toaster = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [bg, setBg] = useState("");
  useImperativeHandle(
    ref,
    () => ({
      showToast: ({ message, bg }) => {
        setDisplay(true);
        setBg(bg ? bg : "bg-green-500");
        setMessage(
          message ? message : "This is Default toast as No text given!"
        );
      },
    }),
    []
  );
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 5000);
  }, [display]);
  return (
    display && (
      <div
        className={`w-screen flex justify-center items-center absolute top-8 z-30`}
      >
        <div
          className={`${bg} p-1 rounded-md flex justify-center items-center text-center`}
        >
          <p className="text-sm md:text-lg text-white mx-1">{message}</p>
          <IoCloseSharp
            className="text-white text-4xl p-1 cursor-pointer mx-1"
            onClick={() => setDisplay(false)}
          />
        </div>
      </div>
    )
  );
});
