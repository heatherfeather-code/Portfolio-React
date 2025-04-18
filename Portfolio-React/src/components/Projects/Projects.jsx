import { useState, useEffect } from "react";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]); // <-- create a state variable

  useEffect(() => {
    const getProjects = async () => {
      try {
        let response = await fetch(
          "https://http5222-assignment1.onrender.com/projects/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let data = await response.json();
        console.log(data);
        setProjects(data); // <-- save the data to state
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getProjects();
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Languages: {project.languages}</p>
            <p>Link: <a className="linkText" href={project.link} target="_blank">{project.name}</a></p>
          </div>
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
}
