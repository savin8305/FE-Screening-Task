import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import toast from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const Login: FC<Props> = ({ setRoute, setOpen }) => {
  const [show, setShow] = useState(false);

  const handleSignIn = async () => {
    // Simulate sign-in logic
    try {
      // Your sign-in logic here
      // Example: const response = await signIn("credentials", { ... });
      toast.success("Login Successful");
      setOpen(false);
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Invalid user information");
    }
  };

  const eyeIconColor = show ? "#4C51BF" : "#718096";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full projects  max-w-md mx-auto p-4 mt-10 rounded-md"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-center text-black"
      >
        WELCOME BACK
      </motion.h1>
      <form className="space-y-4">
        <div className="mb-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-3 relative">
          <div className="relative flex items-center">
            <input
              type={!show ? "password" : "text"}
              name="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 pr-10"
            />
            <div className="absolute right-2 cursor-pointer">
              {show ? (
                <AiOutlineEye
                  size={20}
                  onClick={() => setShow(false)}
                  color={eyeIconColor}
                />
              ) : (
                <AiOutlineEyeInvisible
                  size={20}
                  onClick={() => setShow(true)}
                  color={eyeIconColor}
                />
              )}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
        <div className="text-center mt-3">
          <h5 className="text-xs md:text-sm font-Poppins text-gray-500">
            Or sign in with
          </h5>
          <div className="flex item-center justify-center mt-2">
            <FcGoogle
              size={40}
              className="text-black cursor-pointer mr-1 transform hover:scale-110"
              onClick={() => handleSignIn()} // Replace with actual Google sign-in logic
            />
            <AiFillGithub
              size={40}
              className="text-black cursor-pointer ml-2 transform hover:scale-110"
              onClick={() => handleSignIn()} // Replace with actual GitHub sign-in logic
            />
          </div>
        </div>
        <h5 className="text-center text-black pt-2 font-Poppins text-xs md:text-sm">
          Don't have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign Up
          </span>
        </h5>
      </form>
      <br />
    </motion.div>
  );
};

export default Login;
