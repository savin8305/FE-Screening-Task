import React, { useEffect, useRef, useState } from "react";
import About from "./components/About";
import TeamSlider from "./components/TeamSlider";
import Navbar from "./components/Navbar";
import { Contact, Footer } from "./components";
import "./components/styles/main.scss";
import scrollup from "./assets/scrollup.webp";
const App = () => {
  const jobsRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const data = localStorage.getItem("themeValue");
    setTheme(data === "light" || !data ? "light" : "dark");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (item) => {
    let scrollObject = {};
    switch (item) {
      case "about":
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;

      case "jobs":
        scrollObject = {
          top: jobsRef.current.offsetTop - 70,
          behavior: "smooth",
        };
        break;

      case "projects":
        scrollObject = {
          top: projectsRef.current.offsetTop - 70,
          behavior: "smooth",
        };
        break;

      case "skills":
        scrollObject = {
          top: skillsRef.current.offsetTop - 70,
          behavior: "smooth",
        };
        break;

      case "contact":
        scrollObject = {
          top: contactRef.current.offsetTop - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <main data-theme={theme}>
      <Navbar
        onNavItemClick={handleNavItemClick}
        switchTheme={switchTheme}
        theme={theme}
      />
      <section className="about">
        <About />
      </section>
      <section className="projects" ref={projectsRef}>
        <TeamSlider />
      </section>


      <section className="contact" ref={contactRef}>
        <Contact theme={theme} />
      </section>
      <Footer />
      {isVisible && (
        <img
          src={scrollup}
          alt=""
          className="scroll-up"
          onClick={scrollToTop}
        />
      )}
    </main>
  );
};

export default App;
