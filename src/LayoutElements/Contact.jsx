import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import { FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { Loader } from "./Loader";

function Contact() {
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [loader, setLoader] = useState(false);
  const h = 250;
  const w = '100%';
  return (
    <>
      {loader && <Loader />}
      <div className="h-screen w-screen flex flex-col justify-evenly items-center sm:p-10 bg-gradient-to-r from-bg-lime to-bg-blue">
        <div className="w-[95%] sm:w-[50%] flex gap-2 flex-col justify-evenly overflow-hidden items-center text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26987.944308327926!2d75.64086889918016!3d32.27171982675917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f5d473c84b3%3A0x5335739bee705d89!2sPathankot%2C%20Punjab%20145001!5e0!3m2!1sen!2sin!4v1726067323337!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            width={w}
            height={h}
          ></iframe>
          <Form />
        </div>
        {loader ? (
          ""
        ) : (
          <div className="absolute right-5 sm:right-10 bottom-[5%] flex flex-col justify-center items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61560864673430&mibextid=ZbWKwL"
              target="_blank"
            >
              <ImFacebook2 className=" text-3xl text-black cursor-pointer" />
            </a>
            <a href="https://github.com/k-a-rahul" target="_blank">
              <FaGithubSquare className=" text-4xl text-black cursor-pointer" />
            </a>
            <a href="https://wa.me/7347506388" target="_blank">
              <FaWhatsappSquare className=" text-4xl text-black cursor-pointer" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
