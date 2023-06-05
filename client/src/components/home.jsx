import React from "react";
import { Link } from "react-router-dom";
const HomePage = () =>{
    return(
       <>
       <div className='Home'>
           <h1>"Blogging is good for your career. A well-executed blog sets you apart as an expert in your field. "</h1>
           <span>~Penelope Trunk</span>
           <Link to="/signin"><button className="nav-btn">Publish Your blog</button></Link>
       </div>
       </>
    )
}

export default HomePage;