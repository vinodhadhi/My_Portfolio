import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Photos from "./Pages/Photos/Photos";
import Thank from "./Pages/Thank/Thank";
import Cart from "./Pages/Cart/Cart";

const featuredProjects = [
  {
    id: "tomato-ai",
    category: "Computer Vision",
    title: "AI-Driven Tomato Disease Prediction",
    description:
      "A deep-learning project focused on recognizing plant disease patterns and suggesting useful management actions.",
    highlight: "TensorFlow, image classification, real-world agriculture workflow",
    link: "https://github.com/vinodhadhi/AI-Driven-Tomato-Disease-Prediction-and-Management-System",
  },
  {
    id: "clinical-support",
    category: "Healthcare AI",
    title: "Clinical Disease Support System",
    description:
      "A machine learning support tool that helps translate symptom inputs into meaningful prediction guidance.",
    highlight: "Prediction pipeline, structured inputs, medical decision support thinking",
    link: "https://github.com/vinodhadhi/CLINICAL-DISEASE-SUPPORT-SYSTEM",
  },
  {
    id: "portfolio-ui",
    category: "Frontend Engineering",
    title: "Modern Portfolio Experience",
    description:
      "A responsive React portfolio built with animation, layout hierarchy, and production-style contact handling.",
    highlight: "React, routing, EmailJS contact flow, responsive visual system",
    link: "https://github.com/vinodhadhi",
  },
  {
    id: "utility-apps",
    category: "JavaScript Apps",
    title: "Clock and Calculator Utilities",
    description:
      "Smaller projects that sharpened interaction logic, live updates, and clean user interface structure.",
    highlight: "Vanilla JavaScript, UI fundamentals, interaction accuracy",
    link: "https://github.com/vinodhadhi",
  },
];

const App = () => {
  return (
    <div className="app-shell">
      <div className="app-shell__glow app-shell__glow--one" />
      <div className="app-shell__glow app-shell__glow--two" />
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Card projects={featuredProjects} />} />
          <Route path="/products" element={<Card projects={featuredProjects} />} />
          <Route path="/skills" element={<Photos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/success" element={<Thank />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
