import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">My Portfolio</a>
        <div>
          <a className="nav-link text-white d-inline px-3" href="#home">Home</a>
          <a className="nav-link text-white d-inline px-3" href="#about">About</a>
          <a className="nav-link text-white d-inline px-3" href="#projects">Projects</a>
          <a className="nav-link text-white d-inline px-3" href="#resume">Resume</a>
          <a className="nav-link text-white d-inline px-3" href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;