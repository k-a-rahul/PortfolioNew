import React, { useRef, useState } from "react";
import { Toaster } from "./Toaster";
import emailjs from "@emailjs/browser";
import { isValidData } from "../exports";

const serviceId = "service_x7wpv5i";
const templateId = "template_veov5tc";
const publicKey = "Iq7kRUHjE5bv9OZ3v";
const warn = "bg-red-500";
const success = "bg-green-500";

function Form({label}) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = userdata;

    const notify = ({ message, bg }) =>toastref.current.showToast({ message: `${message}`, bg: `${bg}` });

    if (!isValidData(name) || !isValidData(email) || !isValidData(message)) {
      notify({ message: "All Fields are Required", bg: warn });
    } else if (name.length < 4 || name.length > 20) {
      notify({ message: "Enter valid Name", bg: warn });
    } else if (!email.endsWith(".com") || !email.includes("@")) {
      notify({ message: "Please Enter valid Mail id", bg: warn });
    } else if (!isValidData(message)) {
      notify({ message: "Enter a Valid message to send!", bg: warn });
    } else if (message.length < 10 || message.length > 500) {
      notify({
        message: "Minimum 10 words and Max 500 Words are allowed",
        bg: warn,
      });
    } else {
      try {
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        );
        if (response.status === 200) {
          notify({
            message: `Thanks ${name}, Will Contact You Shortly.`,
            bg: success,
          });
          setUserdata({ name: "", email: "", message: "" });
        } else {
          notify({ message: response.text, bg: warn });
        }
      } catch (error) {
        notify({ message: error, bg: warn });
      }
    }
  };

  return (
    <>
      <Toaster ref={toastref} />
      <div className="w-[95%] md:w-[50%]">
        <form
          ref={form}
          className="bg-lightergray w-full h-full flex flex-col justify-start shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label className="block text-white text-2xl font-bold mb-2">
            {label ? label:"Let's have a Talk on this.."}
          </label>
          <div className="w-[75%] mb-4">
            <input
              onChange={handleChange}
              value={userdata.name}
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-slate-200 delay-75 transition-all"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-[75%] mb-6">
            <input
              onChange={handleChange}
              value={userdata.email}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:bg-slate-200 delay-75 transition-all"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-[90%] h-[150px] mb-6">
            <textarea
              value={userdata.message}
              onChange={handleChange}
              inputMode="text"
              // required={true}
              placeholder="Message"
              name="message"
              id="message"
              className="overflow-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:bg-slate-200 delay-75 transition-all min-h-[100px] max-h-[150px] resize-y"
            ></textarea>
          </div>
          {
            <button
            onClick={handleSubmit}
            className="overflow-hidden group w-[50%] h-[40px] md:w-[30%] md:h-[42px] rounded-md text-sm text-white bg-teal-600 hover:bg-teal-700 flex justify-center items-center gap-1 text-center"
            >
            {'Send Message'}
          </button>
          }
        </form>
      </div>
    </>
  );
}

export default Form;
