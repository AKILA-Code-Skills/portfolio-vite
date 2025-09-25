// src/App.jsx
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImg from './assets/react.svg'; // Replace this with your actual image

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand fw-bold text-white" href="#">
          About<span className="text-warning">Me.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['Home', 'About', 'Service', 'Portfolio', 'Resume', 'Blog', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link mx-2" href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center bg-dark text-white py-5" style={{ minHeight: '90vh' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6">
              <p className="text-warning">Hello, I'm</p>
              <h1 className="display-4 fw-bold">Akila </h1>
                  <h3 >Java Full Stack Dveloper </h3>
              <p className="lead text-secondary">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              </p>
              <button className="btn btn-warning text-dark fw-semibold px-4 mt-3">Contact us</button>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={profileImg}
                alt="Profile"
                className="img-fluid rounded-4 hero-img"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

