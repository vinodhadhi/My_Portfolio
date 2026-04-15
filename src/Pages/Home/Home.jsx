import { Link } from "react-router-dom";
import "./Home.css";

const metrics = [
  { value: "10+", label: "Projects shipped" },
  { value: "AI + Web", label: "End-to-end focus" },
  { value: "Fast", label: "Product-minded delivery" },
];

const expertise = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "React",
  "JavaScript",
  "API Integration",
];

const Home = () => {
  return (
    <section className="home page-section">
      <div className="home__grid">
        <div className="home__content section-shell">
          <div className="eyebrow">Available for internships and freelance work</div>
          <h1 className="section-title">
            Building intelligent products with clean design and practical AI.
          </h1>
          <p className="section-copy">
            I'm Vinodh Adhi, an AI and frontend-focused developer who enjoys turning
            ambitious ideas into usable software. I work across machine learning,
            deep learning, Python-based project building, and modern React interfaces
            that feel clean, responsive, and purposeful.
          </p>

          <div className="chip-row">
            {expertise.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="home__actions">
            <Link className="primary-button" to="/about">
              Explore my work
            </Link>
            <Link className="secondary-button" to="/contact">
              Start a project
            </Link>
          </div>

          <div className="home__socials">
            <a href="https://github.com/vinodhadhi" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vinodh-s-96aa74322/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/vinodhadhi/" target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </div>

        <div className="home__spotlight">
          <div className="home__panel section-shell">
            <p className="home__panel-label">Now focusing on</p>
            <h2>Applied AI products, sleek UI systems, and scalable app workflows.</h2>
            <p>
              I like building projects that feel strong both technically and visually,
              from prediction systems to product-ready web apps.
            </p>

            <div className="home__metrics">
              {metrics.map((item) => (
                <div className="home__metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="home__mini-card section-shell">
            <div>
              <p className="home__panel-label">Signature style</p>
              <h3>Readable interfaces, thoughtful motion, and practical engineering.</h3>
            </div>
            <Link className="secondary-button" to="/products">
              View featured builds
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
