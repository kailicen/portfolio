import React, { useEffect, useState } from "react";
import axios from "axios";
import { SocialIcon } from 'react-social-icons';

const About:React.FC = () => {
    const [about, setAbout] = useState<{content: {rendered: string}}>
    ({content: {rendered: ''}});
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        axios.get('https://kailisblog.com/wp-json/wp/v2/pages')
            .then(res => {
                setAbout(res.data[0]);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="about-page">
            {isLoaded? (
                <div className="about-page__content">
                    <div dangerouslySetInnerHTML={{ __html: about.content.rendered }}></div>
                </div>

            )
            : (
            <h3>Loading...</h3>
            )} 
            <div className="about-page__social">
                <SocialIcon url="https://www.linkedin.com/in/kaili-cen-1975b4197/" target='_blank' />
                <SocialIcon url="https://medium.com/@kailicen226" target='_blank' />
                <SocialIcon url="https://www.instagram.com/authenticme1/" target='_blank' />
            </div>
        </div>
    )
}

export default About;