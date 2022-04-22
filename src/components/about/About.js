import "./About.css";
import lightbulb from "./lightbulb-icon.png";
import scale from "./honesty-scale.png";
import responsive from "./responsive.png";
import learn from "./learn.png";
import mypic from "./mypic.png";
import skill from "./skills.png";
import kittipic from "./kitti.png";

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

        <div className="my-story">
          <img className="mypic" src={kittipic} alt="this-is-me" />
          <div className="textbox">
            <p>
              Hi! I'm Kitti, I am a Budapest based passionate wanting to be a
              professional in a lot of frontend related things.
              <br />I really hope that I will be able to build pages that are
              not like those pages... You know, when you leave more frustrated
              than satisfied after your time spent on the internet. I have
              serious passion for learning UI effects, animations and creating
              intuitive, dynamic user experiences.
              <br />
              It would be a great honour if you had the resources to smooth the
              path of a newbie, and you'll see how grateful she'll be
              afterwards. Also, some say I'm not so boring. Thank you for
              visiting my page!
              <br />
              UI: if you feel frustrated by my site, please feel free to share
              your thoughts and opinions on possible improvements. Thank you
              very much.
            </p>
          </div>
        </div>

        <div className="skills">
          <img src={skill} alt="skills-info" />
        </div>
      </div>
    </div>
  );
};

export default About;
