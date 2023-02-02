import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  


const BookNotePage:React.FC = () => {
    const { id } = useParams();

    const [bookNote, setBookNotes] = useState<{ 
        title: { rendered: string};
        content: { rendered: string };

    }>({ 
        title: { rendered: ''},
        content: { rendered: '' },
    });
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`https://kailisblog.com/wp-json/wp/v2/booknotes/${id}`)
            .then(res => {
                setBookNotes(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
            
    }, [id])

    return (
    <div className="single-project-page">
      {isLoaded? (
        <div className="post-item">
          <h2>{bookNote.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: bookNote.content.rendered }}></div>
        </div>
      )
      : (
      <h3>Loading...</h3>
      )} 
    </div>
    )
}

export default BookNotePage;