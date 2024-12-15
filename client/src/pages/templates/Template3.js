import React from "react";
import "../../resources/templates2.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));

  return (
    <div className="template1-parent">
      {/* Header Section */}
      <div className="top d-flex justify-content-between align-items-center border-bottom pb-3">
        <div>
          <h1 className="name">
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </h1>
          <p className="position">{user.position || "Your Position Here"}</p>
        </div>
        <div className="contact-info text-right">
          <p><b>Email:</b> {user.email}</p>
          <p><b>Address:</b> {user.address}</p>
          <p><b>Phone:</b> {user.mobileNumber}</p>
        </div>
      </div>

      {/* Objective Section */}
      <section className="objective mt-4">
        <h3 className="section-title">Objective</h3>
        <p className="section-content">{user.careerObjective}</p>
      </section>

      {/* Education Section */}
      <section className="education mt-4">
        <h3 className="section-title">Education</h3>
        {user.education.map((education, index) => (
          <div key={index} className="education-item d-flex align-items-start mt-2">
            <h6 className="date-range"><b>{education.range}</b></h6>
            <div className="details ml-3">
              <p>
                <b>{education.qualification}</b> with <b>{education.percentage}%</b> 
                from <b>{education.institution}</b>
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="experience mt-4">
        <h3 className="section-title">Experience</h3>
        {user.experience.map((exp, index) => (
          <div key={index} className="experience-item d-flex align-items-start mt-2">
            <h6 className="date-range"><b>{exp.range}</b></h6>
            <div className="details ml-3">
              <p>
                Worked at <b>{exp.company}</b> ({exp.place})
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="projects mt-4">
        <h3 className="section-title">Projects</h3>
        {user.projects.map((project, index) => (
          <div key={index} className="project-item mt-2">
            <h6>
              <b>{project.title}</b> <span className="text-muted">({project.range})</span>
            </h6>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="skills mt-4">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          {user.skills.map((skill, index) => (
            <li key={index}>{skill.technology}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Template1;
