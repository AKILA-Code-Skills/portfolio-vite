import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <motion.h2
          className="fw-bold text-center mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About<span className="text-warning"> Me</span> 
        </motion.h2>

        <motion.p
          className="lead text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I’m a frontend developer skilled in{" "}
          <b>React, Bootstrap, and JavaScript</b>. I enjoy building responsive and
          interactive websites that deliver value.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
