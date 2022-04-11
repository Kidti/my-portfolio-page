import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="context">
        <h1>Hello, I'm <span style={{color:"var(--operamauve)"}}>Kitti</span>, <br/> I'm a Junior Frontend Developer.</h1>
        <a href="#about-me">
          <button className="about-me-button">About Me</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
