import "./Card.css";

const Card = ({ projects }) => {
  return (
    <section className="products page-section">
      <div className="products__hero section-shell">
        <div className="eyebrow">Projects</div>
        <h1 className="section-title">Selected work with AI, frontend craft, and useful product thinking.</h1>
        <p className="section-copy">
          The fake product feed is gone. This section now highlights real portfolio
          work and the kinds of systems you want people to associate with your name.
        </p>
      </div>

      <div className="card-container">
        {projects.map((project) => (
          <article className="card" key={project.id}>
            <div className="card__media">
              <span className="card-category">{project.category}</span>
              <h2 className="card-title">{project.title}</h2>
            </div>

            <div className="card-body">
              <p className="card-description">{project.description}</p>
              <div className="card-rating">
                <span>Focus</span>
                <span>{project.highlight}</span>
              </div>
              <div className="card__footer">
                <a
                  className="card-btn"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Card;
