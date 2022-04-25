import { useState } from "react";
import "./Textbox.css";
import kittipic from "../about/kitti.png";

const Textbox = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="textbox">
      <img className="mypic" src={kittipic} alt="this-is-me" />

      <p>
        Hi! I'm <span style={{ color: "var(--redviolet)" }}>Kitti</span>, I am a
        Budapest based passionate wanting to be a professional in a lot of
        frontend related things...
        <br />
        {readMore && (
          <p className={readMore ? "" : "text"}>
            I really hope that I will be able to build pages that are not like
            those pages... You know, when you leave more frustrated than
            satisfied after your time spent on the internet. I have serious
            passion for learning UI effects, animations and creating intuitive,
            dynamic user experiences.
            <br />
            It would be a great honour if you had the resources to smooth the
            path of a newbie, and you'll see how grateful she'll be afterwards.
            Also, some say I'm not so boring.
            <br />
            UI: if you feel frustrated by my site, please feel free to share
            your thoughts and opinions on possible improvements.
            <br />{" "}
        
        <span style={{ color: "var(--redviolet)" }}>
          Thank you for visiting my page!
        </span>
        </p>
        )}
      </p>
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? <p>Show Less</p> : <p>Read More</p>}
      </button>
    </div>
  );
};

export default Textbox;
