import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="navbar__brand-mark">V</span>
          <div>
            <p>Vinodh</p>
            <span>AI Developer Portfolio</span>
          </div>
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <Link className="navbar__cta" to="/contact" onClick={() => setMenuOpen(false)}>
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
