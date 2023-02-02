import React from "react";
import { Link } from "react-router-dom";


const Home:React.FC = () => {
    return (
    <div className="home-page">

        <div className="hero-content">
            <div className='hero-content__div'>Hello, I'm Kaili.</div>
            <div className='hero-content__div'>I build websites, flip perspectives,</div>
            <div className='hero-content__div'>and leveling up daily.</div>
            <Link className="hero-content__link" to={"/about/"}>Learn More</Link>
        </div>
        
    </div>
    )
}

export default Home;