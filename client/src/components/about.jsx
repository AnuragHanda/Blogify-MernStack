import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
const About = ()=>{
    return(
        <>
        <div className="About">
        <div className='About-header'>
            <h1>About Blogify</h1>
        </div>
        <div className="About-Content">
            <div>
                <p>Platform for Online Publishing. Where you may read about job openings, career guidance, insider information from experts, and new features and goods.
                With our fact-based articles and career advice, we've got you covered</p>
            </div>
            <div className="cardDiv">
                <div className='card'>
                <p>Write</p>
                    <span className='card-content'>
                        Write and share your blogs with the world.
                    </span>
                    
                </div>
                <div className='card'>
                <p>Carrers</p>
                    <span className='card-content'>
                        Read About Some Carrer Tips
                    </span>
                    
                </div>
                <div className='card'>
                <p>Jobs</p>
                    <span className='card-content'>
                        Get Updated with Latest jobs.
                    </span>
                </div>
                <div className='card'>
                <p>Technologies</p>
                    <span className='card-content'>
                        Read about Latest Technology released in market.
                    </span>
                </div>
            </div>   
        </div>
        <div>
           <Link to="/signin"> <button className="About-btn">Write blog</button></Link>
        </div>
        </div>
        </>
    );
}

export default About;