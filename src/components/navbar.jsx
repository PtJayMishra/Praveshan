import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "black",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  const menuStyle = {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  };
  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "white",
    color: "#007bff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s",
  };
  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
    color: "white",
  };
  const linkStyle = {
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    textDecoration: "none",
    color: "white",
    transition: "color 0.3s",
  };


  const handleScroll = () => {
    document.getElementById("contact-Us").scrollIntoView({ behavior: "smooth" });
  };


  return (
    <nav style={navStyle}>
      <div style={logoStyle}><a href="/" style={linkStyle} > <h1>Praveshan</h1></a> </div>
      <div style={menuStyle}>
      <Link to="/contactUs">  <button  style={buttonStyle}>
            Contact Us
          </button>
          </Link>
        
        <Link to="/cities">
          <button
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.target.style.color = buttonHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#007bff';
            }}
          >
            Cities
          </button>
        </Link>
        <button 
          style={buttonStyle} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.color = buttonHoverStyle.color;
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#007bff";
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;