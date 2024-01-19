import React, { useState } from "react";
import Login from "./Login";
import CustomModal from "../utils/CustomMadal";

interface NavbarProps {
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  // useState hooks for modal and route state with unique names
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoute, setModalRoute] = useState(null);
  const [modalActiveItem, setModalActiveItem] = useState(null);

  const handleOpenModal = (newRoute: any, newActiveItem: any) => {
    setModalRoute(newRoute);
    setModalActiveItem(newActiveItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalRoute(null);
    setModalActiveItem(null);
  };

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line line1"}></div>
          <div className={showSidebar ? "line line-2" : "line line2"}></div>
          <div className={showSidebar ? "line line-3" : "line line3"}></div>
        </div>

        <p className="navbar_name">
          <img
            src={
              theme === "light"
                ? "https://i.pinimg.com/236x/cd/1c/01/cd1c016fcd1af1f8b06482c107ee7620.jpg"
                : " https://i.pinimg.com/236x/8f/82/7f/8f827fda47aa22ade388b7c5e23a3c26.jpg"
            }
            alt=""
            onClick={switchTheme}
          />
          <span>HealthCare</span>
        </p>
        <div className="navbar_list">
          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("about")}
          >
            Home
          </p>
          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("projects")}
          >
            Testinomial
          </p>
          <p
            className="navbar_list_item"
            onClick={() => onNavItemClick("contact")}
          >
            Contact
          </p>{" "}
          <p
            className="navbar_list_item"
            onClick={() => handleOpenModal("Login",2)}          >
            Login
          </p>
          {modalRoute === "Login" && isModalOpen && (
            <CustomModal
              open={isModalOpen}
              setOpen={handleCloseModal}
              setRoute={setModalRoute}
              component={Login}
            />
          )}
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick("about")}>
          Home
        </p>

        <p className="sidebar_item" onClick={() => onNavItemClick("projects")}>
          Testinomial
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("skills")}>
          Contact{" "}
        </p>
        <p className="sidebar_item" onClick={() => handleOpenModal("Login",2)}>
          Login
        </p>
      </div>
    </>
  );
};

export default Navbar;
