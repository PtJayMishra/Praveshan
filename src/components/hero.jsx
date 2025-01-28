import React from "react";



const HeroSection = () => {
  const heroStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
    padding: "0 24px",
  };

  const headlineStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };

  const taglineStyle = {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "32px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.25rem",
  };

  return (
    <div style={heroStyle}>
      <h1 style={headlineStyle}>Welcome to Praveshan</h1>
      <p style={taglineStyle}>Your Trusted Partner for Seamless Moving Solutions</p>
      <button style={buttonStyle}>Get Started</button>
    </div>
  );
};

export {  HeroSection };

