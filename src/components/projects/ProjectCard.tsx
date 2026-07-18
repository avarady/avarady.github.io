import React from "react";
import "../../css/projectCard.css";
import { IProjectItem } from "../../content/projects";

const ProjectCard = ({ content }: { content: IProjectItem }) => {
  const previewImage = content.previewImage ?? content.images?.[0];

  return (
    <>
      <div className="card-inner">
        {previewImage && (
          <img
            className="card-img"
            src={previewImage.src}
            alt={previewImage.text || `${content.title} preview`}
          />
        )}
      </div>
      <div className="card-banner">
        <div className="p-3">{content.title}</div>
      </div>
    </>
  );
};

export default ProjectCard;