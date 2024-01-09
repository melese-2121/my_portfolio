import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { my_photo } from "../assets";
import MessageButton from "./MessageButton";

const Contact = () => {
  const inputRef = useRef(null);
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [directContactMethod, setDirectContactMethod] = useState(true);

  () => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  },
    [];

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleContact = () => {
    setDirectContactMethod((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 id="contact" className={styles.sectionHeadText}>
        Contact.
      </h3>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden lg:h-auto w-full  `}
      >
        {!directContactMethod ? (
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-1 bg-black-200  p-8 rounded-2xl w-[75%] mx-auto  "
          >
            <div className="flex justify-between ">
              <h3 className="text-green-400 text-3xl max-sm:-ml-3  font-bold">
                Contact Me.
              </h3>
            </div>
            <p className="text-zinc-500 mt-1 mx-1 hover:text-white ">
              Feel free, I will read your message.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex  flex-col gap-1 mt-10 lg:mx-5 "
            >
              <label className="flex flex-col font-medium text-zinc-300 text-lg font-sans mb-3">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                ref={inputRef}
                className="bg-black-100 py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />

              <label className="flex flex-col text-zinc-300 text-lg font-sans mb-3">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-black-100 py-2 px-6 placeholder:text-secondary text-zinc-200 rounded-lg outline-none border-none font-medium"
              />

              <label className="flex flex-col text-zinc-300 text-lg font-sans mb-3">
                Your Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="text-sm bg-black-100 py-2 px-6 placeholder:text-secondary text-zinc-200 rounded-lg outline-none border-none font-sm"
              />

              <div className="flex justify-center items-center w-[75%] mt-5 mb-none mx-auto">
                <button
                  type="submit"
                  className="py-2 px-4 rounded-xl items-end  border-teal-800 w-full hover:bg-teal-600 bg-opacity-40 outline-none text-white font-bold shadow-md shadow-primary"
                  style={{ border: "1px teal solid" }}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
            <MessageButton
              toggleContact={toggleContact}
              directContactMethod={directContactMethod}
            />

            <StarsCanvas />
          </motion.div>
        ) : (
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-1 bg-black-200  p-8 rounded-2xl w-[75%] mx-auto "
          >
            <div className="flex justify-between items-center">
              <h3 className="flex-1 max-sm:-ml-3 text-green-400 text-3xl  font-bold">
                Contact Me.
              </h3>
            </div>
            <div className="w-full flex justify-center items-center max-md:mt-3 md:mt-6">
              <div className="max-md:h-[90px] max-md:w-[90px] md:h-[120px] md:w-[120px]">
                <img
                  src={my_photo}
                  alt="My Photo"
                  className="rounded-full w-full h-full"
                />
              </div>
            </div>
            <div className=" flex-col justify-start items-start max-sm:ml-5 max-lg:ml-14 lg:ml-24  ">
              <p className="font-mono text-lg mt-10">
                Phone No. :{" "}
                <span className="text-teal-600 font-mono">+251943379308</span>
              </p>
              <p className="font-mono text-lg mt-5">
                Email :{" "}
                <span className="text-teal-600  font-mono">
                  meleseayen2016@gmail.com
                </span>
              </p>
              <p className="font-mono text-lg mt-5">
                Telegram username :{" "}
                <span className="text-teal-600  font-mono">just_me1111</span>
              </p>
            </div>
            <MessageButton
              toggleContact={toggleContact}
              directContactMethod={directContactMethod}
            />

            <StarsCanvas />
          </motion.div>
        )}

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="max-sm:ml-24 max-md:ml-32 max-lg:ml-40 max-xl:ml-56 flex justify-center items-center xl:h-auto  h-[350px]  w-1/2"
        >
          <EarthCanvas isMobile={isMobile} />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
