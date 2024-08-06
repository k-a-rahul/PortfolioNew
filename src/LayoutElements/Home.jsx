import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import {
  BLUESKY,
  CLOUDS,
  HELLOWRITER,
  MOUNTAIN,
  MOUNTAIN2,
  ROAD,
  SCHOOL,
  SCROLL,
  SKY,
  technicalskills,
} from "../exports";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import { publicKey, serviceid, templateid } from "../const";
import { useRef } from "react";
import Modal from "../Components/Modal";

const Myname = "<Rahul-Kumar/>";
const projects = "<The Projects Done/>";
const skills = "<The Ultimate Skills/>";

function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceid}`, `${templateid}`, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="h-[1150vh] w-screen visible  bg-gray-300"> </div>
          {/* <img
            src={BLUESKY}
            alt="img"
            className="md:bg-cover bg-no-repeat object-cover absolute top-0 left-0 invisible md:visible md:h-[1150vh] w-screen"
          /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <img
            src={CLOUDS}
            alt="img"
            className="md:bg-cover bg-no-repeat object-cover absolute top-0 left-0 z-0 w-screen"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-4}>
          <img
            src={MOUNTAIN2}
            className="visible w-screen  z-10 md:invisible absolute bottom-0"
            alt=""
          />
          <img
            src={MOUNTAIN}
            alt="mountain"
            className=" invisible md:visible w-screen h-screen z-10"
          />
        </ParallaxLayer>
        {/* Main div hello and intro here */}
        <ParallaxLayer offset={0} speed={0.7}>
          <Navbar />
          <div
            className={`w-screen h-screen text-center flex flex-col justify-evenly -mt-24 items-center sm:mt-0 sm:p-4 md:flex-row md:justify-evenly lg:items-center lg:justify-around sm:gap-0 text-white`}
          >
            <div
              id="one"
              className="w-[80%] md:w-[40%] lg:w-[40%] flex justify-center items-center md:flex-row md:justify-evenly md:items-center "
            >
              <Lottie
                loop={false}
                animationData={HELLOWRITER}
                className="w-[100%] lg:w-[100%]"
              />
            </div>
            <div
              id="two"
              className="bg-background p-1 rounded-xl w-[90%] md:w-[60%] lg:w-1/2 flex flex-col justify-center items-center md:hover:scale-105 delay-75 transition-all"
            >
              <div
                aria-label="aboutme"
                className="text-center w-[100%] md:w-[420px] lg:w-[580px] text-pretty p-5 lg:p-6"
              >
                <span>
                  <p className="text-2xl md:text-6xl font-semibold font-mono text-lighttext">
                    {Myname}
                  </p>{" "}
                  <p className="text-xl md:text-4xl font-mono font-semibold text-lighttext">
                    <Typewriter
                      loop
                      cursor={true}
                      cursorBlinking
                      cursorColor="orange"
                      words={[
                        "A Front-End developer",
                        "A Gamer",
                        "A Tech Enthusiast.",
                        "A Quick Learner",
                      ]}
                      typeSpeed={200}
                      deleteSpeed={200}
                    />
                  </p>
                  <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                    With a keen eye for design and a strong technical skill set,
                    I specialize in translating ideas into seamless, interactive
                    interfaces.Let's build something incredible together.
                  </p>
                </span>
              </div>
            </div>
            <div
              id="scrollAnime"
              className="absolute bottom-0 invisible md:visible"
            >
              <Lottie
                animationData={SCROLL}
                loop
                className="invisible md:visible"
              />
            </div>
            <div className="absolute -bottom-1/2">
              <p className="text-2xl md:text-6xl font-semibold font-mono text-lighttext">
                {skills}
              </p>
            </div>
          </div>
        </ParallaxLayer>
        {/* Skill Cards here  */}
        <ParallaxLayer offset={1} speed={0.65}>
          <div className="w-screen h-screen overflow-scroll md:overflow-hidden">
            <div
              className={`mt-8 md:mt-3 w-screen h-screen flex flex-col justify-start items-center gap-6 md:flex-row md:justify-evenly md:items-center md:flex-wrap md:gap-0`}
            >
              {technicalskills.map((Card) => {
                return (
                  <div
                    key={Card.name}
                    className="bg-background group rounded-xl cursor-default w-[90%] md:w-[27%] md:h-[275px] text-white flex flex-col justify-center text-center items-center p-2 delay-[50ms] transition-all"
                  >
                    <img
                      id="skillcard"
                      src={Card.logo}
                      alt="htmlLogo"
                      className="relative top-2 md:relative md:top-0 w-16 md:w-[90px] h-auto group-hover:relative group-hover:md:-top-16 group-hover:-top-10 delay-[100ms] transition-all "
                    />
                    <span className=" invisible group-hover:visible text-xl md:text-3xl text-lighttext md:relative md:-top-10 relative -top-6 font-mono delay-150">
                      {Card.value}
                    </span>
                    <div>
                      <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                        {Card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ParallaxLayer>
        {/* right Moveable divs started here */}
        <ParallaxLayer offset={2} speed={0.5}>
          <div className="bg-background w-screen h-screen flex justify-center items-center text-center">
            <div className="absolute top-0 text-center flex justify-center">
              <p className="text-2xl text-center md:text-6xl font-semibold font-mono text-lighttext">
                {projects}
              </p>
            </div>
            <div
              id="card"
              className="w-full h-full flex flex-col justify-around items-center md:flex-row md:justify-around md:items-center p-2  "
            >
              <div className="bg-blue-600 flex flex-col justify-center items-center text-center md:w-[30%] h-[75%]" id="img">
              <span className="text-2xl md:text-6xl font-semibold font-mono text-lighttext">
                  Schooling
                </span>
                <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                  Govt Senior Secondary School, Pathankot,Punjab
                </p>
              </div>
              <div
                className="md:w-[30%] h-[75%] bg-red-600 text-center flex flex-col justify-end items-center text-white"
                id="card-content"
              >
                <span className="text-2xl md:text-6xl font-semibold font-mono text-lighttext">
                  Schooling
                </span>
                <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                  Govt Senior Secondary School, Pathankot,Punjab
                </p>
              </div>
              <div className="md:w-[30%]" id="img">
                
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={4}>
          <img src={ROAD} className="w-screen absolute h-screen z-0 " alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={-4}>
          <div className="h-screen w-screen flex justify-center items-center text-center">
            <div className=" w-[95%] md:w-[50%] h-[70%] bg-slate-200 ">
              <form className="bg-white w-full h-full flex flex-col justify-start shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="block text-gray-700 text-2xl font-bold mb-2">
                  Let's Talk on this..
                </label>
                <div className="w-[75%] mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:scale-105 delay-75 transition-all"
                    id="username"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-[75%] mb-6">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:scale-105 delay-75 transition-all"
                    id="password"
                    type="tel"
                    placeholder="Mobile"
                  />
                </div>
                <div className="w-[90%] h-[150px] mb-6">
                  <textarea
                    required={true}
                    placeholder="Message"
                    name="messagetext"
                    id="message"
                    className="overflow-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:scale-105 delay-75 transition-all min-h-[100px] max-h-[150px] resize-y"
                  ></textarea>
                </div>
                <button
                  onClick={sendEmail}
                  className="w-[50%] h-[40px] md:w-[30%] md:h-[42px] text-xl text-white bg-teal-600 hover:bg-teal-700"
                  type="submit"
                >
                  {" "}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
