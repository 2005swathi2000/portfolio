import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>B.Tech - Information Technology</h3>

          <p className="college">
            Aditya College of Engineering & Technology
          </p>

          <p>Surampalem, Andhra Pradesh</p>

          <p>CGPA: 8.30</p>

          <p>2023 - Present</p>
        </div>

        <div className="education-card">
          <h3>Intermediate (MPC)</h3>

          <p className="college">
            Sri Sai Aditya Junior College
          </p>

          <p>Danavaipeta, Rajahmundry</p>

          <p>2021 - 2023</p>
        </div>

        <div className="education-card">
          <h3>SSC</h3>

          <p className="college">
            Surya Deep English Model High School
          </p>

          <p>Completed in 2021</p>
        </div>

      </div>
    </section>
  );
}

export default Education;