import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import "../css/projects.css";
import { IProjectItem, projects } from "../content/projects";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";

const Projects = () => {
  const [detailContent, setDetailContent] =
    useState<IProjectItem | null>(null);

  const showDetails = (item: IProjectItem) => {
    setDetailContent(item);
  };

  return (
    <>
      <div className="container mb-5">
        <div className="project-header">Project Highlights</div>
        <div className="project-wrapper d-flex flex-row flex-wrap align-items-center justify-content-between">
          {projects.map((item: IProjectItem) => {
            return (
              <div
                key={item.title}
                className="card-wrapper"
                onClick={() => showDetails(item)}
              >
                <ProjectCard content={item} />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={
          "blackout" +
          (detailContent ? " blackout-shown" : "")
        }
        onClick={() => setDetailContent(null)}
      ></div>

      <div
        className={
          "detail-modal d-flex flex-column" +
          (detailContent ? " detail-modal-shown" : "")
        }
      >
        {detailContent && (
          <>
            <div className="d-flex justify-content-between">
              <div className="detail-title">
                {detailContent.title}
              </div>
              <button
                type="button"
                className="btn btn-x"
                aria-label="Close project details"
                onClick={() => setDetailContent(null)}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>

            <ProjectDetailModal content={detailContent} />
          </>
        )}
      </div>
    </>
  );
};

export default Projects;