import "./Photos.css";

const skillGroups = [
  {
    title: "AI and Machine Learning",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Model Training",
      "Prediction Systems",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "React Router",
    ],
  },
  {
    title: "Tools and Workflow",
    items: [
      "Git and GitHub",
      "REST API Integration",
      "State Management",
      "UI Design Thinking",
      "Problem Solving",
      "Project Building",
    ],
  },
];

const Photos = () => {
  return (
    <section className="photo page-section">
      <div className="photo__layout">
        <div className="photo__content section-shell">
          <div className="eyebrow">Skills</div>
          <h1 className="section-title">A skill set centered on AI, frontend craft, and practical project building.</h1>
          <p className="section-copy">
            This section now reflects your actual stack more clearly, from Python and
            machine learning work to React-based interfaces and portfolio-ready product
            development.
          </p>
        </div>

        <div className="photo__cards">
          {skillGroups.map((group) => (
            <article className="photo__card section-shell" key={group.title}>
              <h2>{group.title}</h2>
              <div className="photo__list">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
