import React from "react";

const pricingOptions = [
  {
    title: "Residential Moving",
    price: "Affordable Rates",
    features: [
      "Safe Handling",
      "Expert Movers",
      "Timely Delivery",
    ],
  },
  {
    title: "Commercial Moving",
    price: "Competitive Pricing",
    features: [
      "Office Relocation",
      "Specialized Equipment",
      "Minimal Downtime",
    ],
  },
  {
    title: "Packing Service",
    price: "Custom Packages",
    features: [
      "Quality Materials",
      "Professional Packing",
      "Damage-Free Guarantee",
    ],
  },
];

const Services = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    padding: "24px",
  };

  const cardStyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const priceStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#007bff",
  };

  const featureListStyle = {
    listStyleType: "none",
    padding: 0,
    marginBottom: "16px",
  };

  const featureStyle = {
    color: "#4a4a4a",
    marginBottom: "8px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "Black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      {pricingOptions.map((option, index) => (
        <div key={index} style={cardStyle}>
          <div>
            <h3 style={titleStyle}>{option.title}</h3>
            <p style={priceStyle}>{option.price}</p>
            <ul style={featureListStyle}>
              {option.features.map((feature, idx) => (
                <li key={idx} style={featureStyle}>{feature}</li>
              ))}
            </ul>
            <button style={buttonStyle}>Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
