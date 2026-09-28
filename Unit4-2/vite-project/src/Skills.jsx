function Skills() {
  const skills = [
    "Java",
    "Python",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "UI/UX Design",
    "Data Structures",
    "OOPs",
    "Data Science"
  ];

  return (
    <section className="page">
      <h1>My Skills</h1>

      <p className="page-intro">
        These are some of the technologies and areas I am learning and
        working with.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-number">0{index + 1}</div>
            <h2>{skill}</h2>
            <p>
              Learning and improving my knowledge in {skill}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;