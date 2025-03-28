import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center">
          {/* Navigation Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Social Media Links */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-light mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>

          {/* Copyright */}
          <Col md={4}>
            <h5>© {new Date().getFullYear()} Your Company</h5>
            <p>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
