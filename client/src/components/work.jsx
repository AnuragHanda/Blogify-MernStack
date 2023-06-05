// import axios from "axios";
// import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import '../App.css';
// const Work = () =>{
//     const [blog,setBlog] = useState([])
//     const fetchBlogData = async () =>{
//         await axios.get('/api/Getblog').then((data) =>{
//             setBlog(data.data);
//         })
//     }
//     useEffect(() => {
//         fetchBlogData();
//     }, [])
//     return(
//         <>
//         <div className="Work-bg">
//             {blog.map((myblog)=>{
//                 return(
//                     <div key={myblog._id}>
//                         <img src={myblog.BlogImage} height="200px" width="100%" style={{borderRadius : '10px', objectFit : 'cover'}} alt="Blogart" />
//                         <h3>{myblog.BlogTitle}</h3>
//                         <Link to={`readblog/${myblog._id}`}><button className="Work-btn">Read</button></Link>
//                     </div>
//                 )
//             })}
//         </div>
//         </>
//     )
// }
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Work = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const fetchBlogData = async () => {
    await axios.get("/api/Getblog").then((response) => {
      setBlogs(response.data);
      filterBlogs(response.data, searchQuery);
    });
  };

  const filterBlogs = (blogs, query) => {
    const filtered = blogs.filter((blog) =>
      blog.BlogTitle.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  useEffect(() => {
    fetchBlogData();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterBlogs(blogs, e.target.value);
  };

  return (
   <>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="Work-bg">
        {filteredBlogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          filteredBlogs.map((myblog) => {
            return (
              <div key={myblog._id}>
                <img
                  src={myblog.BlogImage}
                  height="200px"
                  width="100%"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                  alt="Blogart"
                />
                <h3>{myblog.BlogTitle}</h3>
                <Link to={`readblog/${myblog._id}`}>
                  <button className="Work-btn">Read</button>
                </Link>
              </div>
            );
          })
        )}
      </div>
   </>
  );
};

export default Work;
