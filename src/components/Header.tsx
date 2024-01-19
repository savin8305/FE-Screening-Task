import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Navbar from "./Navbar";
import { RxCross1 } from "react-icons/rx";
import SignIn from "./BookDemo";
import CustomModal from "../utils/CustomMadal";
import { format } from "date-fns";
import Login from "./Login";
interface HeaderProps {
  activeHeading: number;
}

const Header: React.FC<HeaderProps> = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  // useState hooks for modal and route state with unique names
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoute, setModalRoute] = useState<string | null>(null);
  const [modalActiveItem, setModalActiveItem] = useState<number | null>(null);

  const handleOpenModal = (newRoute: string, newActiveItem: number) => {
    setModalRoute(newRoute);
    setModalActiveItem(newActiveItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalRoute(null);
    setModalActiveItem(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateCurrentDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      setCurrentDate(formattedDate);
    };

    const intervalId = setInterval(updateCurrentDate, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden md:flex items-center justify-between">
          <div>
            <Link to="/">
              <div className="p-2">Current Date: {currentDate} </div>
            </Link>
          </div>
          <div className="w-[50%] relative text-center">
            🌟 YourPhysio is now FixHealth 🌟
          </div>
          <div className={``}>
            <Link to={`/shop-create`}>
              <h1
                onClick={() => handleOpenModal("SignIn", 1)}
                className="py-2 px-6 text-lg font-semibold rounded-full  transition duration-300  flex items-center"
              >
                book now
                <IoIosArrowForward className="ml-1" />
              </h1>
              {modalRoute === "SignIn" && isModalOpen && (
                <CustomModal
                  open={isModalOpen}
                  setOpen={handleCloseModal}
                  setRoute={setModalRoute}
                  component={SignIn}
                />
              )}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden md:flex items-center justify-between w-full bg-slate-400 h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div></div>
          <div className={`${styles.noramlFlex} flex-row`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]"></div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]"></div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to="/login" onClick={() => handleOpenModal("Login",2)}>
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
                {modalRoute === "Login" && isModalOpen && (
                  <CustomModal
                    open={isModalOpen}
                    setOpen={handleCloseModal}
                    setRoute={setModalRoute}
                    component={Login}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm md:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                className="w-20 h-auto mt-[-1rem]"
                src="https://i.pinimg.com/236x/47/6b/d2/476bd25b770fb745be9a96974e46b41f.jpg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <div className="relative mr-[20px]"></div>
          </div>
        </div>
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center"></span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                />
              </div>
              <Navbar active={activeHeading} />
              <div className={`ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <button className="bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
                    Become a Seller <IoIosArrowForward className="ml-1" />
                  </button>
                </Link>
              </div>
              <br />
              <br />
              <br />
              <div className="flex w-full justify-center">
                <Link
                  to="/SignIn"
                  className="text-[18px] pr-[10px] text-[#000000b7]"
                >
                  SignIn /
                </Link>
                <Link to="/sign-up" className="text-[18px] text-[#000000b7]">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
