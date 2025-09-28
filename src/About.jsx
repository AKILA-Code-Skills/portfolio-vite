import React, { useState } from "react";
import { motion } from "framer-motion";
import myImage from "../src/assets/flower.webp";

function About() {
  // Skills with initial values
  const [skills, setSkills] = useState({
    HTML: 95,
    CSS: 90,
    JavaScript: 80,
    Bootstrap: 85,
    Photoshop: 60,
  });

  // Update when range slider is moved
  const handleChange = (skill, value) => {
    setSkills({ ...skills, [skill]: value });
  };

  return (
    <section id="about" className="py-5 about-section">
      <div className="container">
        {/* Title */}
        <motion.h2
          className="fw-bold text-center mb-4 section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-warning">Me</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="lead text-center section-subtitle"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
  "Hi, I'm Akila, a 21-year-old Java Full Stack Developer. With a strong foundation in mathematics and computer applications, I'm passionate about crafting innovative solutions and delivering high-quality projects.

  Currently, I'm enhanced my skills at E-careerPluz, where I'm honing my expertise in Java Full Stack development, web development, and problem-solving."
            </motion.p>
    

        {/* Content Row */}
        <div className="row align-items-center mt-5">
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <motion.img
              src={myImage}
              alt="Profile"
              className="img-fluid about-img rounded shadow"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            />
          </div>

          {/* Info + Skills */}
          <div className="col-md-7 text-center text-md-start">
            <motion.h3
              className="about-role"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Java Full Stack & Web Developer
            </motion.h3>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
            I'm passionate Front-end developer skilled in building responsive and modern websites
             using HTML,CSS,Bootstrap, Java script and React JS and backend of MySQL,Java, Spring Boot,NOSQL,MongoDB.
            </motion.p>

            {/* Info List */}
            <div className="row info-list">
              <div className="col-md-6">
                <p><strong>Name:</strong> Akila LA</p>
                <p><strong>Age:</strong> 21</p>
                <p><strong>Role:</strong> Java Full Stack Developer</p>
              </div>
              <div className="col-md-6">
                <p><strong>Phone:</strong> +91 8870387018</p>
                <p><strong>Email:</strong> akilala1703@gmail.com</p>
                <p><strong>Location:</strong> Madurai, India</p>
              </div>
            </div>

            {/* Skills with Interactive Sliders */}
            <div className="mt-4">
              {Object.entries(skills).map(([skill, value], index) => {
                const colors = ["danger", "info", "warning", "primary", "success"];
                const color = colors[index % colors.length];
                return (
                  <motion.div
                    key={skill}
                    className="mb-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="d-flex justify-content-between">
                      <p className="skill-title mb-1">{skill}</p>
                      <span className={`text-${color} fw-bold`}>{value}%</span>
                    </div>
                    <input
                      type="range"
                      className={`form-range range-${color}`}
                      min="0"
                      max="100"
                      value={value}
                      onChange={(e) => handleChange(skill, e.target.value)}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Signature */}
            <motion.p
              className="signature text-end mt-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
          
            </motion.p>
          </div>
        </div>
      </div>

      {/* Range Custom Styles */}
      <style jsx>{`
        .form-range {
          height: 6px;
          cursor: pointer;
        }
        .form-range::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .form-range:hover::-webkit-slider-thumb {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.6);
        }
        .range-danger::-webkit-slider-thumb { background-color: #dc3545; }
        .range-info::-webkit-slider-thumb { background-color: #0dcaf0; }
        .range-warning::-webkit-slider-thumb { background-color: #ffc107; }
        .range-primary::-webkit-slider-thumb { background-color: #0d6efd; }
        .range-success::-webkit-slider-thumb { background-color: #198754; }
      `}</style>
    </section>
  );
}

export default About;
