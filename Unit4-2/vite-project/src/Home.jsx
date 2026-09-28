import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Deepika</span>
        </h1>

        <h2>Artificial Intelligence and Data Science Student</h2>

        <p>
          I am passionate about programming, web development, UI/UX design
          and data science. I enjoy creating creative and useful projects
          using modern technologies.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn">
            View My Projects
          </Link>

          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="home-card">
        <div className="profile-circle">DS</div>
        <h2>Deepika S</h2>
        <p>AI & Data Science Student</p>
      </div>
    </section>
  );
}

export default Home;