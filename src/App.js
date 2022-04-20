import "./App.css";
import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
import FadeInSection from "./components/fade-in-section/FadeInSection";

function App() {
  const [showModal, setShowModal] = useState(false);

  // for preventing scrolling when the modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  // This function will scroll the window to the top
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
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Contact scrollToTop={scrollToTop} />
      </FadeInSection>
    </div>
  );
}

export default App;
