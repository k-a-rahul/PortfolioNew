import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import {
  BLACKSKY,
  defaultOptions,
  isInValidData,
  MOUNTAIN,
  MOUNTAIN2,
  Profile,
  RESUME,
  SCROLL,
  technicalskills,
  TODO,
} from "../exports";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import Card from "../Components/Card";
import { Toaster } from "../Components/Toaster";

const Myname = "<Rahul-Kumar/>";
const projects = "<Projects/>";
const skills = "<Skills/>";
const serviceId = "service_x7wpv5i";
const templateId = "template_veov5tc";
const publicKey = "Iq7kRUHjE5bv9OZ3v";

function Home() {
  const form = useRef();
  const toastref = useRef();
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdata((userdata) => ({
      ...userdata,
      [name]: value,
    }));
  };
  // isinvaliddata is a function to check data for null || undefined || ""

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = userdata;
    if (
      isInValidData(name) &&
      isInValidData(email) &&
      isInValidData(message) &&
      name.length <= 15 &&
      email.length <= 20 &&
      email.endsWith(".com") &&
      email.includes("@") &&
      message.length > 0
    ) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          (res) => {
            if (res.status == 200) {
              toastref.current.showToast({
                message: `Hi ${userdata.name},Thanks For ur interest.`,
              });
            } else
              toastref.current.showToast({
                message: `Somewhing Gone Wrong !! :-(`,
                bg: "bg-red-600",
              });
          },
          (error) => {
            console.log(error);
          }
        );
      // toastref.current.showToast({ message: "DONE",bg:'bg-green-300' });
    } else {
      toastref.current.showToast({
        message: "Recheck/Fill all the fields !",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-10 w-screen flex justify-center items-center text-center text-white">
        <button>RESUME</button>
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
            className={`w-screen h-screen text-center flex flex-col justify-center gap-20 -mt-10 items-center sm:mt-0 sm:p-4 lg:flex-row md:justify-evenly lg:items-center lg:justify-around sm:gap-0 text-white`}
          >
            <div
              id="one"
              className="w-[60%] md:w-[30%] lg:w-[25%] flex justify-center items-center md:flex-row md:justify-evenly md:items-center "
            >
              <Tilt options={defaultOptions}>
                <img
                  src={Profile}
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
                      cursorColor="orange"
                      words={[
                        "A Front-End developer",
                        "A Gamer",
                        "A Tech Enthusiast.",
                        "A Quick Learner",
                      ]}
                      typeSpeed={100}
                      deleteSpeed={150}
                    />
                  </p>
                  <p className="p-2 text-sm md:text-base lg:text-lg text-white tracking-tighter lg:tracking-normal">
                    With a keen eye for design and a strong technical skill set,
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
            <div className=" invisible md:visible absolute -bottom-1/2">
              <p className="text-2xl md:text-6xl font-bold font-mono text-lighttext">
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
            <div className="invisible md:visible absolute top-[20%] md:-top-[20%] text-center flex justify-center">
              <p className="text-2xl text-center md:text-6xl font-semibold font-mono text-lighttext">
                {projects}
              </p>
            </div>
            <div
              id="mainDiv"
              className="w-full object-cover grid grid-cols-1 md:grid-cols-2 gap-4 p-1 justify-items-center items-center overflow-hidden"
            >
              <Card
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
        <ParallaxLayer offset={3} speed={4}>
          <Toaster ref={toastref} />

          <div className="h-screen w-screen flex justify-center lg:justify-center md:p-6 items-center text-center">
            <div className=" w-[90%] md:w-[45%]">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="bg-background w-full h-full flex flex-col justify-start shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <label className="block text-white text-2xl font-bold mb-2">
                  Let's have a Talk on this..
                </label>
                <div className="w-[75%] mb-4">
                  <input
                    onChange={handleChange}
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-slate-300 delay-75 transition-all"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-[75%] mb-6">
                  <input
                    onChange={handleChange}
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:bg-slate-300 delay-75 transition-all"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="w-[90%] h-[150px] mb-6">
                  <textarea
                    onChange={handleChange}
                    inputMode="text"
                    // required={true}
                    placeholder="Message"
                    name="message"
                    id="message"
                    className="overflow-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:bg-slate-300 delay-75 transition-all min-h-[100px] max-h-[150px] resize-y"
                  ></textarea>
                </div>
                <button
                  className="w-[50%] h-[40px] md:w-[30%] md:h-[42px] text-sm text-white bg-teal-600 hover:bg-teal-700"
                  type="submit"
                >
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
