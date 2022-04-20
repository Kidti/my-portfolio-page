import "./About.css";
import icon from "./icon.png";
import mypic from "./mypic.png"
import skill from "./skills.png"

const About = () => {
  return (
    <div className="about-page" id="about-me">
        <h1>About Me</h1>
      
      <div className="about-box">

          <div className="icon-box icon-1"><img src={icon} alt="icon" /><p>Transparent</p></div>
          <div className="icon-box icon-2"><img src={icon} alt="icon" /><p>Honest</p></div>
          <div className="icon-box icon-3"><img src={icon} alt="icon" /><p>Responsive</p></div>
          <div className="icon-box icon-3"><img src={icon} alt="icon" /><p>Intuitive</p></div>

        <div className="textbox">

          <img src={mypic} alt="this-is-me"/>
          <p>
            Something interesting about me, some text, but I don't know yet what
            should I write about myself, I am not a very interesting person,
            sooo. Ok but I need to try to amuse the audiance, yeah? Hope you
            agree honey, cuz this year will be our year. Maybe we are not the
            sharpest knife in the drawer but we sure are the funniest.
          </p>

        </div>

        <div className="skills">
          <img src={skill} alt="skills-info"/>
        </div>

      </div>
    </div>
  );
};

export default About;
