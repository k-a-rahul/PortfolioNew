import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { ImFacebook2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import {
  BLACKSKY,
  defaultOptions,
  MOUNTAIN,
  MOUNTAIN2,
  PIC,
  SCROLL,
  SIGN,
  technicalskills,
  TODO,
} from "../exports";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useState } from "react";
import { Tilt } from "react-tilt";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import Form from "../Components/Form";
import Resume from "../Components/Resume";

const Myname = "<Rahul-Kumar/>";
const projects = "<Projects/>";
const skills = "<Skills/>";

function Home() {
  const [show, setShow] = useState(false);
  const hide = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        hide={hide}
        child={<Resume hide={hide}/>}
      />
      <nav className="absolute z-10 w-full flex justify-start items-center text-center ">
        <button
          className="mx-2 text-lighttext text-xl md:text-2xl font-semibold group"
          onClick={() => setShow(true)}
        >
          Get Resume Here!
        </button>
      </nav>  
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="absolute top-0 left-0"> </div>
          <img
            src={BLACKSKY}
            alt="img"
            className="md:bg-cover bg-no-repeat object-cover absolute top-0 left-0 h-[1150vh] w-screen"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-6}>
          <img
            src={MOUNTAIN2}
            className="visible w-screen  z-10 md:invisible absolute bottom-0"
            alt=""
          />
          <img
            src={MOUNTAIN}
            alt="mountain"
            className="invisible md:visible w-screen h-screen z-10"
          />
        </ParallaxLayer>
        {/* Main div hello and intro here */}
        <ParallaxLayer offset={0} speed={0.7}>
          <div
            className={`w-screen h-screen text-center flex flex-col justify-center gap-20 -mt-0 items-center sm:mt-0 sm:p-4 lg:flex-row md:justify-evenly lg:items-center lg:justify-around sm:gap-0 text-white`}
          >
            <div
              id="one"
              className="w-[60%] md:w-[30%] lg:w-[22%] flex justify-center items-center md:flex-row md:justify-evenly md:items-center "
            >
              <Tilt options={defaultOptions}>
                <img
                  src={PIC}
                  className="w-full lg:w-full rounded-xl transition-transform hover:scale-105"
                  alt=""
                />
              </Tilt>
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
                  <p className="text-2xl md:text-6xl font-bold font-mono text-lighttext">
                    {Myname}
                  </p>{" "}
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
                  <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                    Meet Rahul, A Tech Professional With a keen eye for design and a strong technical skill set,
                    I specialize in translating ideas into seamless, interactive
                    interfaces. On the way to build something incredible.
                  </p>
                </span>
              </div>
            </div>
            <div
              id="scrollAnime"
              className="invisible lg:visible absolute bottom-0"
            >
              <Lottie animationData={SCROLL} loop />
            </div>
            <div className=" visible md:visible absolute -bottom-1/2">
              <p className="text-4xl md:text-6xl font-bold font-mono text-lighttext">
                {skills}
              </p>
            </div>
          </div>
        </ParallaxLayer>
        {/* Skill Cards here  */}
        <ParallaxLayer offset={1} speed={0.65}>
          <div className="w-screen h-screen  md:overflow-hidden">
            <div
              className={`mt-0 md:mt-6 w-screen h-screen flex flex-col justify-start items-center gap-6 md:flex-row md:justify-center md:items-center md:flex-wrap md:gap-4`}
            >
              {technicalskills.map((Card) => {
                return (
                  <div
                    key={Card.name}
                    className="bg-background group rounded-xl cursor-default w-[90%] md:w-[30%] md:h-[240px] lg:h-[260px] text-white flex flex-col justify-center text-center items-center hover:scale-105 p-2 delay-75 transition-all"
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
                      <p className="p-2 text-xs md:text-sm text-white tracking-tight lg:tracking-normal">
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
          
          <div className="mt-[50%] md:mt-0 overflow-hidden w-screen h-screen flex justify-center items-center text-center">
            <div className="visible md:visible absolute top-[20%] md:-top-[20%] text-center flex justify-center">
              <p className="text-4xl text-center md:text-6xl font-bold font-mono text-lighttext">
                {projects}
              </p>
            </div>
            <div
              id="mainDiv"
              className="w-full object-cover grid grid-cols-1 md:grid-cols-2 gap-4 p-1 justify-items-center items-center overflow-hidden"
            >
              
              <Card
              onClick={()=>setOpen(true)}
                img={TODO}
                text={"Todo App"}
                description={`A Modular todos managing web App build using context api,
                  designed using tailwind CSS. A user can add, update, delete
                  and mark as done a Todo Task.`}
              />

              <Card
                img={TODO}
                description={`A Modular todos managing web App build using context api,
                  designed using tailwind CSS. A user can add, update, delete
                  and mark as done a Todo Task.`}
              />
            </div>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={3} speed={-4}>
          <img src={HEXA} className="z-0 w-screen h-screen" alt="" />
        </ParallaxLayer> */}
        <ParallaxLayer offset={3} speed={0.85}>
          <div className="h-screen w-screen flex justify-center lg:justify-center md:p-6 items-center text-center">
            <Form />

            <div className="absolute bottom-10 flex justify-between items-center gap-10">
            <a href="https://www.facebook.com/profile.php?id=61560864673430&mibextid=ZbWKwL" target="_blank"><ImFacebook2 className=" text-3xl text-white cursor-pointer"/></a>
            <a href="https://github.com/k-a-rahul" target="_blank"><FaGithubSquare className=" text-4xl text-white cursor-pointer"/></a>
           <a href="https://wa.me/7347506388" target="_blank"><FaWhatsappSquare className=" text-4xl text-white cursor-pointer" /></a>
            </div>
            <div className="absolute w-[20%] bottom-5 right-4">
              <img src={SIGN} alt="" />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
