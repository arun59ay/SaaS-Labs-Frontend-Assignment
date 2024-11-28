import React from 'react';
import '../styles/Header.css';

export const Header: React.FC = () => (
  <header className="header">
    <div className="header-content">
      <div className="logo">
        <h1>Kickstarter Projects</h1>
        <p className="subtitle">Discover Top Funded Projects</p>
      </div>
    </div>
  </header>
);