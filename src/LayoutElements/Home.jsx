import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { ImFacebook2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { defaultOptions, PIC, RESUMEICON, SIGN } from "../exports";

import { Tilt } from "react-tilt";
import Modal from "../Components/Modal";
import Resume from "../Components/Resume";
import { useState } from "react";

const Myname = "<Rahul-Kumar/>";

function Home() {
  const [show, setShow] = useState(false);
  const hide = () => setShow(false);
  return (
    <>
      <Modal show={show} hide={hide} child={<Resume hide={hide} />} />
      <div
        className={`w-screen h-screen text-center flex flex-col justify-center items-center gap-10 sm:mt-0 sm:p-0 lg:flex-row md:justify-evenly lg:items-center lg:justify-around sm:gap-0 text-white`}
      >
        <div
          id="one"
          className="w-[70%] md:w-[30%] lg:w-[35%] flex justify-center items-center md:flex-row md:justify-evenly md:items-center "
        >
          <Tilt options={defaultOptions}>
            <img
              src={PIC}
              className="w-full lg:w-full shadow-lg "
              alt="image"
            />
          </Tilt>
        </div>
        <div
          id="two"
          className="p-1 rounded-xl w-[90%] md:w-[60%] lg:w-1/2 flex flex-col justify-center items-center "
        >
          <div
            aria-label="aboutme"
            className="text-center w-[100%] md:w-[420px] lg:w-[580px] text-pretty p-5 lg:p-6"
          >
            <span>
              <p className="text-2xl md:text-6xl font-bold font-mono text-lighttext">
                {Myname}
              </p>
              <p className="text-xl md:text-4xl font-mono font-semibold text-lighttext">
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
        <div className="absolute overflow-hidden -rotate-6 w-36 md:w-[20%] bottom-0 right-0 md:bottom-5 md:right-5">
          <img src={SIGN} className="w-full" alt="" />
        </div>
        <div id="resume" className="absolute -left-1 top-1">
          <button onClick={() => setShow(true)}>
            <img
            className="mx-2 w-8 hover:scale-105 transition-all"
                  src={RESUMEICON}
            />
            </button>
        </div>
      </div>
    </>
  );
}

export default Home;
