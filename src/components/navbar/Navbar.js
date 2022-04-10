import "./Navbar.css";

const Navbar = ({ Modal, Link, setShowModal, showModal }) => {
  return (
    <header className="app-header">
      <div className="hamburger" onClick={() => setShowModal(!showModal)}>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p>
        <p className={!showModal ? "hamburger-open" : "hamburger-close"}></p>
      </div>
      <h1>Right</h1>
      {showModal && <Modal Link={Link} setShowModal={setShowModal} />}
    </header>
  );
};

export default Navbar;
