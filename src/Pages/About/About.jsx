import { Link } from "react-router-dom";
import "./About.css";

const projects = [
  {
    title: "AI-Driven Tomato Disease Prediction & Management System",
    description:
      "Built a deep-learning workflow that detects tomato leaf diseases and recommends management actions with a practical farmer-first mindset.",
    tag: "Computer Vision",
    link: "https://github.com/vinodhadhi/AI-Driven-Tomato-Disease-Prediction-and-Management-System",
  },
  {
    title: "Clinical Disease Support System",
    description:
      "Created a machine learning decision support experience that transforms symptom inputs into useful disease predictions and guidance.",
    tag: "Healthcare AI",
    link: "https://github.com/vinodhadhi/CLINICAL-DISEASE-SUPPORT-SYSTEM",
  },
  {
    title: "Digital Clock App",
    description:
      "A lightweight UI project focused on real-time behavior, crisp visual layout, and JavaScript fundamentals.",
    tag: "Frontend",
    link: "https://github.com/vinodhadhi/CLOCK",
  },
  {
    title: "Calculator App",
    description:
      "A clean arithmetic tool with a simple interface, useful for showcasing interaction logic and reliable state handling.",
    tag: "JavaScript",
    link: "https://github.com/vinodhadhi/Calculator",
  },
];

const strengths = [
  "Building AI features people can actually use",
  "Turning rough ideas into polished UI flows",
  "Writing maintainable frontend and backend code",
];

const About = () => {
  return (
    <section className="about page-section">
      <div className="about__intro section-shell">
        <div>
          <div className="eyebrow">About me</div>
          <h1 className="section-title">Design-minded development with an AI core.</h1>
        </div>
        <p className="section-copy">
          I enjoy building products where engineering and user experience support
          each other. My work usually lives at the intersection of machine learning,
          full-stack implementation, and interfaces that feel clear, calm, and modern.
        </p>
        <div className="about__strengths">
          {strengths.map((item) => (
            <div className="about__strength-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="about__projects">
        {projects.map((project) => (
          <article className="about__project-card section-shell" key={project.title}>
            <span className="about__project-tag">{project.tag}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </div>

      <div className="about__cta section-shell">
        <div>
          <div className="eyebrow">Collaboration</div>
          <h2>Looking for someone who can handle both intelligence and interface?</h2>
        </div>
        <Link className="primary-button" to="/contact">
          Hire me
        </Link>
      </div>
    </section>
  );
};

export default About;
