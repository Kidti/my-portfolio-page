import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div class="area">
        <ul class="circles">
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
        <h1>Hello, I'm Kitti, I'm a Junior Frontend Developer.</h1>
        <a href="#about-me">
          <button>About Me</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
