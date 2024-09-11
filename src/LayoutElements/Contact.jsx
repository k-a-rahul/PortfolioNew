import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import { FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";


function Contact() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition(success, fail);
    }
    else alert('No Location Support or Location Disabled !')
  }, []);
  const success = (item) => {
   setData(item.coords)
  };
  const fail = (error) => {
    console.log(error);
  };
  const {latitude,longitude} = data
  
  return (
    <div className="h-full w-full flex justify-center lg:justify-center overflow-hidden items-center text-center">
      <Form />
      <div className="absolute bottom-10 flex justify-between items-center gap-10">
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
      <div>
        
      </div>
    </div>
  );
}

export default Contact;
