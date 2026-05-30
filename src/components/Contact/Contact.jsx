import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41fpep3",
        "template_9tcjqlh",
        form.current,
        "zOzQTXOc01hdOpD0W"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  if (success) {
    return (
      <section className="thank-you-page">
        <div className="thank-you-content">
          <h1>🎉 Thank You!</h1>

          <p>
            Your message has been sent successfully.
          </p>

          <p>
            Thank you for visiting my portfolio.
          </p>

          <p>
            I will get back to you as soon as possible.
          </p>

          <button
            className="back-btn"
            onClick={() => setSuccess(false)}
          >
            Back to Portfolio
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <div className="info-card">
          <FaUser />
          <span>Hanumanthu Swathi</span>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <span>
            hanumanthuswathi24@gmail.com
          </span>
        </div>

        <div className="info-card">
          <FaPhone />
          <span>+91 7382740244</span>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Write Your Message Here..."
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;