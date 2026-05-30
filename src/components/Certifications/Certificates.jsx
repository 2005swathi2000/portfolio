import "./Certificates.css";

function Certificates() {
  const certificates = [
    "AWS Cloud Foundations",
    "AWS Cloud Architecting",
    "Full Stack Development",
    "Java Programming",
    "Python Programming",
  ];

  return (
    <section
      id="certifications"
      className="certifications"
    >
      <h2>Certifications</h2>

      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;