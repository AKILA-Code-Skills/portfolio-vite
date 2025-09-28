import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light ">
      <div className="container">
        <motion.h2 
          className="fw-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My<span className="text-warning">  Projects</span>
        </motion.h2>
        <div className="row">
          <motion.div 
            className="col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">A React & Bootstrap based personal portfolio.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">E-commerce App</h5>
                <p className="card-text">React-based shopping app with cart and checkout.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;