import React from "react";
import { motion } from "framer-motion";
import myImage from "../src/assets/akimainimg.jpg"; // Correct path

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center vh-100 text-center"
    >
      <div className="container">
        {/* Heading */}
        <motion.h1
          className="fw-bold display-4 mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-warning">Akila</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h3
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Frontend Developer | React Enthusiast | Problem Solver
        </motion.h3>

        {/* Profile Image with Animation */}
        <motion.img
          src={myImage}
          alt="Profile"
          className="rounded-circle shadow-lg my-4"
          width="220"
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }} // single animate prop
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href="#projects" className="btn-custom me-3">
            View My Work
          </a>
          <a href="#contact" className="btn-custom">
            Hire Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <a
            href="https://linkedin.com/in/akila-la-14093a374"
            target="_blank"
            rel="noreferrer"
            className="me-3 text-warning fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:akilala1703@gmail.com"
            className="me-3 text-warning fs-4"
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-warning fs-4"
          >
            <i className="bi bi-github"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
