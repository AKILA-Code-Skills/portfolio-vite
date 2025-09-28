import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <section id="resume" className="py-5">
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="fw-bold text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-warning">Resume</span>
        </motion.h2>

        {/* Resume Box */}
        <motion.div
          className="resume-box p-4 rounded shadow-lg bg-dark text-light"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Header */}
          <header className="mb-5 text-center">
            <h1 className="text-warning fw-bold">AKILA LA</h1>
            <p className="small">
              📞 8870387018 &nbsp; | &nbsp; 📧{" "}
              <a
                href="mailto:akilala1703@gmail.com"
                className="text-decoration-none text-warning"
              >
                akilala1703@gmail.com
              </a>{" "}
              <br />
              🔗{" "}
              <a
                href="https://linkedin.com/in/akila-la-14093a374"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-warning"
              >
                LinkedIn
              </a>{" "}
              &nbsp; | &nbsp; 📍 Madurai
            </p>
          </header>

          {/* Two Columns Layout */}
          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-md-6 pe-md-5">
              {/* Summary */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Summary</h4>
                <p>
                  Dedicated and detail-oriented B.Sc. Mathematics with Computer
                  Applications graduate, eager to apply strong analytical,
                  problem-solving, and programming skills. Proficient in Java
                  full-stack development and real-world project implementation.
                </p>
              </section>

              {/* Education */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Education</h4>
                <p>
                  <strong>B.Sc. Mathematics with Computer Applications</strong>
                  <br />
                  Lady Doak College, Madurai
                  <br />
                  <span className="text">2022 – 2025</span>
                </p>
              </section>

              {/* Certificates */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Certificates</h4>
                <ul>
                  <li>Certificate from NIT Trichy</li>
                  <li>Certificate in Digital Marketing</li>
                </ul>
              </section>

              {/* Languages */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Languages</h4>
                <ul>
                  <li>Tamil (Native)</li>
                  <li>English (Fluent)</li>
                </ul>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-md-6 ps-md-5">
              {/* Skills */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Skills</h4>
                <ul>
                  <li>Programming: Java</li>
                  <li>Web: Full Stack Development (Front-End & Back-End)</li>
                  <li>Tools: GitHub, Excel</li>
                  <li>Other: Data Collection, Analytical Thinking, Problem Solving</li>
                </ul>
              </section>

              {/* Academic Project */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Academic Project</h4>
                <p>
                  <strong>
                    Survey on Personal Hygiene Habits among School Students (Grades 1–8)
                  </strong>
                </p>
                <ul>
                  <li>Collected and analyzed hygiene data from school students.</li>
                  <li>Used mathematical and analytical techniques for insights.</li>
                  <li>Connected data to real-world applications.</li>
                </ul>
              </section>

              {/* Courses */}
              <section className="mb-4 p-3 rounded-4 bg-black bg-opacity-50">
                <h4 className="text-warning mb-2">Courses Completed</h4>
                <ul>
                  <li>Java Full Stack Development</li>
                  <li>Front-End & Back-End Development</li>
                  <li>HTML, CSS, JavaScript, Bootstrap, React JS</li>
                  <li>Node JS, PHP, MySQL, NoSQL</li>
                  <li>GitHub & Excel</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-4">
            <motion.a
              href="/resume.pdf"
              download
              className="btn-custom"
              whileHover={{ scale: 1.1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
