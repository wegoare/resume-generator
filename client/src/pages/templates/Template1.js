import React from "react";
import "../../resources/templates.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));

  return (
    <div className="template1-parent">
      {/* Header Section */}
      <div className="header-section d-flex justify-content-between align-items-center">
        <div>
          <h1 className="name">
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </h1>
          <p className="job-title">{user.position || "Your Position Here"}</p>
        </div>
        <div className="contact-info text-right">
          <p>
            <i className="fas fa-envelope"></i> {user.email}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> {user.address}
          </p>
          <p>
            <i className="fas fa-phone"></i> {user.mobileNumber}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="divider mt-3"></div>

      {/* Objective Section */}
      <div className="objective-section mt-3">
        <h3>Objective</h3>
        <p>{user.careerObjective}</p>
      </div>

      {/* Education Section */}
      <div className="education-section mt-3">
        <h3>Education</h3>
        {user.education.map((education, index) => (
          <div key={index} className="education-item">
            <h6>
              <b>{education.range}:</b>
            </h6>
            <p>
              <b>{education.qualification}</b> with{" "}
              <b>{education.percentage}%</b> at <b>{education.institution}</b>
            </p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="experience-section mt-3">
        <h3>Experience</h3>
        {user.experience.map((experience, index) => (
          <div key={index} className="experience-item">
            <h6>
              <b>{experience.range}:</b>
            </h6>
            <p>
              <b>{experience.company}</b> in <b>{experience.place}</b>
            </p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="projects-section mt-3">
        <h3>Projects</h3>
        {user.projects.map((project, index) => (
          <div key={index} className="project-item">
            <h6>
              <b>{project.title} [{project.range}]</b>
            </h6>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-3">
        <h3>Skills</h3>
        <div className="skills-list">
          {user.skills.map((skill, index) => (
            <span key={index} className="skill">
              {skill.technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template1;
