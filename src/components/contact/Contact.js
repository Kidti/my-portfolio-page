import "./Contact.css";
import arrow from "./uparrow.png";
import githubLogo from "./github-logo.png";
import linkedin from "./linkedin.png";

const Contact = ({ scrollToTop, showButton }) => {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2 id="contact">Contact</h2>
        <p>e-mail: <a href="mailto:kitti.deb@gmail.com">kitti.deb@gmail.com</a></p>
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
          <p>
            Szasz-Debreczeni Kitti{" "}
            <span style={{ color: "var(--operamauve)" }}>@2022</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
