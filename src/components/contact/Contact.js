import "./Contact.css";
import FadeInSection from "../fade-in-section/FadeInSection"
import arrow from "./up-arrow.png";
import githubLogo from "./github-white.png";
import linkedin from "./linkedin-logo.png";

import ContactForm from "./ContactForm";

const Contact = ({ scrollToTop }) => {
  return (
      <div className="contact-page">
        <FadeInSection>
        <div className="contact-box">
          <h2 id="contact">Contact</h2>
          <ContactForm/><p>...or click here:</p>
          <p className="e-mail">e-mail: <a href="mailto:kitti.deb@gmail.com">kitti.deb@gmail.com</a></p>
          <div className="footer">
            <img className="up-arrow" onClick={scrollToTop} src={arrow} alt="up-arrow" />
            <div className="social-icons-box">
              <a href="https://www.linkedin.com/in/kitti-debreczeni-4a6688117/" target="_blank" rel="noreferrer noopener">
                <img className="linkedin-logo" src={linkedin} alt="linkedin-logo" />
              </a>
              <a href="https://github.com/Kidti" target="_blank" rel="noreferrer noopener">
                <img className="github-logo" src={githubLogo} alt="github-logo" />
              </a>
            </div>
            <p className="copyright">
              Szasz-Debreczeni Kitti{" "}
              <span style={{ color: "var(--redviolet)" }}>Ⓒ2022</span>
            </p>
          </div>
        </div>
        </FadeInSection>
      </div>
  );
};

export default Contact;
