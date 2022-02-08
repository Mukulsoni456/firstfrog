import React from "react";
import video from "../assets/video.mp4";
import './projects.css'
function Projects() {
  return (
    <div className="projects">
        <div className="projects_container">
      <video src={video} loop controls autoPlay muted width={200} height={400}></video>
      <div className="project_info">
          <h2>CREATE CONTENT</h2>
          <p>We create best quality content with creative and modern mindset</p>
          <h2>CONNECT WITH PEOPLE</h2>
          <p>We work on the people's emotion and create relatable and engagable content</p>
          <h2>CAPTURE THE WIDER AUDIENCE</h2>
          <p>We have a team of professional marketor who knows which platform is best for your business and target the specific audience</p>
      </div>
      </div>
    </div>
  );
}

export default Projects;
