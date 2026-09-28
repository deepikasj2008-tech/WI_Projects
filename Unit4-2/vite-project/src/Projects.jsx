function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description:
        "A database-based project for managing student information, courses and departments.",
      tech: "MySQL • DBMS"
    },
    {
      title: "Smart Budget Planner",
      description:
        "A web application for tracking income, expenses and managing personal budgets.",
      tech: "HTML • CSS • JavaScript"
    },
    {
      title: "Attendance Tracker",
      description:
        "A simple application to calculate attendance percentage and manage student attendance.",
      tech: "React • CSS • JavaScript"
    },
    {
      title: "Travel Tourism Website",
      description:
        "A tourism platform for exploring destinations, restaurants, transportation and travel services.",
      tech: "React • JavaScript • CSS"
    },
    {
      title: "Daily Health Log",
      description:
        "A simple tracker for recording daily activities, water intake and health-related information.",
      tech: "React • CSS"
    },
    {
      title: "Portfolio Website",
      description:
        "A multi-page personal portfolio created using React and React Router DOM.",
      tech: "React • React Router • CSS"
    }
  ];

  return (
    <section className="page">
      <h1>My Projects</h1>

      <p className="page-intro">
        Here are some of my academic and personal projects.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span>PROJECT {index + 1}</span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech">{project.tech}</div>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;