import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // for preventing scrolling when the modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  // This function will scroll the window to the top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar setShowModal={setShowModal} showModal={showModal} Modal={Modal} />
      <LandingPage />
      <About />
      <Contact scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
