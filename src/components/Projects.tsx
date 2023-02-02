import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProjectItem from "./ProjectItem";

const Projects:React.FC = () => {
    const [projects, setProjects] = useState<[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const res = await axios.get('https://kailisblog.com/wp-json/wp/v2/projects'); 
              setProjects(res.data);
              setIsLoaded(true);
            } catch (err) {
              console.log(`error: ${err}`);
            }
          }
          fetchData();
    }, [])

    return (
        <div className="project-page">
            {isLoaded? (
            <div className="project-container">
                {projects.map((project, index) => (
                <div key={index}><ProjectItem project={project} /></div>
            ))}
            </div>
            )
            : (
            <h3>Loading...</h3>
            )} 
        </div>
    )
}

export default Projects;