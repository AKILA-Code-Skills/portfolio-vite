import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="text-warning">Touch</span>
        </motion.h2>

        <motion.form
          className="col-md-6 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="form-control mb-3"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="form-control mb-3"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            rows="4"
            placeholder="Your Message"
            className="form-control mb-3"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="btn-custom"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
