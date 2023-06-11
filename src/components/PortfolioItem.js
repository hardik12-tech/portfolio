import React from 'react';
import '../assets/styles/PortfolioItem.css';

const PortfolioItem = ({ title, description, image }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PortfolioItem;
