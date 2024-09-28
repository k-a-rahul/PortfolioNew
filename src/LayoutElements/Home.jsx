import { Typewriter } from "react-simple-typewriter";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { LuZoomIn } from "react-icons/lu";
import { LuZoomOut } from "react-icons/lu";
import { ImCross } from "react-icons/im";

import { PIC, RESUME0, RESUME1, RESUME2, RESUMEICON, SIGN } from "../exports";

import Modal from "../Components/Modal";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

const Myname = "<Rahul-Kumar/>";

function Home() {
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setDisplay("top-14");
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("-top-40");
  const [zoom, setZoom] = useState(1);
  const [loader, setLoader] = useState(false);
  const hide = () => setShow(false);

  const resumes = [RESUME0, RESUME1, RESUME2];

  return (
    <>
      {loader && <Loader />}
      <Modal
        show={show}
        hide={hide}
        child={
          <>
            <div className="w-[100%] sm:w-[40%] h-full overflow-scroll border-2 bg-lightergray">
              <div className="w-full z-10 absolute top-5 left-0 flex justify-center gap-20 items-center">
                <a
                  href="https://drive.google.com/file/d/1xsaDYrCZqzhMa10mILKEJkPS0yvwCPIM/view?usp=sharing"
                  target="_blank"
                >
                  <button className="text-xl sm:text-3xl hover:opacity-50">
                    <MdOutlinePictureAsPdf />
                  </button>
                </a>
                <button
                  onClick={() => setShow(false)}
                  className=" text-base sm:text-2xl hover:opacity-50"
                >
                  <ImCross />
                </button>
              </div>
              {resumes.map((item) => {
                return (
                  <div
                    key={item}
                    className="transition-all overflow-scroll bg-lightergray"
                  >
                    <img
                      onMouseMove={(e) => {}}
                      style={{ scale: `${zoom}` }}
                      src={item}
                      alt="image"
                    />
                  </div>
                );
              })}
              <div className="absolute bottom-10 left-0 w-full flex justify-center gap-10 items-center">
                <button
                  onClick={() => setZoom((prev) => prev + 0.1)}
                  className="text-2xl sm:text-3xl hover:opacity-50"
                >
                  <LuZoomIn />
                </button>
                <button
                  onClick={() => setZoom((prev) => prev - 0.1)}
                  className=" text-2xl sm:text-3xl hover:opacity-50"
                >
                  <LuZoomOut />
                </button>
              </div>
            </div>
          </>
        }
      />
      <div
        className={`w-screen h-screen text-center flex flex-col justify-center items-center gap-6 sm:mt-0 sm:p-0 sm:flex-row md:justify-evenly lg:items-center lg:justify-around sm:gap-0 text-white`}
      >
        <div id="resume" className="absolute -left-1 top-1">
          <button onClick={() => setShow(true)}>
            <img
              className="mx-4 w-8 hover:scale-105 transition-all"
              src={RESUMEICON}
            />
          </button>
        </div>

        <div
          className={`flex flex-col animate-bounce justify-center absolute ${display} transition-all w-40 text-sm sm:w-52 sm:text-xl text-black rounded-2xl bg-lightergray`}
        >
          <div className="ml-3 absolute w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full animate-pulse"></div>
          Available Now !
        </div>
        <div
          id="one"
          className=" w-[60%] md:w-[30%] flex flex-col justify-center gap-2 items-center md:items-center"
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
                strong technical skill set, Who specialize in translating ideas
                into seamless, interactive interfaces. On the way to build
                something incredible.
              </p>
            </span>
          </div>
        </div>
        {loader ? (
          ""
        ) : (
          <div className="absolute overflow-hidden -rotate-12 w-44 md:w-[20%] bottom-4 right-6 md:bottom-10 md:right-10">
            <img src={SIGN} className="w-full" alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
