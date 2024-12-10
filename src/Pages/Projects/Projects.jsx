import { useState, useEffect } from "react";
import './Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the projects JSON data
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Projects</h2>
            <section id="main-topic">
                <div className="projects">
                    {projects.map((project, index) => (
                        <dl className="item" key={index}>
                            <dt>{project.title}</dt>
                            <dd>{project.description}</dd>
                            <dd>
                                Url: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </dd>
                        </dl>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
