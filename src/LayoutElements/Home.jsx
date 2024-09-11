import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { ImFacebook2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

import { defaultOptions, PIC, RESUMEICON, SIGN } from "../exports";

import { Tilt } from "react-tilt";
import Modal from "../Components/Modal";
import Resume from "../Components/Resume";
import { useState } from "react";

const Myname = "<Rahul-Kumar/>";

function Home() {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("-top-40");
  const [tip, setTip] = useState(false);
  const hide = () => setShow(false);

  useState(() => {
    setTimeout(() => {
      setDisplay("top-10");
    }, 2000);
  }, []);
  return (
    <>
      <Modal show={show} hide={hide} child={<Resume hide={hide} />} />
      <div
        className={`w-screen h-screen text-center flex flex-col justify-center items-center gap-6 sm:mt-0 sm:p-0 sm:flex-row md:justify-evenly lg:items-center lg:justify-around sm:gap-0 text-white`}
      >
        <div
          id="resume"
          className="absolute -left-1 top-1"
          onMouseEnter={() => {
            setTip(true);
          }}
          onMouseLeave={() => setTip(false)}
        >
          {tip && (
            <span className="text-base text-red-400 absolute top-0 left-12">
              Resume
            </span>
          )}
          <button onClick={() => setShow(true)}>
            <img
              className="mx-4 w-8 hover:scale-105 transition-all"
              src={RESUMEICON}
            />
          </button>
        </div>

        <div
          className={`flex flex-col justify-center absolute ${display} transition-all w-40 text-sm sm:w-52 sm:text-xl text-black rounded-2xl bg-lightergray`}
        >
          <div className="ml-3 absolute w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full animate-pulse"></div>
          Available Now !
        </div>
        <div
          id="one"
          className="sm:h-full sm:shadow-2xl sm:bg-slate-300 w-[60%] md:w-[30%] flex flex-col justify-center gap-2 items-center md:items-center "
        >
          <img src={PIC} className="w-full lg:w-full" alt="image" />
          
        </div>
          
        <div
          id="two"
          className="p-1 w-[90%] z-10  md:w-1/2 flex flex-col justify-center items-center "
        >
          <div
            aria-label="aboutme"
            className="text-center w-[100%] md:w-[420px] lg:w-[580px] text-pretty p-5 lg:p-6"
          >
            <span>
              <p className="text-2xl md:text-5xl font-bold font-mono text-lighttext">
                {Myname}
              </p>
              <p className="text-xl md:text-3xl font-mono font-semibold text-lighttext">
                <Typewriter
                  loop
                  cursor={true}
                  cursorBlinking
                  cursorColor="teal"
                  words={[
                    "A FrontEnd developer",
                    "A Coder",
                    "A Gamer",
                    "A Techie",
                    "A Quick Learner",
                  ]}
                  typeSpeed={100}
                  deleteSpeed={150}
                />
              </p>
              <p className="p-2 text-sm md:text-base lg:text-lg text-black tracking-tighter lg:tracking-normal">
                Meet Rahul, A Tech Professional With a keen eye for design and a
                strong technical skill set, I specialize in translating ideas
                into seamless, interactive interfaces. On the way to build
                something incredible.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute overflow-hidden -rotate-12 w-44 md:w-[20%] bottom-4 right-6 md:bottom-10 md:right-10">
          <img src={SIGN} className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
