import React, { useEffect, useState } from "react";
import axios from "axios";
import BookNoteItem from './BookNoteItem';

const BookNotes:React.FC = () => {
    const [bookNotes, setBookNotes] = useState<[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const res = await axios.get('https://kailisblog.com/wp-json/wp/v2/booknotes'); 
              setBookNotes(res.data);
              setIsLoaded(true);
            } catch (err) {
              console.log(`error: ${err}`);
            }
          }
          fetchData();
    }, [])

    return (
        <div>
            {isLoaded? (
            <div className="booknote-container">
            <div className="booknote-container__info">
              <h2>Kaili's Book Notes</h2>
              <p>Reading for change, not just knowledge. My book notes will be actionable steps for personal growth, 
                not just chapter summaries. Empowerment through self-education, not just information.</p>
            </div>
                {bookNotes.map((booknote, index) => (
                <div key={index}><BookNoteItem booknote={booknote} /></div>
            ))}
            </div>
            )
            : (
            <h3>Loading...</h3>
            )} 
        </div>
    )
}

export default BookNotes;