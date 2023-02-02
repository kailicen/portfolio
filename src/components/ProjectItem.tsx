import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


interface Project {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number; 
}

interface Props {
  project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  const { id, title, excerpt, featured_media } = project;
  const [imgUrl, setImgUrl] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  axios.get(`https://kailisblog.com/wp-json/wp/v2/media/${featured_media}`)
        .then(res => {
          setImgUrl(res.data.source_url);
          setIsLoaded(true);
        })
        .catch(err => console.log(err));

  
  return (
    <div>
      {isLoaded? (
          <Link to={`/projects/${id}`} className="project-link">
        <div className="project-item">
          <img className="project-img" src={imgUrl} alt={title.rendered} />
          <h3>{title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
        </div>
        </Link>

      )
      : (
      <h3>Loading...</h3>
      )} 
    </div>
  );
};


export default ProjectItem;
