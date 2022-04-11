import "./Navbar.css";
import githubLogo from "./github-logo.png";

const Navbar = ({ Modal, Link, setShowModal, showModal }) => {
  return (
    <header className="app-header">
      <div className="hamburger-lines" onClick={() => setShowModal(!showModal)}>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p><br/>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p>
      </div>
      <a href="https://github.com/Kidti" target="_blank" rel="noreferrer noopener">
        <img src={githubLogo} alt="githubLogo" />
      </a>
      {showModal && <Modal Link={Link} setShowModal={setShowModal}/>}
    </header>
  );
};

export default Navbar;
