import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import {
  BLUESKY,
  CLOUDS,
  HELLOWRITER,
  MOUNTAIN,
  SCHOOL,
  SCROLL,
  technicalskills,
} from "../exports";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import { publicKey, serviceid, templateid } from "../const";
import { useRef } from "react";

const Myname = "< Rahul />";
const journey = "< The Journey So Far/>";
const skills = "< Skills Gained So Far/>";

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
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={1.5}>
          <img
            src={BLUESKY}
            alt="img"
            className="md:bg-cover bg-no-repeat object-cover absolute top-0 left-0 h-[1150vh] w-screen"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <img
            src={CLOUDS}
            alt="img"
            className="md:bg-cover bg-no-repeat object-cover absolute top-0 left-0 z-0 w-screen"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-4}>
          <img
            src={MOUNTAIN}
            alt="mountain"
            className="md:w-screen h-screen z-10"
          />
        </ParallaxLayer>
        {/* Main div hello and intro here */}
        <ParallaxLayer offset={0} speed={0.7}>
          <Navbar />
          <div
            className={` w-screen h-screen text-center flex flex-col justify-start items-center p-4 mt-4 sm:mt-0 sm:p-4 md:flex-row md:justify-evenly lg:items-center lg:justify-around align-middle gap-10 sm:gap-2 text-white`}
          >
            <div
              id="one"
              className="w-[60%] md:w-[50%] lg:w-[35%] flex justify-center items-center md:flex-row md:justify-evenly md:items-center "
            >
              <Lottie
                loop={false}
                animationData={HELLOWRITER}
                className="w-[100%] lg:w-[100%]"
              />
            </div>
            <div
              id="two"
              className=" bg-background p-1 rounded-xl w-[90%] md:w-[50%] flex flex-col justify-center  items-center gap-1 md:hover:scale-105  delay-75 transition-all"
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
            <div id="scrollAnime" className="absolute bottom-0">
              <Lottie animationData={SCROLL} loop />
            </div>
          </div>
        </ParallaxLayer>

        {/* Skill Cards here  */}
        <ParallaxLayer offset={1} speed={0.99}>
          <div className=" h-[1000vh] w-screen"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.9}>
          <div className="w-screen h-screen">
            <div className="relative top-0 left-0 text-center md:text-6xl font-semibold text-lighttext">
              {skills}
            </div>
            <div
              className={`w-screen h-[90vh] flex flex-col justify-start items-center gap-6 md:flex-row md:justify-center md:items-center md:flex-wrap md:gap-10`}
            >
              {technicalskills.map((Card) => {
                return (
                  <div
                    key={Card.name}
                    className="bg-background group rounded-xl cursor-default w-[90%] md:w-[28%] md:h-[250px] text-white flex flex-col justify-center text-center items-center p-2 delay-[50ms] transition-all md:hover:scale-105"
                  >
                    <img
                      id="skillcard"
                      src={Card.logo}
                      alt="htmlLogo"
                      className="relative top-2 md:relative md:top-0 w-16 md:w-[90px] h-auto group-hover:relative group-hover:md:-top-16 group-hover:-top-10 delay-[100ms] transition-all"
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
        {/* left sticky div  */}
        <ParallaxLayer sticky={{ start: 2.5, end: 3 }}>
          <div className="md:w-[100vw] md:h-[25vh] z-0 flex flex-wrap justify-center items-center text-center object-cover overflow-hidden">
            <div
              id="one"
              className="w-[50%] h-[100%] flex flex-col justify-start items-center text-center"
            >
              <span className="md:text-6xl font-semibold text-lighttext">
                {journey}
              </span>
            </div>
          </div>
        </ParallaxLayer>
        {/* right Moveable divs started here */}
        <ParallaxLayer offset={3} speed={0.25}>
          <div className="md:w-[100vw] md:h-[75vh] flex flex-wrap justify-center items-center text-center">
            <div
              id="card"
              className=" w-[100%] h-[100%] flex flex-col md:flex-row md:justify-around md:items-center p-2  "
            >
              <div className="w-[33%]" id="img">
                <img
                  src={SCHOOL}
                  alt="cardimage"
                  className="w-full rounded-[2rem]"
                />
              </div>
              <div
                className="w-[40%] text-center flex-col rounded-xl justify-center items-center p-2 bg-background text-white"
                id="card-content"
              >
                <span className="text-2xl md:text-6xl font-semibold font-mono text-lighttext">
                  Schooling
                </span>
                <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                  Govt Senior Secondary School, Pathankot,Punjab
                </p>
                <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                  58%
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* left moveable divs stop here */}
        <ParallaxLayer offset={4}>
          <div className="h-screen w-screen flex justify-center items-center text-center">
            <div className="w-[50%] h-[70%] bg-slate-200 ">
              <form
                className="bg-white w-full h-full flex flex-col justify-start shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <label className="block text-gray-700 text-2xl font-bold mb-2">
                  Let's Talk on this..
                </label>
                <div className="w-1/2 mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:scale-105 delay-75 transition-all"
                    id="username"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-1/2 mb-6">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:scale-105 delay-75 transition-all"
                    id="password"
                    type="tel"
                    placeholder="Mobile"
                  />
                </div>
                <div className="w-[80%] h-[150px] mb-6">
                  <textarea
                    placeholder="Message"
                    name="messagetext"
                    id="message"
                    className="overflow-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:scale-105 delay-75 transition-all min-h-[80px] max-h-[150px] resize-y"
                  ></textarea>
                </div>
                <button
                  onClick={sendEmail}
                  className="w-[30%] h-[42px] text-xl text-white bg-green-500 hover:bg-green-600"
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
