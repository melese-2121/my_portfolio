import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const inputRef = useRef(null);
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
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
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden lg:h-auto w-full  `}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-black-200 p-8 rounded-2xl w-[75%] mx-auto "
        >
          <h3 className="text-green-400 text-3xl font-bold"> Contact Me.</h3>
          <p className="text-zinc-500 mt-1 mx-1 hover:text-white">
            Feel free, I will read your message.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex  flex-col gap-3"
          >
            <label className="flex flex-col">
              <span className="text-zinc-200  font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                ref={inputRef}
                placeholder=""
                className="bg-black-100 py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-zinc-200  font-medium mb-3">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=""
                className="bg-black-100 py-2 px-6 placeholder:text-secondary text-zinc-200 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-zinc-200 font-medium mb-3">
                Your Message
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=""
                className="text-sm bg-black-100 py-2 px-6 placeholder:text-secondary text-zinc-200 rounded-lg outline-none border-none font-sm"
              />
            </label>

            <div className="flex justify-center items-center w-[75%] mt-5 mb-none mx-auto">
              <button
                type="submit"
                className="py-2 px-4 rounded-xl items-end w-full hover:bg-green-900 outline-none text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
          <StarsCanvas />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 xl:h-auto md:h-[550px] h-[350px]  w-full"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
