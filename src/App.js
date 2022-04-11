import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = ''
    }
  }, [showModal])

  return (
    <div className="App">
      <Navbar setShowModal={setShowModal} showModal={showModal} Modal={Modal} />
      <LandingPage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
