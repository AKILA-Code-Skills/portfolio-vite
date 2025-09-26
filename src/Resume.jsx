import React from 'react';

function Resume() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <h2>Resume</h2>
      <p>Here you can add your experience, education, and skills.</p>
      <a href="/resume.pdf" download className="btn btn-warning btn-custom">Download Resume</a>
    </section>
  );
}

export default Resume;
