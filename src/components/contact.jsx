import React from "react";

const ContactUs = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#333",
  };

  const infoStyle = {
    fontSize: "1.1rem",
    marginBottom: "12px",
    color: "#4a4a4a",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Contact Us</h2>
      <p style={infoStyle}>
        <strong>Phone:</strong>{" "}
        <a href="tel:+919575702649" style={linkStyle}>
          +91 9575702649
        </a>
      </p>
      <p style={infoStyle}>
        <strong>Email:</strong>{" "}
        <a href="mailto:contact@praveshanmoving.com" style={linkStyle}>
          contact@praveshanmoving.com
        </a>
      </p>
      <p style={infoStyle}>
        <strong>Address:</strong> Maple Tree, Jail Road, Bhopal
      </p>
    </div>
  );
};

export default ContactUs;
