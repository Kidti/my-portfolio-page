import "./Modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal-background">
      <div className="menu">
        <nav>
          <a href="/">
            <h2 onClick={() => setShowModal(false)}>Home</h2>
          </a>
          <a href="#about-me">
            <h2 onClick={() => setShowModal(false)}>About Me</h2>
          </a>
          <a href="#contact">
            <h2 onClick={() => setShowModal(false)}>Contact</h2>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Modal;
