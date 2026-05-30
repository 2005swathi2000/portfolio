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

        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaLinkedin />
        </a>

        <a href="#">
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