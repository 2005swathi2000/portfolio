import "./Skills.css";
import teddy from "../../assets/teddy.png";

import {
  FaPython,
  FaJava,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiReact,
} from "react-icons/si";

const skills = [
  { name: "Python", percent: 90, icon: <FaPython /> },
  { name: "Java", percent: 85, icon: <FaJava /> },
  { name: "JavaScript", percent: 85, icon: <SiJavascript /> },
  { name: "React JS", percent: 80, icon: <SiReact /> },
  { name: "AWS", percent: 75, icon: <FaAws /> },
  { name: "SQL", percent: 85, icon: <SiMysql /> },
  { name: "Git & GitHub", percent: 85, icon: <FaGithub /> },
  { name: "HTML & CSS", percent: 95, icon: <FaHtml5 /> },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <span className="tag">WHAT I KNOW</span>

        <h1>
          My <span>Skills</span>
        </h1>

        <p>
          Here are the technologies and tools I work with
          to build scalable and impactful applications.
        </p>
      </div>

      <div className="skills-content">

        <div className="skills-image">
          <img src={teddy} alt="teddy" />
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>

              <div
                className="circle"
                style={{
                  background: `conic-gradient(
                  #22d3ee ${skill.percent * 3.6}deg,
                  #112240 0deg
                )`,
                }}
              >
                <div className="inner-circle">
                  {skill.percent}%
                </div>
              </div>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Skills;