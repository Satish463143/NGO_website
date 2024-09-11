import React, { useContext } from "react";
import "./Project.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Project = () => {
  const { projectList } = useContext(StoreContext);
  const sortedProjects = projectList
    .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)) // Sort by timeStamp (newest first)
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
                id={item.id}
                title={item.title}
                description={item.description}
                images={item.images}
                timeStamp={item.timeStamp}
              />
            );
          })}
        </div>
        <div className="see_btn">
          <Link>
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