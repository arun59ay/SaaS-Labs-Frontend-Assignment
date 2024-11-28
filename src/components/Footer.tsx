import React from 'react';
import '../styles/Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>Explore successful Kickstarter projects and their funding achievements. Our platform provides insights into the most successful crowdfunding campaigns, helping you understand what makes projects successful.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Kickstarter Projects. All rights reserved.</p>
      </div>
    </footer>
  );
};