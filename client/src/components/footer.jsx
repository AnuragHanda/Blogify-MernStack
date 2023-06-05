import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Footer-Area">
        <div className="Footer">
          <div>
            <Link to="/" style={{textDecoration : "none", color: "white"}}>
              <h2>Blogify</h2>
            </Link>
          </div>
          <div>
            <ul className="Social-Footer-li">
              <li>
                <a href="http://github.com/AnuragHanda">
                  <i className="fab fa-github Footer-icons"></i>
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/in/Anurag Handa">
                  <i className="fab fa-linkedin-in Footer-icons"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/_AnuragHanda_">
                  <i className="fab fa-twitter Footer-icons"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-hr">
          <hr />
          
          <p style={{ textAlign: "center", color: "white", margin: "12px 0" }}>
            Made by Developers for Bloggers
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
