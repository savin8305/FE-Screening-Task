import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import SignIn from "./BookDemo";
import CustomModal from "../utils/CustomMadal";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };
  // useState hooks for modal and route state with unique names
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("SignIn");

  return (
    <motion.div
      className=" grid grid-cols-1 md:grid-cols-2 h-screen about"
    >
      <motion.div className="relative z-10 flex flex-col justify-center items-center  text-center p-4 md:p-8">
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="hover-2 animation-container text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-8 leading-tight text-purple-300"
        >
          Transforming Healthcare Through Innovation
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl mb-6 leading-relaxed text-blue-500"
        >
          Embrace the Future of Medical Solutions
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeInOut" }}
          onClick={() => {
            setOpen(true);
          }}
          className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full text-md sm:text-xl md:text-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition duration-300 inline-block mb-8"
        >
          Book a Demo
        </motion.div>
        {route === "SignIn" && open && (
          <CustomModal
            open={open}
            setOpen={setOpen}
            setRoute={setRoute}
            component={SignIn}
          />
        )}
        <motion.div
          className="flex items-center justify-center text-white text-center mb-8"
          {...stagger}
        >
          <motion.div {...fadeInUp} className="-mr-5">
            <img
              src="https://i.pinimg.com/236x/2d/e1/31/2de13156a6f24393144f7576d15a5407.jpg"
              alt="Client Image 1"
              className="rounded-full border-r-slate-900"
              width={50}
              height={50}
            />
          </motion.div>
          <motion.div {...fadeInUp} className="-mr-5">
            <img
              src="https://i.pinimg.com/236x/46/fb/ba/46fbba48b9b525d2a15cdee7f97c705a.jpg"
              alt="Client Image 2"
              className="rounded-full border-r-slate-900"
              width={50}
              height={50}
            />
          </motion.div>
          <motion.div {...fadeInUp} className="-mr-6">
            <img
              src="https://i.pinimg.com/236x/6f/bd/19/6fbd193306877879469d068759143368.jpg"
              alt="Client Image 3"
              className="rounded-full border-r-slate-900"
              width={50}
              height={50}
            />
          </motion.div>
          <p className="px-8 text-lg dark:text-purple-100 text-blue-500">
            Revolutionizing healthcare with innovative solutions. Explore our
            services.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 hidden dark:border-l-teal-50 md:block relative border-l-teal-50 overflow-hidden col-span-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 dark:bg-white mix-blend-multiply"
        />
        <img
          src="https://res.cloudinary.com/drk8b0kev/image/upload/v1705643716/30e1f9502b61efcc271f610d7cd1dc52-removebg-preview_s7geoq.png"
          alt="Education Illustration"
          className="dark:z-1000 h-50 w-50 "
          width={600}
          height={600}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
