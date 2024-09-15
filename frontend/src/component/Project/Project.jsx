import React, { useContext, useEffect, useState } from "react";
import "./Project.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../api/ProjectApi";

const Project = () => {
  const { data: projectList, loading, error } = getAllProjects();

  const sortedProjects = projectList
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by timeStamp (newest first)
    .slice(0, 6); // to display only six

  return (
    <div className="project">
      <div className="container">
        <div className="project_title">
          <h2>Our Initiative</h2>
          <div
            style={{
              width: "100px",
              height: "5px",
              background: "var(--pri_color)",
              margin: "20px auto 50px auto",
            }}
          ></div>
        </div>
        <div className="project_grid">
          {sortedProjects.map((item, index) => {
            return (
              <ProjectItem
                key={index}
                id={item._id}
                title={item.title}
                description={item.description}
                images={item.image1}
                timeStamp={item.createdAt}
              />
            );
          })}
        </div>
        <div className="see_btn">
          <Link to='/ourInitiative'>
            <button>
              See More <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
