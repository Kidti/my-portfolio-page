import "./Contact.css";
import arrow from "./uparrow.png";

const Contact = ({scrollToTop}) => {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2 id="contact">Contact</h2>
        <img onClick={scrollToTop} src={arrow} alt="up-arrow" />
      </div>
    </div>
  );
};

export default Contact;
