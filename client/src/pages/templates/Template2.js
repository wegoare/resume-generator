import React from "react";
import "../../resources/templates.css";

function Template2() {
  // Safely parse the user data
  const user = JSON.parse(localStorage.getItem("sheyresume-user")) || {};

  return (
    <div>
      <div className="template1-parent">
        {/* Header Section */}
        <div className="top d-flex justify-content-between flex-column">
          <h1>
            {user.firstName ? user.firstName.toUpperCase() : "FIRSTNAME"}{" "}
            {user.lastName ? user.lastName.toUpperCase() : "LASTNAME"}
          </h1>
          <div>
            <p>{user.email || "example@mail.com"}</p>
            <p>{user.address || "Your Address Here"}</p>
            <p>{user.mobileNumber || "Your Phone Number Here"}</p>
          </div>
        </div>

        {/* Dividers */}
        <div className="divider mt-3"></div>
        <div className="divider mt-1"></div>

        {/* Objective Section */}
        <div className="objective mt-3">
          <h3 style={{ backgroundColor: "gray", padding: 10 }}>Objective</h3>
          <hr />
          <p>{user.careerObjective || "Your career objective goes here."}</p>
        </div>

        <div className="divider mt-3"></div>

        {/* Education Section */}
        <div className="education mt-3">
          <h3 style={{ backgroundColor: "gray", padding: 10 }}>Education</h3>
          <hr />
          {user.education && user.education.length > 0 ? (
            user.education.map((education, index) => (
              <div key={index} className="d-flex align-items-center">
                <h6 style={{ width: 100 }}>
                  <b>{education.range}:</b>
                </h6>
                <p>
                  <b>{education.qualification}</b> with{" "}
                  <b>{education.percentage || "N/A"}%</b> in{" "}
                  <b>{education.institution || "Your Institution"}</b>
                </p>
              </div>
            ))
          ) : (
            <p>No education details available.</p>
          )}
        </div>

        <div className="divider mt-3"></div>

        {/* Experience Section */}
        <div className="experience mt-3">
          <h3 style={{ backgroundColor: "gray", padding: 10 }}>Experience</h3>
          <hr />
          {user.experience && user.experience.length > 0 ? (
            user.experience.map((exp, index) => (
              <div key={index} className="d-flex align-items-center">
                <h6 style={{ width: 100 }}>
                  <b>{exp.range}:</b>
                </h6>
                <p>
                  <b>{exp.company || "Your Company"}</b> in{" "}
                  <b>{exp.place || "Your Location"}</b>
                </p>
              </div>
            ))
          ) : (
            <p>No experience details available.</p>
          )}
        </div>

        <div className="divider mt-3"></div>

        {/* Projects Section */}
        <div className="projects mt-3">
          <h3 style={{ backgroundColor: "gray", padding: 10 }}>Projects</h3>
          <hr />
          {user.projects && user.projects.length > 0 ? (
            user.projects.map((project, index) => (
              <div key={index} className="d-flex flex-column">
                <h6>
                  <b>
                    {project.title || "Project Title"} [
                    {project.range || "Your Timeline"}]
                  </b>
                </h6>
                <p>{project.description || "Project description goes here."}</p>
              </div>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>

        <div className="divider mt-3"></div>

        {/* Skills Section */}
        <div className="skills mt-3">
          <h3 style={{ backgroundColor: "gray", padding: 10 }}>Skills</h3>
          <hr />
          {user.skills && user.skills.length > 0 ? (
            user.skills.map((skill, index) => (
              <p key={index} className="d-flex flex-column">
                {skill.technology || "Skill Name"}
              </p>
            ))
          ) : (
            <p>No skills available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template2;
