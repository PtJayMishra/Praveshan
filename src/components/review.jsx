import React from "react";
import PropTypes from "prop-types";

const Review = ({ title, description, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#FFD700" : "#e4e5e9" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        flex: "1 1 calc(33.333% - 16px)",
        margin: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        minWidth: "250px",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px" }}>{description}</p>
      <div style={{ fontSize: "18px" }}>{renderStars()}</div>
    </div>
  );
};

Review.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const ReviewGiven = () => {
  const reviews = [
    {
      title: "Excellent Service and Timely Delivery",
      description:
        "I had a great experience with Praveshan Movin In and Out! Their team was punctual, professional, and handled my belongings with care. Everything arrived at my new home in perfect condition, and their rates were very reasonable. Highly recommend!",
      rating: 5,
    },
    {
      title: "Stress-Free Moving Experience",
      description:
        "Moving can be so stressful, but Praveshan made it effortless for me. From packing to transportation, they were efficient and reliable. Their customer support team was always available to answer my questions. I’ll definitely use their services again.",
      rating: 4,
    },
    {
      title: "Affordable and Friendly Service",
      description:
        "I was on a tight budget, but Praveshan Movin In and Out offered an affordable package without compromising on quality. The staff was friendly, and they made sure everything was organized. A fantastic experience overall!",
      rating: 4,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {reviews.map((review, index) => (
        <Review
          key={index}
          title={review.title}
          description={review.description}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default ReviewGiven;
