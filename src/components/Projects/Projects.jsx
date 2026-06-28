import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "StudyCircle",
      description:
        "Full-stack collaborative learning workspace developed using React.js, Node.js, Express.js and MongoDB, enabling real-time resource sharing and student collaboration.",
      github:
        "https://github.com/2005swathi2000/StudyCircle---Collaborative-Learning-Workspace",
    },

    {
      title: "DevMind-AI",
      description:
        "AI-driven coding workspace featuring background job processing, interactive environments, code reviews, and integrated AI assistant chatbot. Built with Angular, Spring Boot, MySQL, and Gemini AI.",
      github:
        "https://github.com/2005swathi2000/DevMind-AI",
    },

    {
      title: "Hotel Management System",
      description:
        "Java-based desktop application for customer management, room allocation and hotel operations.",
      github:
        "https://github.com/2005swathi2000/Hotel_Management_System",
    },

    {
      title: "Student Management System",
      description:
        "C++ application for managing student records and academic information.",
      github:
        "https://github.com/2005swathi2000/Student-Management-System",
    },

    {
      title: "To-Do List Python",
      description:
        "Command-line task management application built using Python.",
      github:
        "https://github.com/2005swathi2000/To-Do-List-Python",
    },

    {
      title: "Gym Website",
      description:
        "Responsive gym website built using HTML, CSS and Bootstrap.",
      github:
        "https://github.com/2005swathi2000/Gym-Website",
    },

    {
      title: "Retail Sales Analysis",
      description:
        "Business analytics project using Python, Pandas and Data Visualization.",
      github:
        "https://github.com/2005swathi2000/FUTURE_DS_Task01",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;