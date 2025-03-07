import React from "react";
import "../../resources/templates.css";

function Template1() {
  // Safely parse user data from localStorage
  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("sheyresume-user")) || {};
  } catch (error) {
    console.error("Error parsing user data:", error);
  }

  return (
    <div className="template1-parent">
      {/* Header Section */}
      <div className="header-section d-flex justify-content-between align-items-center">
        <div>
          <h1 className="name">
            {user?.firstName?.toUpperCase() || "FIRSTNAME"} {" "}
            {user?.lastName?.toUpperCase() || "LASTNAME"}
          </h1>
          <p className="job-title">{user?.position || "Your Position Here"}</p>
        </div>
        <div className="contact-info text-right">
          <p>
            <i className="fas fa-envelope"></i> {user?.email || "example@mail.com"}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> {user?.address || "Your Address"}
          </p>
          <p>
            <i className="fas fa-phone"></i> {user?.mobileNumber || "Your Phone Number"}
          </p>
        </div>
      </div>

      <div className="divider mt-3"></div>

      {/* Objective Section */}
      <div className="objective-section mt-3">
        <h3>Objective</h3>
        <p>{user?.careerObjective || "Your career objective goes here."}</p>
      </div>

      {/* Education Section */}
      <div className="education-section mt-3">
        <h3>Education</h3>
        {user?.education?.length > 0 ? (
          user.education.map((education, index) => (
            <div key={index} className="education-item">
              <h6>
                <b>{education?.range || "Year Range"}:</b>
              </h6>
              <p>
                <b>{education?.qualification || "Qualification"}</b> with {" "}
                <b>{education?.percentage || "N/A"}%</b> at {" "}
                <b>{education?.institution || "Your Institution"}</b>
              </p>
            </div>
          ))
        ) : (
          <p>No education details available.</p>
        )}
      </div>

      {/* Experience Section */}
      <div className="experience-section mt-3">
        <h3>Experience</h3>
        {user?.experience?.length > 0 ? (
          user.experience.map((experience, index) => (
            <div key={index} className="experience-item">
              <h6>
                <b>{experience?.range || "Year Range"}:</b>
              </h6>
              <p>
                <b>{experience?.company || "Your Company"}</b> in {" "}
                <b>{experience?.place || "Your Location"}</b>
              </p>
            </div>
          ))
        ) : (
          <p>No experience details available.</p>
        )}
      </div>

      {/* Projects Section */}
      <div className="projects-section mt-3">
        <h3>Projects</h3>
        {user?.projects?.length > 0 ? (
          user.projects.map((project, index) => (
            <div key={index} className="project-item">
              <h6>
                <b>{project?.title || "Project Title"} [{project?.range || "Your Timeline"}]</b>
              </h6>
              <p>{project?.description || "Project description goes here."}</p>
            </div>
          ))
        ) : (
          <p>No project details available.</p>
        )}
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-3">
        <h3>Skills</h3>
        {user?.skills?.length > 0 ? (
          <div className="skills-list">
            {user.skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill?.technology || "Skill Name"}
              </span>
            ))}
          </div>
        ) : (
          <p>No skills available.</p>
        )}
      </div>
    </div>
  );
}

export default Template1;
