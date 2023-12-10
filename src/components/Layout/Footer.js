import React from "react";
import { Link } from "react-router-dom";
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoProductHunt } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; Shivam katiyar </h1>
      <div className="text-center">  
      <Link to="https://github.com/shivam151"><FaGithub size={20} color="cyan"/> </Link>
      <Link to="https://www.linkedin.com/in/shivam-katiyar-3286a7220/"><ImLinkedin2 size={20} color="cyan"/> </Link>
      <Link to="https://www.facebook.com/"><FaFacebook size={20} color="cyan"/> </Link>
      <Link to="/"><BiLogoProductHunt size={20} color="cyan"/> </Link>
         
        </div>
   
      
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;