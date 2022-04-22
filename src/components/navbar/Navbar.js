import "./Navbar.css";
import githubLogo from "./github-white.png";

const Navbar = ({ Modal, setShowModal, showModal }) => {
  return (
    <header className="app-header">
      <div className="hamburger-lines" onClick={() => setShowModal(!showModal)}>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p><br/>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p>
      </div>
      <a href="https://github.com/Kidti" target="_blank" rel="noreferrer noopener">
        <img src={githubLogo} alt="github-logo" />
      </a>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </header>
  );
};

export default Navbar;
