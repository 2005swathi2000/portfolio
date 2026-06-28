import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>Swathi</h3>

      <div className="footer-icons">

        <a href="https://github.com/2005swathi2000" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/swathi-hanumanthu-817265291/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:swathi.nannalu20@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p>
        © 2026 Swathi. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;