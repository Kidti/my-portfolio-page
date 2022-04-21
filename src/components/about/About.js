import "./About.css";
import lightbulb from "./lightbulb-icon.png";
import scale from "./honesty-scale.png";
import responsive from "./responsive.png";
import learn from "./learn.png";
import mypic from "./mypic.png";
import skill from "./skills.png";

const About = () => {
  return (
    <div className="about-page" id="about-me">
      <h1>About Me</h1>
      <div className="about-box">
        <div className="icon-box icon-1">
          <img src={learn} alt="icon" />
          <h3>Egaer to learn</h3>
          <p>Constant learning and developing is really motivating for me.</p>
        </div>
        <div className="icon-box icon-2">
          <img src={scale} alt="icon" />
          <h3>Transparent</h3>
          <p>Transparency and trust make it easier to work with people.</p>
        </div>
        <div className="icon-box icon-3">
          <img src={responsive} alt="icon" />
          <h3>Responsive</h3>
          <p>It's important that layouts work on any device, big or small.</p>
        </div>
        <div className="icon-box icon-3">
          <img src={lightbulb} alt="icon" />
          <h3>Intuitive</h3>
          <p>Strong desire for easy to use, intuitive UX/UI.</p>
        </div>

        <div className="textbox">
          <img src={mypic} alt="this-is-me" />
          <p>
            Something interesting about me, some text, but I don't know yet what
            should I write about myself, I am not a very interesting person,
            sooo. Ok but I need to try to amuse the audiance, yeah? Hope you
            agree honey, cuz this year will be our year. Maybe we are not the
            sharpest knife in the drawer but we sure are the funniest.
          </p>
        </div>

        <div className="skills">
          <img src={skill} alt="skills-info" />
        </div>
      </div>
    </div>
  );
};

export default About;
