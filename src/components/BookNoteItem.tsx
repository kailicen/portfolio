import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


interface BookNote {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number; 
}

interface Props {
  booknote: BookNote;
}

const BookNoteItem: React.FC<Props> = ({ booknote }) => {
  const { id, title, excerpt, featured_media } = booknote;
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
          <Link to={`/booknotes/${id}`} className='booknote-link'>
        <div className="booknote-item">
          <img className="booknote-item__img" src={imgUrl} alt={title.rendered} />
          <div className="booknote-item__content">
            <h3>{title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
          </div>
        </div>
        </Link>

      )
      : (
      <h3>Loading...</h3>
      )} 
    </div>
  );
};


export default BookNoteItem;
