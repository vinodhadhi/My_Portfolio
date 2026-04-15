import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const values = Object.values(formData).map((value) => value.trim());
    if (values.includes("")) {
      setSubmitError("Please fill in all fields before sending.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("EmailJS is not configured yet. Add your VITE_EMAILJS values in the .env file.");
      return;
    }

    try {
      setIsSending(true);
      setSubmitError("");

      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          full_name: `${formData.firstName} ${formData.lastName}`.trim(),
          phone: formData.contact,
          email: formData.email,
          message: formData.message,
          submitted_at: new Date().toLocaleString(),
        },
        {
          publicKey,
        }
      );

      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        message: "",
      });

      navigate("/success");
    } catch (error) {
      setSubmitError("Message sending failed. Please verify your EmailJS template settings and try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact page-section">
      <div className="contact__layout">
        <div className="contact__info section-shell">
          <div className="eyebrow">Contact</div>
          <h1 className="section-title">Let&apos;s build something sharp, useful, and memorable.</h1>
          <p className="section-copy">
            If you have an internship, freelance opportunity, or a project idea in AI
            or full-stack development, I&apos;d love to hear about it.
          </p>

          <div className="contact__points">
            <div className="contact__point">
              <span>Email</span>
              <strong>vinodhraja25@gmail.com</strong>
            </div>
            <div className="contact__point">
              <span>Focus</span>
              <strong>AI systems, React apps, product delivery</strong>
            </div>
            <div className="contact__point">
              <span>Response style</span>
              <strong>Clear, collaborative, and solution-oriented</strong>
            </div>
          </div>
        </div>

        <div className="contact__card section-shell">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__split">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="tel"
              name="contact"
              placeholder="Phone number"
              value={formData.contact}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your idea, role, or project."
              value={formData.message}
              onChange={handleChange}
            />

            {submitError ? <p className="contact__error">{submitError}</p> : null}

            <button
              className="primary-button contact__submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send message"}
            </button>

            <p className="contact__hint">
              EmailJS template variables used here: <code>first_name</code>,{" "}
              <code>last_name</code>, <code>full_name</code>, <code>phone</code>,{" "}
              <code>email</code>, <code>message</code>, and <code>submitted_at</code>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
