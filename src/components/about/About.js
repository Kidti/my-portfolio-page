import "./About.css";
import lightbulb from "./lightbulb-icon.png";
import scale from "./honesty-scale.png";
import responsive from "./responsive.png";
import learn from "./learn.png";
import skill from "./skills.png";
import kittipic from "./kitti.png";
import Textbox from "./Textbox";

const About = () => {
  return (
    <div className="about-page" id="about-me">
      <h1>About Me</h1>

      <div className="about-box">
        <div className="icon-box icon-1">
          <img className="icon" src={learn} alt="icon" />
          <h3>Eager to learn</h3>
          <p>Constant learning and developing is really motivating for me.</p>
        </div>
        <div className="icon-box icon-2">
          <img className="icon" src={scale} alt="icon" />
          <h3>Transparent</h3>
          <p>Transparency and trust make it easier to work with people.</p>
        </div>
        <div className="icon-box icon-3">
          <img className="icon" src={responsive} alt="icon" />
          <h3>Responsive</h3>
          <p>It's important that layouts work on any device, big or small.</p>
        </div>
        <div className="icon-box icon-3">
          <img className="icon" src={lightbulb} alt="icon" />
          <h3>Intuitive</h3>
          <p>Strong desire for easy to use, intuitive UX/UI.</p>
        </div>

        <Textbox/>
        
        <img className="skills-info" src={skill} alt="skills-info" />

      </div>
    </div>
  );
};

export default About;
