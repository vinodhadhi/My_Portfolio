import { Link } from "react-router-dom";
import "./Thank.css";

const Thank = () => {
  return (
    <section className="thank page-section">
      <div className="thank__card section-shell">
        <div className="eyebrow">Message sent</div>
        <h1 className="section-title">Thanks for reaching out.</h1>
        <p className="section-copy">
          Your message has been noted. I&apos;ll get back with the same energy and care
          you brought to the conversation.
        </p>
        <Link className="primary-button" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default Thank;
