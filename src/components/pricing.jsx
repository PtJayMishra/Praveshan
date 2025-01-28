import React from "react";
 

const pricingOptions = [
  {
    title: "Residental Moving",
    price: "$19/mo",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    price: "$49/mo",
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    title: "Premium",
    price: "$99/mo",
    features: ["Feature X", "Feature Y", "Feature Z"],
  },
];

const Pricing = () => {
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
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const priceStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "24px",
  };

  const featureListStyle = {
    listStyleType: "none",
    padding: 0,
    marginBottom: "24px",
  };

  const featureStyle = {
    color: "#4a4a4a",
    marginBottom: "8px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
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
            <button style={buttonStyle}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
