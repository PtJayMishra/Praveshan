import React from "react";

const Footer = () => {
    const footerStyle = {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      borderTop: "1px solid #ddd",
    };
  
    const sectionStyle = {
      flex: "1 1 200px",
      margin: "10px",
    };
  
    const headingStyle = {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    };
  
    const linkStyle = {
      color: " Grey",
      textDecoration: "none",
      display: "block",
      marginBottom: "6px",
    };
  
    const copyrightStyle = {
      flexBasis: "100%",
      textAlign: "center",
      marginTop: "20px",
      fontSize: "0.9rem",
      color: "#6c757d",
    };
  
    return (
      <footer style={footerStyle}>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Products</h4>
          <a href="#" style={linkStyle}>Residential Moving</a>
          <a href="#" style={linkStyle}>Commercial Moving</a>
          <a href="#" style={linkStyle}>Packing Services</a>
        </div>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p>Phone: +91 9575702649</p>
          <p>Email: contact@praveshanmoving.com</p>
          <p>Address:  Maple Tree , Jail Road , Bhopal</p>
        </div>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>About</h4>
          <a href="#" style={linkStyle}>Our Team</a>
          <a href="#" style={linkStyle}>Careers</a>
          <a href="#" style={linkStyle}>FAQs</a>
        </div>
        <div style={copyrightStyle}>
          © 2025 Praveshan <br /> All rights reserved.
        </div>
      </footer>
    );
  };

  export default Footer;