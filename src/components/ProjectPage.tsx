import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
  


const ProjectPage:React.FC = () => {
    const { id } = useParams();

    const [project, setProject] = useState<{ 
        title: { rendered: string};
        content: { rendered: string };
        acf: { link: string };

    }>({ 
        title: { rendered: ''},
        content: { rendered: '' },
        acf: { link: '' }
    });
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`https://kailisblog.com/wp-json/wp/v2/projects/${id}`)
            .then(res => {
                setProject(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
            
    }, [id])

    return (
    <div className="single-project-page">
      {isLoaded? (
        <div className="post-item">
          <h2>{project.title.rendered}</h2>
          <a className="single-project__link" href={project.acf.link} target="_blank" rel="noopener noreferrer">Link: {project.acf.link}</a>
          <div dangerouslySetInnerHTML={{ __html: project.content.rendered }}></div>
        </div>
      )
      : (
      <h3>Loading...</h3>
      )} 
    </div>
    )
}

export default ProjectPage;